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
     * @return void
     */
    public function updateCountByCartId(int $count, int $cartId): void
    {
        $cart = Cart::find($cartId);
        $cart->fill(['count' => $count])->save();
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
     */
    public function createCartItem(array $data): void
    {
        Cart::create(['food_name' => $data['food_name'], 'count' => $data['count']]);
    }
}
