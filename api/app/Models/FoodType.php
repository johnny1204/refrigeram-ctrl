<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * App\Models\FoodType
 *
 * @property int $id
 * @property string $name
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @method static \Illuminate\Database\Eloquent\Builder|FoodType newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|FoodType newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|FoodType query()
 * @method static \Illuminate\Database\Eloquent\Builder|FoodType whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|FoodType whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|FoodType whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|FoodType whereUpdatedAt($value)
 * @mixin \Eloquent
 */
class FoodType extends Model
{
    use HasFactory;

    /** @var array */
    protected $fillable = ['name', 'unique_key'];
}
