import crypto from 'crypto'

const macroRegexp = new RegExp('[./]macro')

function webpackOverrides() {
  return {
    // This function transforms the Babel configuration on a per-file basis
    config(config, { source }) {
      // Babel Macros are notoriously hard to cache, so they shouldn't be
      // https://github.com/babel/babel/issues/8497
      // We naively detect macros using their package suffix and add a random token
      // to the caller, a valid option accepted by Babel, to compose a one-time
      // cacheIdentifier for the file. We cannot tune the loader options on a per
      // file basis.
      if (macroRegexp.test(source)) {
        return Object.assign({}, config.options, {
          caller: Object.assign({}, config.options.caller, {
            craInvalidationToken: crypto.randomBytes(32).toString('hex'),
          }),
        })
      }
      return config.options
    },
  }
}

export default webpackOverrides
