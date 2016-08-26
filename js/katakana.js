$(document).ready(function() {
  
  var newKana = function() {
    var kana = ["ア", "イ", "ウ", "エ", "オ", "カ", "キ", "ク", "ケ", "コ", "サ",
    "シ", "ス", "セ", "ソ", "タ", "チ", "ツ", "テ", "ト", "ナ", "ニ", "ヌ", "ネ",
    "ノ", "ハ", "ヒ", "フ", "ヘ", "ホ", "マ", "ミ", "ム", "メ", "モ", "ヤ", "ユ",
    "ヨ", "ラ", "リ", "ル", "レ", "ロ", "ワ", "ヲ", "ン"];
    var num = Math.floor(Math.random() * 46);
    $(".kanabox").append(kana[num]);
    kanaNum = num;
    return num;
  };

  var correct = function () {
    numCorrect++;
    numTotal++;
    $("#statsCorrect").text(numCorrect);
    $("#statsTotal").text(numTotal);
    $("#results").text("correct");
    $("#inputBox").val("");
    $(".kanabox").empty();
    kanaNum = newKana();
  };

  var kanaNum = newKana(), numCorrect = 0, numWrong = 0, numTotal = 0;

  $('#inputBox').keyup("keypress", function(e) {
    if (e.keyCode == 13) {
      var userInput = $('#inputBox').val();
      if (userInput === "a" && kanaNum === 0) {
        correct();
      } else if (userInput === "i" && kanaNum === 1) {
        correct();
      } else if (userInput === "u" && kanaNum === 2) {
        correct();
      } else if (userInput === "e" && kanaNum === 3) {
        correct();
      } else if (userInput === "o" && kanaNum === 4) {
        correct();
      } else if (userInput === "ka" && kanaNum === 5) {
        correct();
      } else if (userInput === "ki" && kanaNum === 6) {
        correct();
      } else if (userInput === "ku" && kanaNum === 7) {
        correct();
      } else if (userInput === "ke" && kanaNum === 8) {
        correct();
      } else if (userInput === "ko" && kanaNum === 9) {
        correct();
      } else if (userInput === "sa" && kanaNum === 10) {
        correct();
      } else if (userInput === "shi" && kanaNum === 11) {
        correct();
      } else if (userInput === "su" && kanaNum === 12) {
        correct();
      } else if (userInput === "se" && kanaNum === 13) {
        correct();
      } else if (userInput === "so" && kanaNum === 14) {
        correct();
      } else if (userInput === "ta" && kanaNum === 15) {
        correct();
      } else if (userInput === "chi" && kanaNum === 16) {
        correct();
      } else if (userInput === "tsu" && kanaNum === 17) {
        correct();
      } else if (userInput === "te" && kanaNum === 18) {
        correct();
      } else if (userInput === "to" && kanaNum === 19) {
        correct();
      } else if (userInput === "na" && kanaNum === 20) {
        correct();
      } else if (userInput === "ni" && kanaNum === 21) {
        correct();
      } else if (userInput === "nu" && kanaNum === 22) {
        correct();
      } else if (userInput === "ne" && kanaNum === 23) {
        correct();
      } else if (userInput === "no" && kanaNum === 24) {
        correct();
      } else if (userInput === "ha" && kanaNum === 25) {
        correct();
      } else if (userInput === "hi" && kanaNum === 26) {
        correct();
      } else if (userInput === "fu" && kanaNum === 27) {
        correct();
      } else if (userInput === "he" && kanaNum === 28) {
        correct();
      } else if (userInput === "ho" && kanaNum === 29) {
        correct();
      } else if (userInput === "ma" && kanaNum === 30) {
        correct();
      } else if (userInput === "mi" && kanaNum === 31) {
        correct();
      } else if (userInput === "mu" && kanaNum === 32) {
        correct();
      } else if (userInput === "me" && kanaNum === 33) {
        correct();
      } else if (userInput === "mo" && kanaNum === 34) {
        correct();
      } else if (userInput === "ya" && kanaNum === 35) {
        correct();
      } else if (userInput === "yu" && kanaNum === 36) {
        correct();
      } else if (userInput === "yo" && kanaNum === 37) {
        correct();
      } else if (userInput === "ra" && kanaNum === 38) {
        correct();
      } else if (userInput === "ri" && kanaNum === 39) {
        correct();
      } else if (userInput === "ru" && kanaNum === 40) {
        correct();
      } else if (userInput === "re" && kanaNum === 41) {
        correct();
      } else if (userInput === "ro" && kanaNum === 42) {
        correct();
      } else if (userInput === "wa" && kanaNum === 43) {
        correct();
      } else if (userInput === "wo" && kanaNum === 44) {
        correct();
      } else if (userInput === "n" && kanaNum === 45) {
        correct();
      } else {
        numWrong++;
        numTotal++;
        $("#statsWrong").text(numWrong);
        $("#statsTotal").text(numTotal);
        $("#results").text("wrong");
        $("#inputBox").val("");
      }
    }
  });
});
