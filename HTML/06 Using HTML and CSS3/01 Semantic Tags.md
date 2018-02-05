# Semantic Tags

## New Semantic Elements

![SemanticElements](SemanticElements.jpg)

- **Block** level elements contain a _grouping_ of elements
- **Text** level elements only contain _text_ withing the element

- The `<hgroup></hgroup>` tag is an header group.  So if you have a main header and subheader you get a proper outline of your site allowing for more accurate parsing.

- Using semantic tags allows for better parsing, better mirrors reality and is fairly easy to upgrade existing sites to use HTML5 semantic tags.

- The `<figure></figure>` tag indicates a picture or video on the page

### Example

```html
<section id="services">
    <hgroup>
        <h1>Services</h1>
        <h2>Upgradeing Your Skills</h2>
    </hgroup>
    <figure>
        <video id="myvideo" width="600" controls>
            <source src="video/myvideo.mp4" />
        </video>

        <canvas width="600" height="300" id="canvas">
            <div id="canvasFallback">
                <div style="font-size:xx-large">Your Browser Does Not Support HTML5</div>
            </div>
        </canvas>

        <figcaption id="caption">TWEAK THE EXPERIENCE</figcaption>
    </figure>
</section>
```

- FontSquirrel.com has 100% free from commercial use fonts available

```css
/**** This says whatever is selected on the screen style it as such ****/
::selection, ::-mos-selection
{
    background-color: rgba(122,192,0,0, 0.2); /** .2 is 20% opacity **/
}

/**** SHADOWING ****/
h1
{
    text-shadow: 2px 2px 2px #000; /** + or - values determine direction of shadow **/
}

/**** TRANSFORMS ****/
mark
{
    transform: scaleX(-1.1) rotate(-4deg); /** reverses text and slightly tips is backwards **/
}
```