import {createApp} from 'mantra-core';
import initContext from './configs/context';

//modules
import coreModule from './modules/core';
import jumbotronModule from './modules/jumbotron';

//init context
const context = initContext();

coreModule.context && coreModule.context(context.LocalState);
jumbotronModule.context && jumbotronModule.context(context.LocalState);

//create app
const app = createApp(context);
app.loadModule(coreModule);
app.loadModule(jumbotronModule);
app.init();

