var scrabbleScore = function(word){
  var scores = {
    A:1, E:1, I:1, O:1, U:1, L:1, N:1, R:1, S:1, T:1,
    D:2, G:2,
    B:3, C:3, M:3, P:3,
    F:4, H:4, V:4, W:4, Y:4,
    K:5,
    J:8, X:8,
    Q:10, Z:10}
  var totalScore = 0;
  var input = word.toUpperCase().split("");
  for(var i=0; i<input.length; i++){
    var number = scores[input[i]];
    totalScore +=number;
  };
  return totalScore;
};

$(document).ready(function(){
  var finalResult=0;
  $("form#wordform:first").submit(function(event){
      var result=scrabbleScore($("input#word").val());
      finalResult+=result;
      $("#background").fadeIn('slow');
      $("#wordslist").append("<li>"+$("input#word").val()+"</li>")
      $("#pointslist").append("<li>"+result+"</li>")
      $("span").text(finalResult);
      $("h3").fadeIn("slow")
      $("#wordfrom").empty(); 

    event.preventDefault();

  });
});
