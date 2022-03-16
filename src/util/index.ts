import { IContainer } from 'aurelia';
import { Rest } from './rest';

export const Utils = {
	register(container: IContainer): void {
		container.register(Rest);
	}
}
