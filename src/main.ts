import Aurelia, { RouterConfiguration } from 'aurelia';
import { App } from './app';
import { SharedElements } from './shared/elements';
import { Utils } from './util';

Aurelia
	.register(RouterConfiguration, SharedElements, Utils)
	.app(App)
	.start();
