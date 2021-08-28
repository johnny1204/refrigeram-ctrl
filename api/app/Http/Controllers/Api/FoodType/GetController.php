<?php
namespace App\Http\Controllers\Api\FoodType;

use App\Http\Controllers\Controller;
use App\Services\FoodTypeService;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;

/**
 *
 * @OA\Get(
 *   path="/api/food_type/",
 *   tags={"食品タイプ"},
 *   summary="食品タイプリスト取得",
 *   @OA\Response(
 *     response="200",
 *     description="success",
 *     @OA\JsonContent(
 *         allOf={
 *             @OA\Schema(
 *                 schema="Data",
 *                 type="object",
 *                 required={"data"},
 *                 @OA\Property(
 *                     property="data",
 *                     type="array",
 *                     description="食品タイプリスト",
 *                     @OA\Items(ref="#/components/schemas/FoodTypeListResource")
 *                 )
 *             ),
 *         }
 *     )
 *   ),
 *   @OA\Response(
 *     response="500",
 *     description="Internet Server Error"
 *   )
 * )
 */
class GetController extends Controller
{
    public function __invoke(FoodTypeService $service): AnonymousResourceCollection
    {
        return $service->getList();
    }
}
