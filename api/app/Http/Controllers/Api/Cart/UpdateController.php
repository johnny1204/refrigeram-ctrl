<?php
namespace App\Http\Controllers\Api\Cart;

use App\Http\Controllers\Controller;
use App\Http\Requests\Cart\UpdateRequest;
use App\Services\CartService;
use Illuminate\Http\JsonResponse;

/**
 *
 * @OA\Put(
 *   path="/api/cart/update/",
 *   tags={"カート"},
 *   summary="カート更新",
 *   @OA\Parameter(
 *      name="food_name",
 *      description="食品名",
 *      required=true,
 *      in="query",
 *      @OA\Schema(
 *        type="string",
 *        example="鶏胸肉",
 *      ),
 *   ),
 *   @OA\Parameter(
 *      name="count",
 *      description="個数",
 *      required=true,
 *      in="query",
 *      @OA\Schema(
 *        type="integer",
 *        example=1,
 *      ),
 *   ),
 *   @OA\Parameter(
 *     ref="#/components/parameters/X-XSRF-TOKEN"
 *   ),
 *   @OA\Response(
 *     response="200",
 *     description="success",
 *     @OA\JsonContent(
 *       @OA\Property(
 *         property="data",
 *         description="結果",
 *         allOf={
 *           @OA\Schema(
 *             schema="Data",
 *             type="object",
 *             required={"name", "count"},
 *             @OA\Property(
 *                 property="name",
 *                 type="string",
 *                 description="食品名",
 *                 example="鶏胸肉"
 *             ),
 *             @OA\Property(
 *                 property="count",
 *                 type="integer",
 *                 description="個数",
 *                 example=2
 *             ),
 *           ),
 *         }
 *       )
 *     )
 *   ),
 *   @OA\Response(
 *     response="400",
 *     description="パラメータ不足",
 *   ),
 *   @OA\Response(
 *     response="404",
 *     description="リソースなし",
 *   ),
 *   @OA\Response(
 *     response="500",
 *     description="Internet Server Error"
 *   )
 * )
 */
class UpdateController extends Controller
{
    /**
     * @param UpdateRequest $request
     * @param CartService $service
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function __invoke(UpdateRequest $request, CartService $service): JsonResponse
    {
        $resource = $service->save($request->all());

        return response()->json(['data' => $resource]);
    }
}
