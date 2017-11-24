## How to solve img cache problem
[stack flow](https://stackoverflow.com/questions/728616/disable-cache-for-some-images)
### \`\` is used in js , \`\` in jsx, use {\`\`}.

<!-- ## [to solve iframe autoreload problem](https://stackoverflow.com/questions/38093760/how-to-access-a-dom-element-in-react-what-is-the-equilvalent-of-document-getele)
```
setSize(width,height){
		var newSize = {width: width,height: height}
		this.setState(newSize,function(){
				this.refs.remoteFrame.contentWindow.location.reload(true); // this is the key to solve the iFrame reload issue.
			});
	}
	render() {
		let k = 1;
		const newList = aData.sections.map(section => section.posts.map( post => {return <Post key={k++} set={this.setSize} eachPost={post} />}));
```
```
<iframe ref="remoteFrame"
	key={`${this.state.width}x${this.state.height}`}
	src={`../dist/${this.state.width}x${this.state.height}/index.html`}
	width='980'
	height='300'>
  </iframe>
``` -->
### [iframe can not in js, so the above code will cause cross origin problem, so write each iframe with one route.](https://stackoverflow.com/questions/25098021/securityerror-blocked-a-frame-with-origin-from-accessing-a-cross-origin-frame)
```
const imageRoutes = aData.images.map(image =>
      <Route path={`/${image.width}x${image.height}`} render={(props) =>
        <ImageFrame data={image}/>
      } />
    )
```


## [How to obtaining the querystring from the current URL with JavaScript?](https://stackoverflow.com/questions/9870512/how-to-obtaining-the-querystring-from-the-current-url-with-javascript)

## [this.props.location]
(https://www.w3schools.com/js/js_window_location.asp)

### [how to pass props to component in Route](https://github.com/ReactTraining/react-router/issues/4627)
```
<Route path={`/${video.vimeo_id}`} render={(props) =>
        <VideoFrame data={video}/>
      } />
```
### [to render different path without # in url, based on one url](https://github.com/ReactTraining/react-router/blob/master/packages/react-router-dom/docs/api/HashRouter.md)

### [take away service worker](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#making-a-progressive-web-app)

```
<HashRouter basename="/calendar"/>
<Link to="/today"/> // renders <a href="#/calendar/today">
```

### rotate(X) 向上翻 rotate(Y)扭来扭去
### för att lista node version,default version is v.9.0
```
$nvm list
```
### to use node version
```$ nvm use version number/system```
### npm install to install grunt locally

### cd Homestead to set up local environment, then can find vagrant box
### to install node version
```
nvm install versionNumber
```
### to run project with same node version, use node right version, then $grunt to start project on webpage.
### to run project on valet server
### $cd valet $valet restart $git clone project  then run on webpage with folder name.dev

### react router, a tag kan inte känna av a:active, so use Link instead.
###image ratio is 16:9 svg has existing ratio, video has no ratio, background-img has no ratio.

### [create-react-app only includes a few ES6 polyfills,If you use any other ES6+ features that need runtime support (such as Array.from() or Symbol), make sure you are including the appropriate polyfills manually, or that the browsers you are targeting already support them.](higher order functions is not surpoted on IE11.)(https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#supported-language-features-and-polyfills)

### [react router hashHistory and browserHistory](http://dobit.top/Detail/350.html),config router in .htaccess on Apache server(https://gkedge.gitbooks.io/react-router-in-the-real/content/apache.html)

### service worker is for offline cache, registerServiceWorker is registered for the react project a service worker, used to do resource caching, this will give you faster access to resources on your next visit.registerServiceWorker registered service worker only in production environment (process.env.NODE_ENV === 'production')