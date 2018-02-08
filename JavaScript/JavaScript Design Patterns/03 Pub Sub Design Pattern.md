# Pub/Sub Design Pattern

**To introduce Pub/Sub we need to:**

**Pub** = publish  
**Sub** = subsscription

- Create Pub/Sub design pattern

```javascript
define(function) () {
    var cache = {};

    return {
        pub: function (id) {
            var args = [].slice.call(arguments, 1);

            if (!cache[id]) {
                cache[id] = [];
            }

            for (var i = 0, il = cach[id].length; i < il; i++>) {
                cache[id][i].apply(null, args);
            }
        },

        sub: function (id, fn){
            if (!cache[id]) {
                cache[id] = [fn];
            } else {
                cache[id].push(fn);
            }
        }
    };
});
```

- Refactor each logical part out
- Identify overlapping functionality
- Use messages to connect the components