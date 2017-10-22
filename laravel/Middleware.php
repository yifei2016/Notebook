in Kernal.php
protected $routeMiddleware = [
 'admin' => \App\Http\Middleware\Middleware::class
]

public function handle($request, Closure $next)
{
  $user = $request -> user();
  if($user && $user->username == 'JohnAdminstratorDoe'){
    return $next($request);
  }
  abort(404,'No way.');
}
