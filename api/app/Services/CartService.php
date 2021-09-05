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
    public function save(array $data): array
    {
        $cartItem = $this->repo->findCartByFoodName($data['food_name']);
        if ($cartItem) {
            $this->repo->updateCountByCartId($data['count'], $cartItem->id);
        } else {
            $this->repo->createCartItem($data);
        }

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
