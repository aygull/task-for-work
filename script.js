var startArray = ["Foo", "bar", "Bca", "art"];
var listing = document.getElementById('listing');

startArray.sort(function (a, b) {
    return a.toLowerCase().localeCompare(b.toLowerCase());
});

for (var i = 0; i < startArray.length; i++)
{
	listing.innerHTML += "<option>" + startArray[i] + "</option>\n";
}