$(document).ready(function() {
  var num = prompt("pick a number to ping-pong up to!");

  for (var i = 1; i <= num; i += 1) {
    var mult = 0;
    if (i % 3 === 0) {
      mult += 1;
    };

    if (i % 5 === 0) {
      mult += 2;
    };

    if (mult === 3) {
      $("ul#user").append("<li>ping-pong</li>");
    } else if(mult === 1) {
      $("ul#user").append("<li>ping</li>");
    } else if(mult === 2) {
      $("ul#user").append("<li>ping</li>");
    } else {
      $("ul#user").append("<li>" + i + "</li>");
    };

    if(i === num-1) {
      $("ul#user").after("<h2>Austin Kincaid, (360) 910-7205</h2>");
    };
  };
});
