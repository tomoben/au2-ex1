import { IContainer } from 'aurelia';
import { UpperValueConverter } from './converters';
import { Rest } from './rest';

export const Utils = {
	register(container: IContainer): void {
		container.register(Rest, UpperValueConverter);
	}
}
