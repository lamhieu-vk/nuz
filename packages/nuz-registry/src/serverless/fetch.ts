import { Express } from 'express'

import Worker from '../classes/Worker'
import onRoute from '../utils/onRoute'

import { ServerlessRoute } from './types'

export const name = 'fetch'

export const execute: ServerlessRoute = (app: Express, worker: Worker) => {
  app.get(
    '/fetch',
    onRoute(async (request, response) => {
      const { compose } = request.query

      const formIsMissing = !compose
      if (formIsMissing) {
        throw new Error('Missing compose id to fetch data')
      }
      const item = await worker.fetch(compose as string)

      response.json(item)
      return true
    }),
  )
}