$(document).ready(function(){
  $("#mysubmit").click(function() {
    var otonkone = "eka oton muuttuja";
    var kayttaja=$('#myusername').val();
    var salasani=$('#mypassword').val();
      alert("Tunnus = "+    kayttaja+"                  Salasana = "+ salasani)
  });
});
