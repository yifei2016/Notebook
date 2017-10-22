<?php

namespace App\Http\Controllers;

class PagesController extends Controller
{
  public function home()
  {
    $people = ['Taylor', 'Matt', 'Jeffrey'];
    return view('welcome', compact('people'));
  }
  //welcome.blade.php = welcome
   //return view('pages.about');//resources/views/pages/about.blade.php
   //====='pages/about'
  public function about()
  {
    return 'About Page';
  }
}

public function _construct()
{
  $this->middleware('auth', ['only' => ['index']]);
  //$this->middleware('auth', ['except' => ['index']]);
}

//we can write middleware either in route file or controller file
