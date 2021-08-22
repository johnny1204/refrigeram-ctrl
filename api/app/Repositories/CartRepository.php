<?php
namespace App\Repositories;

use App\Models\Cart;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Collection;

class CartRepository
{
    /**
     * @param string $name
     *
     * @return Cart
     */
    public function findCartByFoodStuffName(string $name): Cart
    {
        $query = Cart::whereHas('foodStuff', fn (Builder $query) => $query->where('name', $name));

        return $query->firstOrFail();
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
}
