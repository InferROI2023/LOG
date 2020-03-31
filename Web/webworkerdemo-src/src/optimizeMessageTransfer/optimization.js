
function messageHandler(e){
    var myDate = new Date();

    var mytime= myDate.getTime();      //获取当前时间

    postMessage({
        "type":e.data.type,
        "mytime":mytime
    });

}

addEventListener("message",messageHandler,true);