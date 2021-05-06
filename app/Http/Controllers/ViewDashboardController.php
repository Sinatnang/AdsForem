<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ViewDashboardController extends Controller
{
    public function index()
    {
        return view('page.viewdashboard')->with('viewdashboard');
    }
}
