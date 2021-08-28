<?php
namespace App\Http\Resources\FoodType;

use Illuminate\Http\Resources\Json\JsonResource;

/**
 * @OA\Schema(
 *     schema="FoodTypeListResource",
 *     description="食品タイプリストアイテム",
 *     type="object",
 *     required={
 *         "type",
 *         "name",
 *     },
 *     @OA\Property(
 *         property="type",
 *         type="string",
 *         description="ID",
 *         example="meat"
 *     ),
 *     @OA\Property(
 *         property="name",
 *         type="string",
 *         description="タイプ名",
 *         example="肉"
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
            'type'    => $this->unique_key,
            'name'    => $this->name,
        ];
    }
}
