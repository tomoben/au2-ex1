import { IContainer } from 'aurelia';
import { CurrentWeatherCustomElement } from './current-weather';

export const SharedElements = {
	register(container: IContainer): void {
		container.register(CurrentWeatherCustomElement);
	}
}
