var a=1;
connect = function (e) {
    var port=e.port[0];
    port.onmessage=function () {
        port.postMessage(a++);
        console.log(a);
    }
}

