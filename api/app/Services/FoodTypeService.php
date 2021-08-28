<?php
namespace App\Services;

use App\Http\Resources\FoodType\ListResource;
use App\Models\FoodType;
use App\Repositories\FoodTypeRepository;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;

class FoodTypeService
{
    public function __construct(private FoodTypeRepository $repo)
    {
    }

    /**
     * @return AnonymousResourceCollection
     */
    public function getList(): AnonymousResourceCollection
    {
        $results = collect([
            new FoodType(['unique_key' => '', 'name' => '全て'])
        ])->merge($this->repo->fetchList());

        return ListResource::collection($results);
    }
}
