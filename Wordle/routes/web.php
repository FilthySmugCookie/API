<?php

use Illuminate\Support\Facades\Route;
use inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return inertia::render('Home');
});

Route::get('/users', function () {
    return inertia::render('Users',[
        'time'=>now()->toTimeString()
    ]);
});

Route::get('/settings', function () {
    return inertia::render('Settings');
});

Route::post('/logout', function () {
    dd(request('foo'));
});

