import path from 'path'
import { Arguments } from 'yargs'

import clearConsole from '../../utils/clearConsole'
import * as configHelpers from '../../utils/configHelpers'
import exitIfModuleInsufficient from '../../utils/exitIfModuleInsufficient'
import * as fs from '../../utils/fs'
import getFeatureConfig from '../../utils/getFeatureConfig'
import * as paths from '../../utils/paths'
import printer, { info, pretty } from '../../utils/print'
import { onExit } from '../../utils/process'
import runWatchMode from '../../utils/runWatchMode'
import serve from '../../utils/serve'
import * as webpackCompiler from '../../utils/webpackCompiler'
import webpackConfigFactory from '../../utils/webpackConfigFactory'

async function standalone({ port = 4000 }: Arguments<{ port?: number }>) {
  const dir = paths.cwd

  const configIsExisted = configHelpers.exists(dir)
  if (!configIsExisted) {
    throw new Error(
      'Not found a config file, file named `nuz.config.js` in root dir',
    )
  }

  const moduleConfig = configHelpers.extract(dir)
  if (!moduleConfig) {
    throw new Error('Config file is invalid')
  }

  exitIfModuleInsufficient(moduleConfig)

  const { name, library, input, output, serve: serveConfig } = moduleConfig

  const featureConfig = getFeatureConfig(dir, moduleConfig)
  const distDir = path.join(dir, path.dirname(output))

  clearConsole()
  info('Clean up distributable module folder')
  await fs.emptyDir(distDir)

  const buildConfig = webpackConfigFactory(
    {
      dev: true,
      cache: true,
      dir,
      config: moduleConfig,
    },
    featureConfig,
  )

  const watcher = await runWatchMode(
    buildConfig as webpackCompiler.AllowWebpackConfig,
  )
  info('Compiler was created for this module')

  const server = serve(
    Object.assign({}, serveConfig, {
      port,
      dir: buildConfig.output.path as string,
    }),
  )
  info(`Server was created to files serving for the module`)
  info(
    'Module information',
    printer.dim(
      pretty({
        name,
        port,
        url: `http://localhost:${port}/${buildConfig.output.filename}`,
      }),
    ),
  )

  onExit(() => {
    server.close()
  })

  return false
}

export default standalone
