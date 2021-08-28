export type FoodStuff = {
	id: number;
	name: string;
	type: string;
	stock: number;
};

type FoodStuffs = FoodStuff[];

export const foodStuffs: FoodStuffs = [
	{
		id: 1,
		name: '鶏もも肉',
		type: 'meat',
		stock: 1,
	},
	{
		id: 2,
		name: '玉ねぎ',
		type: 'vegetable',
		stock: 3,
	},
	{
		id: 3,
		name: 'にんじん',
		type: 'vegetable',
		stock: 2,
	},
	{
		id: 4,
		name: 'じゃがいも',
		type: 'vegetable',
		stock: 1,
	},
	{
		id: 5,
		name: '鮭',
		type: 'fish',
		stock: 1,
	},
];

export type FoodType = {
	name: string;
	type: string;
};

export type CartItem = {
	name: string;
	count: number;
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
