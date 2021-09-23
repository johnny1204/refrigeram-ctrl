export type FoodStuff = {
	id: number;
	name: string;
	type: string;
	stock: number;
};

export type FoodType = {
	name: string;
	type: string;
};

export type CartItem = {
	name: string;
	count: number;
};

export type foodsOption = {
	key: string;
	text: string;
	value: string;
};

export type CartApiResponse = {
	data: CartItem[];
};

export type FoodStuffApiResponse = {
	data: FoodStuff[];
};

export type FoodTypeApiResponse = {
	data: FoodType[];
};

export type UpdateCartApiResponse = {
	data: CartItem;
};
