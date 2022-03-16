import Aurelia, { RouterConfiguration } from 'aurelia';
import { MyApp } from './my-app';
import { SharedElements } from './shared/elements';
import { Utils } from './util';

Aurelia
	.register(RouterConfiguration, SharedElements, Utils)
	.app(MyApp)
	.start();
