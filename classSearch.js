var a = document.querySelectorAll("td");
var b = [] , j = 0 ,c = [];
var p =/(04014)+.*(14)+/;
for (var i = 0; i < a.length; i++) {
  var t = p.test(a[i].innerHTML);

  if (t) {
    b[j] = a[i].parentNode;
    j++;
  }
}
for (var i = 0; i < b.length; i++) {
	c[i] = b[i].innerHTML.match(/[^(\<\/?td\>)(&nbsp)[a-z]/g);
	console.log(c[i].join(""));
}




