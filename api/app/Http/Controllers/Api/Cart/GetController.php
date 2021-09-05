<?php
namespace App\Http\Controllers\Api\Cart;

use App\Http\Controllers\Controller;
use App\Services\CartService;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;

/**
 *
 * @OA\Get(
 *   path="/api/cart/",
 *   tags={"カート"},
 *   summary="カート取得",
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
 *                     description="カート中身",
 *                     @OA\Items(ref="#/components/schemas/CartListResource")
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
    /**
     * @param CartService $service
     *
     * @return AnonymousResourceCollection
     */
    public function __invoke(CartService $service): AnonymousResourceCollection
    {
        return $service->getCartList();
    }
}
