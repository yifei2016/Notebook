Route::get('/', function(){
  $people = ['Taylor', 'Matt', 'Jeffrey'];
  return view('welcome', compact('people'));
})


Route::get('/dashboard', 'HomeController@index')->middleware('auth');

Route::get('/cards', 'CardsController@index');
Route::post('/cards', 'CardsController@store');
Route::put('/cards/1', 'CardsController@update');
Route::delete('/cards/1', 'CardsController@destroy');
