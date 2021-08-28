<?php
namespace App\Services;

use App\Http\Resources\FoodStuff\ListResource;
use App\Repositories\FoodStuffRepository;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;

class FoodStuffService
{
    public function __construct(private FoodStuffRepository $repo)
    {
    }

    /**
     * @param array $params
     *
     * @return AnonymousResourceCollection
     */
    public function getFoodStuffList(array $params = []): AnonymousResourceCollection
    {
        return ListResource::collection($this->repo->getListByCondition($params));
    }
}
