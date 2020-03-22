import { REACT_DOM_INJECTED } from '@nuz/shared'

import checkIsReady from './checkIsReady'
import getTagsInHead from './getTagsInHead'

export interface ReactHelpersConfig {
  React: any
  ReactDOM: any
}

export interface ReactHelpersFactoryOptions {
  autoInject?: boolean
}

const defaultOptions = {
  autoInject: true,
}

function reactHelpersFactory(
  { React, ReactDOM }: ReactHelpersConfig,
  options?: ReactHelpersFactoryOptions,
) {
  const { autoInject } = Object.assign({}, defaultOptions, options)

  if (!React) {
    throw new Error(
      'React fields in config is required to use "reactHelpersFactory" helper!',
    )
  }

  if (!ReactDOM) {
    throw new Error(
      'ReactDOM fields in config is required to use "reactHelpersFactory" helper!',
    )
  }

  const { useMemo } = React

  const App = ({
    component: Component = 'main' as any,
    injectHead: InjectHead,
    children,
    ...rest
  }) => {
    const definedTags = getTagsInHead()
    const headTags = useMemo(
      () =>
        definedTags.map(item => {
          const { type: TagComponent, attributes } = item

          const key = `${attributes.rel}-${attributes.href}`
          const props = Object.assign({ key }, item.attributes)
          return <TagComponent {...props} />
        }),
      [],
    )

    return (
      <Component {...rest} id="main">
        <InjectHead>{headTags}</InjectHead>
        {children}
      </Component>
    )
  }

  const originalRender = ReactDOM.render
  const originalHydrate = ReactDOM.hydrate

  const injectReact = () => {
    if (ReactDOM[REACT_DOM_INJECTED]) {
      return false
    }

    Object.assign(ReactDOM, {
      render: async (...rest) => {
        await checkIsReady()
        return originalRender.apply(ReactDOM, rest as any)
      },
      hydrate: async (...rest) => {
        await checkIsReady()
        return originalHydrate.apply(ReactDOM, rest as any)
      },
    })

    Object.defineProperty(ReactDOM, REACT_DOM_INJECTED, { value: true })
    return true
  }

  if (autoInject) {
    injectReact()
  }

  return { App, injectReact }
}

export default reactHelpersFactory