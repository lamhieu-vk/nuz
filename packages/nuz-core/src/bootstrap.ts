import { BootstrapConfig } from './types'

import * as react from './factories/react'
import * as shared from './shared'

import * as exportsAll from './exports'

async function bootstrap(configAsRaw: BootstrapConfig) {
  shared.state.initialized = true

  const deps = react.integrate()
  const config = Object.assign({}, configAsRaw, {
    vendors: Object.assign(
      {
        '@nuz/core': exportsAll,
      },
      deps,
      configAsRaw.vendors,
    ),
  })

  await shared.process.initial(config)

  return shared.process
}

export default bootstrap
