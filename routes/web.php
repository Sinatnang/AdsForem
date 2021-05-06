<?php

use Illuminate\Support\Facades\Route;

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
    return view('page.home');
});
Route::resource('national', 'MobileController');
// Route::resource('viewdesktop', 'DesktopController');
Route::resource('viewadsdesktop', 'ViewDesktopController');
Route::resource('business', 'BusinessController');
Route::resource('lifestyle', 'LifestyleController');
Route::resource('travel', 'TravelController');
Route::resource('sport', 'SportController');
Route::resource('opinion', 'OpinionController');
Route::resource('international', 'InternationalController');
Route::resource('jobs', 'JobsController');
Route::get('/read-national', function () {
    return view('page.national.read-national');
});
Route::get('/national', function () {
    return view('page.national.national');
});
Route::get('/read-business', function () {
    return view('page.business.read-business');
});
Route::get('/read-lifestyle', function () {
    return view('page.lifestyle.read-lifestyle');
});
Route::get('/read-travel', function () {
    return view('page.read-travel');
});
Route::get('/read-sport', function () {
    return view('page.read-sport');
});
Route::get('/read-opinion', function () {
    return view('page.read-opinion');
});
Route::get('/read-international', function () {
    return view('page.read-international');
});
Route::get('/read-jobs', function () {
    return view('page.read-jobs');
});
Route::get('/nat-post-depth', function () {
    return view('page.national.nat-post-depth');
});
Route::get('/nat-politics', function () {
    return view('page.national.nat-politics');
});
Route::get('/nat-kr-tribunal', function () {
    return view('page.national.nat-kr-tribunal');
});
Route::get('/bus-education', function () {
    return view('page.business.bus-education');
});
Route::get('/bus-financial', function () {
    return view('page.business.bus-financial');
});
Route::get('/bus-post-property', function () {
    return view('page.business.bus-post-property');
});
Route::get('/bus-post-focus', function () {
    return view('page.business.bus-post-focus');
});
Route::get('/bus-post-auto', function () {
    return view('page.business.bus-post-auto');
});
Route::get('/life-arts-culture', function () {
    return view('page.lifestyle.life-arts-culture');
}); 
Route::get('/life-food-drink', function () {
    return view('page.lifestyle.life-food-drink');
}); 
Route::get('/life-around-ngos', function () {
    return view('page.lifestyle.life-around-ngos');
});
Route::get('/life-creativity-innovation', function () {
    return view('page.lifestyle.life-creativity-innovation');
});
Route::get('/travel-post-siem-reap', function () {
    return view('page.travel-post-siem-reap');
});
//Route dashboard
// Route::resource('dashboard', 'DashboardController');
Route::resource('create', 'CreateAdsController');
// Route::get('/view', function () {
//     return view('page.viewdashboard');
// });

