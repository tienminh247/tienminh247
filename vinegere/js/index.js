function ordA(a) {
  return a.charCodeAt(0) - 65;
}
 
function vigenere(text, key, decode) {
  var i = 0, b;
  key = key.toUpperCase().replace(/[^A-Z]/g, '');
  return text.toUpperCase().replace(/[^A-Z]/g, '').replace(/[A-Z]/g, function(a) {
    b = key[i++ % key.length];
    return String.fromCharCode(((ordA(a) + (decode ? 26 - ordA(b) : ordA(b))) % 26 + 65));
  });
}
 
// example
function Encode() {
  var plane_text, keyword, string, n;
  plane_text = document.getElementById("plane_text").value;
  keyword = document.getElementById("keyword").value;
  var enc = vigenere(plane_text,keyword);
  document.getElementById("result").disabled = false;
  document.getElementById("result").value = enc;
  string = document.getElementById("result").value;
  n = string.length;
  document.getElementById("length").innerHTML = n + " characters encode";
  
}
function Decrypt() {
  var keyword, plane_text, string, n;
  keyword = document.getElementById("keyword").value;
  plane_text = document.getElementById("plane_text").value;
  var enc = vigenere(plane_text,keyword);
  var dec = vigenere(enc,keyword,true);
  document.getElementById("plane_text").value = enc;
  document.getElementById("result").disabled = false;
  document.getElementById("result").value = dec;
  string = document.getElementById("result").value;
  n = string.length;
  document.getElementById("length").innerHTML = n + " characters decrypt";
}