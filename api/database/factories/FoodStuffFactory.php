<?php
namespace Database\Factories;

use App\Models\FoodStuff;
use App\Models\FoodType;
use Illuminate\Database\Eloquent\Factories\Factory;

class FoodStuffFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = FoodStuff::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'food_type_id' => FoodType::factory()->create()->id,
            'name'         => $this->faker->text(10),
            'count'        => rand(1, 5)
        ];
    }
}
