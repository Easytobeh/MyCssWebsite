document.getElementById("dropdownIcon").addEventListener("click", function(){

  var x = document.getElementById("dropdownClick");
  if (x.clasName === "topnav")
    x.clasName += " responsive";
  else
    x.clasName = "topnav";
});
