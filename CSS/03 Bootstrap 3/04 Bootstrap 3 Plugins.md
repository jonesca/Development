# Bootstrap 3 Plugins

```html
<div id="accordion" class="panel-group">
    <div class="panel panel-info">
        <div class="panel-heading">
            <div class="panel-title">
                <a href="#first"
                data-toggle="collapse"
                data-parent="#accordion">First</a>
            </div>
        </div>
        <div class="panel-collapse collapse" id="first">
            <div class="panel-body">
                <p>This is some text showing my first panel</p>
            </div>
        </div>
    </div>
</div>
<div id="accordion" class="panel-group">
    <div class="panel panel-info">
        <div class="panel-heading">
            <div class="panel-title">
                <a href="#second"
                data-toggle="collapse"
                data-parent="#accordion">Second</a>
            </div>
        </div>
        <div class="panel-collapse collapse" id="second">
            <div class="panel-body">
                <p>This is some text showing my second panel</p>
            </div>
        </div>
    </div>
</div>
<div id="accordion" class="panel-group">
    <div class="panel panel-info">
        <div class="panel-heading">
            <div class="panel-title">
                <a href="#third"
                data-toggle="collapse"
                data-parent="#accordion">Third</a>
            </div>
        </div>
        <div class="panel-collapse collapse" id="third">
            <div class="panel-body">
                <p>This is some text showing my third panel</p>
            </div>
        </div>
    </div>
</div>
```

## Modal Markup

Modal is hidden by default.  You need something that triggers the modal.

```html
<!-- This is an example of how to call the modal.  Need the ID and data-toggle attributes -->
<a href="#sentDialog" class="btn btn-info" data-toggle="modal">Show Dialog...</a>

<div class="modal fade" id="sentDialog" tabindex="-1">
    <div class="modal-dialog">
        <div class="modal-content">
        <div class="modal-header">
            <!-- create an x in the corner of the dialog box that will close it as well -->
            <a href="#" class="close" data-dismiss="modal">$times;</a>
            <h4>Thanks for Clicking</h4>
        </div>
        <div class="modal-body">
            <p>This form doesn't really work...haha</p>
        </div>
        <div class="modal-footer">
            <!-- The data-dismiss attribute makes the close button work -->
            <button class="btn btn-success" data-dismiss="modal">Close</button>
        </div>
        </div>
    </div>
</div>
```

```javascript
// To work with the modal in the Javascript file

var $sentDialog = $("#sentDialog"); // This gets the modal reference so we only have to do this one time

$("contactForm").on("submit", function(){
    $sentDialog.modal('show'); //show the modal form
    return false; //return false so the form doesn't actuall submit
});

$sentDialog.on("hidden.bs.modal", function(){ //when the dialog is closed by the user do this
    alert("close");
});
```

## Tooltip

```html
<input type="submit" value="Submit" class="btn btn-success" data-toggle="tooltip" title="Press Here" data-placement="right" data-delay="500"/>
<!-- This will not show and work like a tool tip when you hover over it until you wire it up in a javascript file -->
```

```javascript
// Wire up the tooltip to show on the contactForm and the input control specified
$("#contactForm intput[type=submit]").tooltip({
    Placement:"left" //over rides the data-placement attribute if it exists
    delay:{ //more detail than offered with data-delay attribute
        show:500, //delay showing the tooltip for half a second
        hide:0 //hide the tooltip immediately
    }
});
```
## Alerts

```html
<div class="alert alert-warning collapse" id="sentAlert">
    <a href="#" data-dismiss="alert" class="close">&times;</a>
    <p>This doesn't work; it's not real</p>
</div>
```

```javascript
var $sentAlert = $("#sentAlert");

$sentDialog.on("hidden.bs.modal", function (){
    $sentAlert.show();
});

$sentAlert.on("close.bs.alert", function(){
    $sentAlert.hide();
    return false; //prevent the alert from closing and being removed from the DOM
});
```