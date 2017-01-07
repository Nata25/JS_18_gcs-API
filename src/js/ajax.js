var searchKey = "017149004764189221444:_3kraw1vh5q",
    qstring = window.location.search,
    q;

document.forms[0].addEventListener("submit", function(e) {
    e.preventDefault();
    q = query.value;
    google.search.cse.element.getElement("results").execute(q);
});

window.__gcse = {
    parsetags: 'explicit',
    callback: myCallback
};

var gcse = document.createElement('script');
gcse.type = 'text/javascript';
gcse.async = true;
gcse.src = (document.location.protocol == 'https:' ? 'https:' : 'http:') + '//www.google.com/cse/cse.js?cx=' + searchKey;
var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(gcse, s);

function myCallback() {
    google.search.cse.element.render({
        div: "search",
        tag: "searchresults-only",
        gname: "results"
    });
    if (qstring.length > 0) {
        q = decodeURIComponent(qstring.substr(7));
        query.value = q;
        google.search.cse.element.getElement("results").execute(q);
    }
}
