<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::prefix('cart')->namespace('Cart')->group(function () {
    Route::get('', 'GetController');
    Route::put('/update', 'UpdateController');
});

Route::prefix('food_stuff')->namespace('FoodStuff')->group(function () {
    Route::get('', 'GetController');
});

Route::prefix('food_type')->namespace('FoodType')->group(function () {
    Route::get('', 'GetController');
});
