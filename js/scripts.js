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
  var input = word.toUpperCase().split("");  //splits word into array
  for(var i=0; i<input.length; i++){  //loops over word to find matching scores in scores object and adds to total score
    var number = scores[input[i]];
    totalScore +=number;
  };
  return totalScore;
};

$(document).ready(function(){
  var finalPoints=0;
  $("form#wordform").submit(function(event){
    var inputWord=$("input#word").val();
    var result=scrabbleScore(inputWord);
    var not_number= isNaN(result);
    $("#top").addClass("top_container_form");
    if(result ===0){
      alert("please enter a word");
      result=0
    }
    else if(not_number){
      alert("please do not use special characters");
      result=0
    }
    else{
      $("#words_table").append("<tr class='lead'><td>"+inputWord+"</td><td>"+result+"</td></tr>");
      finalPoints+=result;
      $("span").text(finalPoints);
      $("#total_display").fadeIn("slow");
      $("h3").fadeIn("slow");
      $("#submitted_words_background").fadeIn('slow');
    };
    $("input#word").val("");
    event.preventDefault();
  });
});
