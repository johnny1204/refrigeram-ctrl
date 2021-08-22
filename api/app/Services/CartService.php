<?php
namespace App\Services;

use App\Http\Resources\Cart\CartListResource;
use App\Repositories\CartRepository;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;

class CartService
{
    public function __construct(private CartRepository $repo)
    {
    }

    /**
     * @param array $data
     *
     * @return array
     */
    public function update(array $data): array
    {
        $cartItem = $this->repo->findCartByFoodStuffName($data['food_name']);
        $this->repo->updateCountByCartId($data['count'], $cartItem->id);

        return ['success' => 200];
    }

    /**
     * @return CartListResource
     */
    public function getCartList(): AnonymousResourceCollection
    {
        $cartList = $this->repo->getCartList();

        return CartListResource::collection($cartList);
    }
}
