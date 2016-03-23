import React from 'react';
import {mount} from 'react-mounter';
import Layout from './components/MainLayout.jsx';
import HomePage from './components/HomePage.jsx';

export default function (injectDeps, {FlowRouter}) {
  const MainLayoutCtx = injectDeps(Layout);
  FlowRouter.route('/', {
    name: 'home',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<HomePage />)
      });
    }
  });
}