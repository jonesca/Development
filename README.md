# ASP.NET

- Ctrl-K Ctrl-D this key combination in Visual Studio will do some formatting for you

<b><i><u>Strongly Typed</u></i></b> means the type of object is known and available.  For example a string is strongly typed when you declare it like so:

```javascript
string someString = "abc";
```

For e.g you cannot Multiply or Divide two different types i.e String vs Integer

```javascript
var answer = 1 * "1"; // you cannot do this
```

You have to explicity cast it, this is known as strongly typed

```html
<img src="images/CJones_Avatar.png" width=100>
```

## PS Ripper

1. Create folder
2. git clone http://github.com/hmqcnoesy/psripper
3. Open PSRipper.sln in Visual Studio
4. Build the solution
  a. Must have Fiddler installed
  b. Must have the Plural Sight Offline player installed
  c. Download The course you want in offline Plural Sight player
  d. Install Handbrake
5. Open Fiddler
6. Open the Offline Player
7. Download the course in the Offline Player
8. Select the PS Ripper tab
9. Click Reload
10. Select the course you want
11. Choose your location and click Save
12. Open the location
13. Run the PowerShell script to convert to MP4
14. Delete WMV files
