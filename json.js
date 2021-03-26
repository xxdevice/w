var wepons = "";
$.getJSON("weapons.json" , function(data) {
  var
    len = data.length;
  wepons = data;
});