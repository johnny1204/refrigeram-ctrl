<?php
namespace Database\Factories;

use App\Models\Cart;
use App\Models\FoodStuff;
use Illuminate\Database\Eloquent\Factories\Factory;

class CartFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Cart::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'food_stuff_id' => FoodStuff::factory()->create()->id,
            'count'         => rand(1, 10)
        ];
    }
}
