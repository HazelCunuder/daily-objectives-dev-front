"use strict"

/*
Write a loop that makes seven calls to console.log to output the following triangle:

```js
#
##
###
####
#####
######
#######
```
*/

let triangle = "";

for(let i = 0; i < 7; i++) {
    triangle += "#";
    console.log(triangle);
}
