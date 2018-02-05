# Music & Video

* The **controls** attribute enables the play controls
* The **loop** attribute makes the content loop when it reaches the end
* The **preload** attribute enables loading content when the page begins loading
* The **poster** attribute can be used to show a specific picture instead of a frame of video

```html
<video controls width="900">
<!-- List the files in the order you want them served based on browser -->
    <source src="path to video file">
    <source src="path to video file">
    <source src="path to video file">
    <p>This browser does not support native video</p>
</video>

<audio controls>
    <source src"path to audio file">
    <source src"path to audio file">
    <source src"path to audio file">
    <p>This browser does not support native audio</p>
</audio>
```

Event listeners in JavaScript allow us to control video and audio controls. Event listeners take the following patter

```javascript
begin.addEventListener('click'), function()..., false)
//use false as the third element most of the time
```