import Aurelia, { RouterConfiguration } from 'aurelia';
import { GoogleMapsConfiguration } from 'aurelia2-google-maps';
import { App } from './app';
import { SharedElements } from './shared/elements';
import { Utils } from './util';

const mapsPluginOptions = {
	apiKey: 'AIzaSyBDpatbgT78e3gupI5NgbFsyoS7_P9fUcY',
	apiLibraries: 'geometry', // see https://developers.google.com/maps/documentation/javascript/libraries
	options: {
		panControl: true,
		panControlOptions: {
			position: 9
		},
		zoom: 12
	} // see https://developers.google.com/maps/documentation/javascript/3.exp/reference#MapOptions
};

Aurelia
	.register(
		RouterConfiguration,
		SharedElements,
		Utils
	)
	.register(
		GoogleMapsConfiguration.customize(config => {
			config.apiKey = 'AIzaSyBDpatbgT78e3gupI5NgbFsyoS7_P9fUcY';
		})
	)
	.app(App)
	.start();
