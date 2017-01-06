var searchKey = "017149004764189221444:_3kraw1vh5q";
var apiKey = "AIzaSyAz7QmmWw4ECBLs4TCo7YXWdUVw3bRrme0";

document.forms[0].addEventListener("submit", function(e) {
    e.preventDefault();
    search.setAttribute("data-queryParameterName", query.value);
    console.log(query.value);

    var xhr = new XMLHttpRequest();
    // xhr.open("GET", "https://www.googleapis.com/customsearch/v1?key=" + apiKey + "&amp;cx=" + searchKey + "&amp;q=" + query.value + "&amp;callback=hndlr", true);
    // xhr.open("GET", "https://www.googleapis.com/customsearch/v1?key=AIzaSyAz7QmmWw4ECBLs4TCo7YXWdUVw3bRrme0&amp;cx=017149004764189221444:_3kraw1vh5q&amp;q=Мушля", true);
    xhr.open("GET", "https://www.googleapis.com/customsearch/v1?key=AIzaSyAz7QmmWw4ECBLs4TCo7YXWdUVw3bRrme0&amp;cx=017149004764189221444:_3kraw1vh5q&amp;q=Мушля&amp;callback=hndlr", true);
    // xhr.onreadystatechange = function() {
    //     console.log(xhr.responseText);
    //     for (var i = 0; i < response.items.length; i++) {
    //         var item = response.items[i];
    //         // in production code, item.htmlTitle should have the HTML entities escaped.
    //         document.getElementById("content").innerHTML += "<br>" + item.htmlTitle;
    //     }
    // }
    xhr.send(null);
});

  function hndlr(response) {
      console.log(response);
      for (var i = 0; i < response.items.length; i++) {
        var item = response.items[i];
        // in production code, item.htmlTitle should have the HTML entities escaped.
        document.getElementById("content").innerHTML += "<br>" + item.htmlTitle;
      }
  }
