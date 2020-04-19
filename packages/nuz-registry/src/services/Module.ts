import { LASTEST_TAG, MONGOOSE_ERROR_CODES } from '../lib/const'
import {
  AddCollaboratorData,
  CollaboratorTypes,
  Models,
  ModuleId,
  PublishModuleData,
  UserId,
} from '../types'

import * as collaboratorTypesHelpers from '../utils/collaboratorTypesHelpers'
import compareObjectId from '../utils/compareObjectId'
import * as versionHelpers from '../utils/versionHelpers'

class Module {
  constructor(private readonly Collection: Models['Module']) {}

  async create(userId: UserId, data: PublishModuleData) {
    const {
      name,
      version,
      library,
      format,
      resolve,
      exportsOnly,
      alias,
      fallback,
    } = data

    const creator = { type: CollaboratorTypes.creator, id: userId }
    const collaborators = [creator]

    const versionInfo = {
      name,
      version,
      library,
      format,
      resolve,
      exportsOnly,
      alias,
      fallback,
      publisher: userId,
    }

    const versionId = versionHelpers.encode(versionInfo.version)
    const versions = new Map([[versionId, versionInfo]])
    const tags = new Map([[LASTEST_TAG, version]])

    const module = new this.Collection({
      name,
      collaborators,
      tags,
      versions,
    })
    try {
      await module.save()
    } catch (error) {
      if (error.code === MONGOOSE_ERROR_CODES.UNIQUE_KEY_EXISTED) {
        throw new Error('Module is already existed')
      }

      throw error
    }

    console.log({ module })
    return module
  }

  async addVersion(userId: UserId, data: PublishModuleData) {
    const {
      name,
      version,
      library,
      format,
      resolve,
      exportsOnly,
      alias,
      fallback,
    } = data

    const versionInfo = {
      name,
      version,
      library,
      format,
      resolve,
      exportsOnly,
      alias,
      fallback,
      publisher: userId,
    }

    const versionId = versionHelpers.encode(versionInfo.version)

    const result = await this.Collection.updateOne(
      { _id: name },
      {
        $set: {
          [`versions.${versionId}`]: versionInfo,
          [`tags.${LASTEST_TAG}`]: version,
        },
      },
    )
    console.log({ result })
    return { _id: name }
  }

  async verifyCollaborator(
    id: ModuleId,
    userId: UserId,
    requiredType: CollaboratorTypes,
    throwIfNotFound: boolean = true,
  ) {
    const module = await this.Collection.findOne(
      {
        _id: id,
      },
      { name: 1, collaborators: 1, createdAt: 1, versions: 1 },
    )
    if (!module) {
      if (throwIfNotFound) {
        throw new Error('Module is not found')
      }

      return null
    }

    const collaborator = module.collaborators.find((item) =>
      compareObjectId(item.id, userId),
    )
    if (!collaborator) {
      throw new Error('User does not include collaborators of module')
    }

    const permissionIsDenied = !collaboratorTypesHelpers.verify(
      collaborator.type,
      requiredType,
    )
    if (permissionIsDenied) {
      throw new Error('Permission denied')
    }

    return module
  }

  async addCollaborator(id: ModuleId, collaborator: AddCollaboratorData) {
    const { ok, nModified: mofitied } = await this.Collection.updateOne(
      { _id: id },
      { $addToSet: { collaborators: collaborator } },
    )

    if (mofitied === 0) {
      throw new Error('Scope is not found')
    }

    return { _id: id, mofitied, ok, collaborator }
  }

  async removeCollaborator(id: ModuleId, collaboratorId: UserId) {
    const { ok, nModified: mofitied } = await this.Collection.updateOne(
      { _id: id },
      { $pull: { collaborators: { id: collaboratorId } } },
    )

    if (mofitied === 0) {
      throw new Error('Scope is not found')
    }

    return { _id: id, mofitied, ok }
  }
}

export const createService = (collection: Models['Module']) =>
  new Module(collection)

export default Module
