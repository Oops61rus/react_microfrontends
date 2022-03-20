import { registerApplication, start } from 'single-spa'
import { createStore } from './store'

window.store = createStore()

registerApplication({
  name: 'header',
  app: () => import('./Header/react.app'),
  activeWhen: '/',
})

registerApplication({
  name: 'main',
  app: () => import('./Main/react.app'),
  activeWhen: '/',
})

registerApplication({
  name: 'footer',
  app: () => import('./Footer/react.app'),
  activeWhen: '/',
})

start()