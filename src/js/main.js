'use strict';

function clock() {
    var d = new Date();
    var hours = d.getHours();
    var minutes = d.getMinutes();
    var seconds = d.getSeconds();

    
    if (hours <= 9) hours = "0" + hours;
    if (minutes <= 9) minutes = "0" + minutes;
    if (seconds <= 9) seconds = "0" + seconds;
    
    const time =  + hours + ":" + minutes + ":" + seconds;

    if (document.layers) {
     document.layers.doc_time.document.write(time);
     document.layers.doc_time.document.close();
    }
    else document.getElementById("doc_time").innerHTML = time;
     setTimeout("clock()", 1000);
    }
    clock();