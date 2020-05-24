
(function (window) {

var byeSpeaker = {};
var speakWord = "Good Bye";

byespeaker.speak = function(name) {
  console.log(speakWord + " " + name);
}
window.byespeaker = byespeaker;

})(window);