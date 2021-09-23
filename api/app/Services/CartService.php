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
            $cart = $this->repo->updateCountByCartId($data['count'], $cartItem->id);
        } else {
            $cart = $this->repo->createCartItem($data);
        }

        return ['name' => $cart->food_name, 'count' => $cart->count];
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
