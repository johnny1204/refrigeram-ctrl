<?php
namespace App\Http\Resources\Cart;

use Illuminate\Http\Resources\Json\JsonResource;

/**
 * @OA\Schema(
 *     schema="CartListResource",
 *     description="カートアイテム",
 *     type="object",
 *     required={
 *         "id",
 *         "food_name",
 *         "count",
 *     },
 *     @OA\Property(
 *         property="id",
 *         type="integer",
 *         description="ID",
 *         example=1
 *     ),
 *     @OA\Property(
 *         property="name",
 *         type="string",
 *         description="食品名",
 *         example="鶏胸肉"
 *     ),
 *     @OA\Property(
 *         property="count",
 *         type="integer",
 *         description="個数",
 *         example=2
 *     ),
 * )
 */
class CartListResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id'        => $this->id,
            'name'      => $this->foodStuff->name,
            'count'     => $this->count
        ];
    }
}
