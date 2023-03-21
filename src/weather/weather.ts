import { inject } from 'aurelia';
import { MapOptions } from '../util/maps';
import { Rest } from '../util/rest';

@inject(Rest)
export class Weather {
	public heading = 'Weather in selected city';
	public city = 'New York';
	public cityToWeather: string;
	public address: string;
	public apiKey = 'AIzaSyBDpatbgT78e3gupI5NgbFsyoS7_P9fUcY';  // API key from https://www.weatherbit.io
	public currentWeather;
	public error: string;
	public iconUrl: string;
	public weatherWidget;
	public weatherWidget2;
	public gmap;
	public mapOptions: MapOptions = {
		address: '',
		zoom: 12,
		lat: 40.71427,
		lon: -74.00597
	};
	public myClass: string = Math.random() > 0.5 ? 'benny' : '';

	constructor(private rest: Rest) {
		// this.map = new GoogleMaps();
	}

	public created() {
		this.cityToWeather = this.city;
	}

	public attached(): void {
		// this.getWeatherCurrentGeosearch();
	}

	get selectedCity(): string {
		return this.city;
	}

	// @computedFrom("selectedCity")
	get weather(): string {
		let valueToDisplay = 'City not found';

		if (this.currentWeather && this.currentWeather.count) {
			const data = this.currentWeather.data[0];

			valueToDisplay = `${Math.round(data.temp).toString()} degrees. ${data.weather.description}`;
		}

		return valueToDisplay;
	}

	public submit() {
		this.weatherWidget.getWeatherCurrentGeosearch();
		this.weatherWidget2.getWeatherCurrentGeosearch();
		this.cityToWeather = this.city;

		return false;
	}

	private getWeatherCurrentGeosearch(): void {
		this.rest.getWeatherCurrentGeosearch(this.apiKey, this.city)
			.then((response: any) => {
				if (!response) {
					throw new Error('No response');
				}
				if (response.error) {
					throw response.error;
				}
				this.currentWeather = response;
				this.iconUrl = this.rest.getWeatherIconUrl(this.apiKey, this.currentWeather.data[0].weather.icon);

				const newAddress = `${this.city}, ${this.currentWeather.data[0].country_code}`;

				if (this.gmap.address !== newAddress) {
					this.gmap.clearMarkers();
				}
				this.mapOptions.address = newAddress;
				// console.log("Map:", newAddress);
			})
			.catch(error => {
				this.currentWeather = null;
				this.error = error;
			});
	}
}
