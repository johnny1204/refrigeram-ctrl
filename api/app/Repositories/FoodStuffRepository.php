<?php
namespace App\Repositories;

use App\Models\FoodStuff;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Collection;

class FoodStuffRepository
{
    /**
     * @param array $params
     * @return Collection
     */
    public function getListByCondition(array $params = []): Collection
    {
        /** @var Builder */
        $query = FoodStuff::query();
        if (!empty($params['type_name'])) {
            $query->whereHas('foodType', function (Builder $query) use ($params) {
                $query->where('unique_key', $params['type_name']);
            });
        }

        $query->orderBy('id');

        return $query->get();
    }
}
