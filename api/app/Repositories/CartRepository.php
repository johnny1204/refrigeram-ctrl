<?php
namespace App\Repositories;

use App\Models\Cart;
use Illuminate\Database\Eloquent\Collection;

class CartRepository
{
    /**
     * @param string $name
     *
     * @return null|Cart
     */
    public function findCartByFoodName(string $name): ?Cart
    {
        return Cart::whereFoodName($name)->first();
    }

    /**
     * @param integer $count
     * @param integer $cartId
     *
     * @return Cart|null
     */
    public function updateCountByCartId(int $count, int $cartId): ?Cart
    {
        $cart = Cart::find($cartId);
        if ($count > 0) {
            $cart->fill(['count' => $count])->save();
        } else {
            $cart->delete();
            return null;
        }

        return $cart;
    }

    /**
     * @return Collection
     */
    public function getCartList(): Collection
    {
        return Cart::orderBy('id')->get();
    }

    /**
     * @param array $data
     *
     * @return Cart
     */
    public function createCartItem(array $data): Cart
    {
        $cart = Cart::create(['food_name' => $data['food_name'], 'count' => $data['count']]);

        return $cart;
    }
}
