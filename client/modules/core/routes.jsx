import React from 'react';
import {mount} from 'react-mounter';
import Layout from './components/MainLayout.jsx';
import HomePage from './components/HomePage.jsx';

export default function (injectDeps, {FlowRouter}) {
  const MainLayoutCtx = injectDeps(Layout);

  FlowRouter.triggers.enter([(context) => {
    var page = {}
    if (context.path) {
      page.path = context.path
    }
    if (context.context && context.context.title) {
      page.title = context.context.title
    }
    if (context.context && context.route.name) {
      page.name = context.route.name
    }
    page.url = window.location.origin + page.path

    if (context.route && context.route.name) {
      page.name = context.route.name;
    } else {
      page.name = page.path;
    }
    if (context.context && context.context.querystring) {
      page.search = "?" + context.context.querystring;
    } else {
      page.search = "";
    }
    if(GAnalytics) {
      GAnalytics.pageview(page.name);
    }
  }])

  FlowRouter.route('/', {
    name: 'home',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<HomePage />)
      });
    }
  });

  /*
  FlowRouter.notFound = {
    action() {
      mount(MainLayoutCtx, {
        content: () => (<HomePage />)
      })
    }
  };
  */
}