import { IRouteViewModel, Routeable } from "aurelia";
import { Users } from './users/users';

export class MyApp implements IRouteViewModel {
	public message = 'Hello World!';
	static routes: Routeable[] = [
		{
			path: 'users',
			component: Users
		}
	];
}
