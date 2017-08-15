//asynchronous: more than one at a time
// queue: full of events
//http request
// stack

// listen for the click event
document.addEventListener('click', clickHandler);

// long running function
function waitThreeSeconds() {
    var ms = 3000 + new Date().getTime();
    console.log(new Date());
    console.log(new Date().getTime());
    console.log(ms);
    while (new Date() < ms){}
    console.log('finished function');
}

function clickHandler() {
    console.log('click event!');
}




waitThreeSeconds();
console.log('finished execution');
