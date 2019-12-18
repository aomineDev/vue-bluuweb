<?php

use Illuminate\Http\Request;

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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::group(['middleware' => 'cors'], function(){
    Route::get('/tasks', 'TasksController@getAll')->name('getAllTasks');
    Route::post('/addTask', 'TasksController@addTask')->name('addTask');
    Route::get('/task/{id}', 'TasksController@getTask')->name('getTask');
    Route::get('/removeTask/{id}', 'TasksController@removeTask')->name('removeTask');
    Route::post('/updateTask/{id}', 'TasksController@updateTask')->name('updateTask');
});





