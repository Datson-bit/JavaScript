
var cities =["New York", "Berlin", "Lagos","London"];
var html="";
for (var i = 0; i < cities.length; i++) {
    html += "<p>"+ cities[i] +"</p>";
}
document.getElementById("demo1").innerHTML=html;