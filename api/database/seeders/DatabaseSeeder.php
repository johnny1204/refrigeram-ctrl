<?php
namespace Database\Seeders;

use App\Models\Cart;
use App\Models\FoodType;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        Cart::factory()->count(3)->create();
    }
}
