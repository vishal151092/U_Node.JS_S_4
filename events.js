const EventEmitter = require('events');

class AppEmitter extends EventEmitter{};

const myEmitter = new AppEmitter();


/** Thre can be multiple listeners to same event */

// myEmitter.on('test1', (data)=>{
//     console.log("data emitted successfully");
//     console.log(data);
// });

/** This is "on" function example */
let seats=10;
myEmitter.on('test1', (data)=>{
    console.log(--seats);

    if(seats ==0){
        myEmitter.off('test1',)
    }
});


const callbackFunct = (data)=>{

    console.log("Second Listener");
}


/** This is "on" function example where callback function is outside defined, which is better way */
// myEmitter.on('test1',callbackFunct);

// myEmitter.on('test2', (data)=>{
//     console.log("data emitted successfully");
//     console.log(data);
// });




myEmitter.emit('test1', {name: 'Vishal Singh'});

 myEmitter.emit('test1', {name: 'Vishal Singh'});

 
/** This is "off" function which will stop specific eventHandler.
  Make sure function is passed as reference*/

 //myEmitter.off('test1', callbackFunct);


//  myEmitter.emit('test1');
  myEmitter.emit('test1', {name: 'Vishal Singh'});
// myEmitter.emit('test2', {name: 'User X'});

/** listenerCount returns count of total listeners on given event */
// console.log(myEmitter.listenerCount('test1'));

/** rawListeners Returns a copy of the array of listeners  */
// console.log(myEmitter.rawListeners('test1'))