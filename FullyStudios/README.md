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
```
$this.props.location
```
(https://www.w3schools.com/js/js_window_location.asp)

### [how to pass props to component in Route](https://github.com/ReactTraining/react-router/issues/4627)
```
<Route path={`/${video.vimeo_id}`} render={(props) => 
        <VideoFrame data={video}/>
      } />
```
### [to render different path without # in url, based on one url](https://github.com/ReactTraining/react-router/blob/master/packages/react-router-dom/docs/api/HashRouter.md)

```
<HashRouter basename="/calendar"/>
<Link to="/today"/> // renders <a href="#/calendar/today">