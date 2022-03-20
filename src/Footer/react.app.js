import React from 'react';
import ReactDOM from 'react-dom';
import Footer from './components/Footer';
import singleSpaReact from "single-spa-react";

const reactLifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: Footer,
  domElementGetter: () => document.getElementById('footer'),
  suppressComponentDidCatchWarning: true,
})

export const bootstrap = [reactLifecycles.bootstrap]

export const mount = [reactLifecycles.mount]

export const unmount = [reactLifecycles.unmount]