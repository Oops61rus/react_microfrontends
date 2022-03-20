import React from 'react';
import ReactDOM from 'react-dom';
import Main from './components/Main';
import singleSpaReact from 'single-spa-react';

const reactLifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: Main,
  domElementGetter: () => document.getElementById('main'),
  suppressComponentDidCatchWarning: true,
})

export const bootstrap = [reactLifecycles.bootstrap]

export const mount = [reactLifecycles.mount]

export const unmount = [reactLifecycles.unmount]