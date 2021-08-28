<?php
namespace App\Http\Controllers\Api\FoodStuff;

use App\Http\Controllers\Controller;
use App\Services\FoodStuffService;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;

/**
 *
 * @OA\Get(
 *   path="/api/food_stuff/",
 *   tags={"在庫"},
 *   summary="在庫リスト取得",
 *   @OA\Parameter(
 *      name="type_name",
 *      description="タイプ名",
 *      required=false,
 *      in="query",
 *      @OA\Schema(
 *        type="string",
 *        example="meat",
 *      ),
 *   ),
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
 *                     description="在庫リスト",
 *                     @OA\Items(ref="#/components/schemas/FoodStuffListResource")
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
    public function __invoke(Request $request, FoodStuffService $service): AnonymousResourceCollection
    {
        return $service->getFoodStuffList($request->all());
    }
}
