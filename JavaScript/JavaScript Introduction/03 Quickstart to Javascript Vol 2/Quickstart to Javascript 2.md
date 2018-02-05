# Quickstart to Javascript 2
## Switch Statements

```Javascript
switch(n){
    case example1:
    //do something;
    break;
    case example2:
    //do something;
    break;
    case example3:
    //do something;
    break;
    default:
    //do something;
    break;
}
```
### Example
```Javascript
var sign = prompt("What is your astrological sign?").toLowerCase();

switch(sign){
    case "Taurus":
      alert("Confuscious say: he who eat is not hungry");
      break;
    case "Virgo":
      alert("Your emotions will help you feel things today");
      break;
    .
    .
    .
    default:
      alert("You must be soulless");
      break;
}
```

## For Loops
```Javascript
//print number 1 - 10 to the console
for(i = 0; i < 11;  i++){
    console.log(i);
}
```