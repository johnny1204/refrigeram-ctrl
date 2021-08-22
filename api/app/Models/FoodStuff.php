<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * App\Models\FoodStuff
 *
 * @property int $id
 * @property string $name
 * @property int $food_type_id
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @method static \Illuminate\Database\Eloquent\Builder|FoodStuff newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|FoodStuff newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|FoodStuff query()
 * @method static \Illuminate\Database\Eloquent\Builder|FoodStuff whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|FoodStuff whereFoodTypeId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|FoodStuff whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|FoodStuff whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|FoodStuff whereUpdatedAt($value)
 * @mixin \Eloquent
 */
class FoodStuff extends Model
{
    use HasFactory;
}
