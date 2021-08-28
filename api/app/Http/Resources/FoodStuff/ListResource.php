<?php
namespace App\Http\Resources\FoodStuff;

use Illuminate\Http\Resources\Json\JsonResource;

/**
 * @OA\Schema(
 *     schema="FoodStuffListResource",
 *     description="在庫リストアイテム",
 *     type="object",
 *     required={
 *         "id",
 *         "name",
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
 *         property="stock",
 *         type="integer",
 *         description="在庫数",
 *         example=2
 *     ),
 * )
 */
class ListResource extends JsonResource
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
            'id'    => $this->id,
            'name'  => $this->name,
            'stock' => $this->count,
        ];
    }
}
