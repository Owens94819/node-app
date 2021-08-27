"use strict"
var src = 'http://localhost:1234/api?url=';
var src = 'http://nimo2000.herokuapp.com/api?url=';
var d = function (url) {
    
       
        var xhttp = new XMLHttpRequest();
    var obj = {
        onloadstart: null,
        onloadend: null,
        response: null,
        XMLHttpRequest: xhttp
    }

    xhttp.onloadstart = obj.onloadstart;
    xhttp.onloadend = obj.onloadend;
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

//console.log(Xfetch('/style/style.css'));
console.log(Xfetch('https://google.com'));
//d('http://localhost:1234/api?url=http://localhost:8080/1234/htdocs/1234/1234/editor%20hight/')