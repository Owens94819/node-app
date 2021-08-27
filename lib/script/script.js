"use strict"
var src = 'http://localhost:1234/api?url=';
var src = 'http://nimo2000.herokuapp.com/api?url=';
var exe = function (f) {
     return function() {
         (f||new Function)(this);
     }
}
var d = function (url) {
    
       
        var xhttp = new XMLHttpRequest();
    var obj = {
        onloadstart: null,
        onprogress: null,
        onloadend: null,
        response: null,
        XMLHttpRequest: xhttp
    }

    xhttp.onloadstart = function () {
        (obj.onloadstart || new Function)()
    };

    xhttp.onprogress = function () {
        (obj.onprogress||new Function)()
    }; 
    
    xhttp.onloadend = function () {
        (obj.onloadend||new Function)()
    };

        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                obj.response = this.response
            }
        }
            ;
        xhttp.open("GET", url, true);
        try {
            xhttp.send();
        } catch (e) {
            if (e) {

                // erro here
                var prm = new Promise(function (r) {
                    r(null)
                }
                )
            }
        }
return obj;
}



window.Xfetch = function (url){
       url = d(src + url)
return url;
}

var v = Xfetch('https://google.com');
console.log(v);
v.onloadend = function() {
    document.bodt.innerHTML = v.response;
}
//console.log(Xfetch('/style/style.css'));
//d('http://localhost:1234/api?url=http://localhost:8080/1234/htdocs/1234/1234/editor%20hight/')