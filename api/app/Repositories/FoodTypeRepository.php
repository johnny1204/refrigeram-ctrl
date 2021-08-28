<?php
namespace App\Repositories;

use App\Models\FoodType;
use Illuminate\Database\Eloquent\Collection;

class FoodTypeRepository
{
    /**
     * @return Collection
     */
    public function fetchList(): Collection
    {
        return FoodType::orderBy('id')->get();
    }
}
