import os from 'os'
import path from 'path'

import {
  NUZ_AUTH_FILENAME,
  NUZ_CONFIG_ALLOW_SET_KEYS,
  NUZ_CONFIG_FILENAME,
} from '../lib/const'

import * as fs from '../utils/fs'
import * as paths from '../utils/paths'

type UserPaths = {
  home: string
  root: string
  nuzrc: string
  config: string
  auth: string
}

interface UserConfig {}

class User {
  private readonly paths: UserPaths

  constructor() {
    const home = os.homedir()
    const root = path.join(os.homedir(), '.nuz')
    const nuzrc = path.join(root, '.nuzrc')

    const config = path.join(nuzrc, NUZ_CONFIG_FILENAME)
    const auth = path.join(nuzrc, NUZ_AUTH_FILENAME)

    this.paths = {
      home,
      root,
      nuzrc,
      config,
      auth,
    }
  }

  private async initial() {
    // Clone default root dir
    const rootTemplatePath = path.join(paths.tool + '/templates/root')
    await fs.copy(rootTemplatePath, this.paths.root)

    // Make a symlinks to use
    const defaultUserPath = path.join(this.paths.root, 'users/default')
    await fs.symlink(defaultUserPath, this.paths.nuzrc)
  }

  private async writeConfig(data: UserConfig) {
    const result = await fs.writeJson(this.paths.config, data)

    return result
  }

  private async readConfig(): Promise<UserConfig> {
    const result = await fs.readJson(this.paths.config)

    return result as UserConfig
  }

  async prepare() {
    const dirIsExisted = fs.exists(this.paths.root)
    if (!dirIsExisted) {
      await this.initial()
    }
  }

  async ready() {
    return true
  }

  async isLogged() {}
  async requestLogin() {}

  async setConfig(key: string, value: any) {
    await this.ready()

    if (!NUZ_CONFIG_ALLOW_SET_KEYS.includes(key)) {
      throw new Error(`Can't set ${key}, invalid key!`)
    }

    const config = await this.readConfig()
    config[key] = value

    await this.writeConfig(config)
    return true
  }

  async getConfig(key?: string) {
    await this.ready()

    const config = await this.readConfig()
    return !key ? config : config[key]
  }

  async setAuth() {}
  async getAuth() {}
}

export default User
