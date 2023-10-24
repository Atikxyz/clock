  var hours = document.querySelector("#hours");
  var minutes = document.querySelector("#minutes");
  var seconds = document.querySelector("#seconds");



setInterval(function () {
var date = new Date();

  var h = date.getHours();
  var m = date.getMinutes();
  var s = date.getSeconds();

  hours.innerHTML = h;
  minutes.innerHTML = m;
  seconds.innerHTML = s;
  
},1000)