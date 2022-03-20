import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import singleSpaReact from "single-spa-react";

const reactLifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: Header,
  domElementGetter: () => document.getElementById('header'),
  suppressComponentDidCatchWarning: true,
})

export const bootstrap = [reactLifecycles.bootstrap]

export const mount = [reactLifecycles.mount]

export const unmount = [reactLifecycles.unmount]