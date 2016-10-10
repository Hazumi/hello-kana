$(document).ready(function() {

  var kana = ["あ", "い", "う", "え", "お"];
  var hiraganaK = ["か", "き", "く", "け", "こ"];
  var hiraganaS = ["さ", "し", "す", "せ", "そ"];
  var hiraganaT = ["た", "ち", "つ", "て", "と"];
  var hiraganaN = ["な", "に", "ぬ", "ね", "の"];
  var hiraganaH = ["は", "ひ", "ふ", "へ", "ほ"];
  var hiraganaM = ["ま", "み", "む", "め", "も"];
  var hiraganaY = ["や", "ゆ", "よ"];
  var hiraganaR = ["ら", "り", "る", "れ", "ろ"];
  var hiraganaWN = ["わ", "を", "ん"];

  var kanaNum = 0;
  var kanaLast;

  var kanaPoints = 0;
  var numCorrect = 0;
  var numIncorrect = 0;
  var numTotal = 0;

  var $displayBox = $('#display-box');
  var $statsKanaPoints = $('#statsKanaPoints');
  var $statsCorrect = $('#statsCorrect');
  var $statsIncorrect = $('#statsIncorrect');
  var $statsTotal = $("#statsTotal");
  var $results = $("#results");
  var $inputBox = $("#input-box");

  var $hiraganaK = $('#hiragana-k');
  var $hiraganaS = $('#hiragana-s');
  var $hiraganaT = $('#hiragana-t');
  var $hiraganaN = $('#hiragana-n');
  var $hiraganaH = $('#hiragana-h');
  var $hiraganaM = $('#hiragana-m');
  var $hiraganaY = $('#hiragana-y');
  var $hiraganaR = $('#hiragana-r');
  var $hiraganaWN = $('#hiragana-wn');

  var unlocked = 0;

  function genNum() {
    kanaNum = Math.floor(Math.random() * kana.length);
  }

  function checkUnlocks() {
    if (kanaPoints >= 5) {
      $hiraganaK.removeClass('disabled');
    } else {
      $hiraganaK.addClass('disabled');
    }
    if (kanaPoints >= 10) {
      $hiraganaS.removeClass('disabled');
    } else {
      $hiraganaS.addClass('disabled');
    }
    if (kanaPoints >= 15) {
      $hiraganaT.removeClass('disabled');
    } else {
      $hiraganaT.addClass('disabled');
    }
    if (kanaPoints >= 20) {
      $hiraganaN.removeClass('disabled');
    } else {
      $hiraganaN.addClass('disabled');
    }
    if (kanaPoints >= 25) {
      $hiraganaH.removeClass('disabled');
    } else {
      $hiraganaH.addClass('disabled');
    }
    if (kanaPoints >= 30) {
      $hiraganaM.removeClass('disabled');
    } else {
      $hiraganaM.addClass('disabled');
    }
    if (kanaPoints >= 35) {
      $hiraganaY.removeClass('disabled');
    } else {
      $hiraganaY.addClass('disabled');
    }
    if (kanaPoints >= 40) {
      $hiraganaR.removeClass('disabled');
    } else {
      $hiraganaR.addClass('disabled');
    }
    if (kanaPoints >= 45) {
      $hiraganaWN.removeClass('disabled');
    } else {
      $hiraganaWN.addClass('disabled');
    }
  }

  // new kana/game loop?
  function newKana() {
    while (kanaLast == kanaNum) {
      genNum();
    }
    kanaLast = kanaNum;
    $displayBox.text(kana[kanaNum]);
    checkUnlocks();
  };

  newKana(kana);

  // unlock buttons
  $hiraganaK.on('click', function() {
    if (kanaPoints >= 5 && !$hiraganaK.hasClass('disabled')) {
      kana = kana.concat(hiraganaK);
      newKana(kana);
      unlocked = 1;
      $hiraganaS.removeClass('hidden')
      $(this).fadeOut(300, function() {
        $(this).remove();
      });
    }
  });

  $hiraganaS.on('click', function() {
    if (kanaPoints >= 10 && unlocked == 1 && !$hiraganaS.hasClass('disabled')) {
      kana = kana.concat(hiraganaS);
      newKana(kana);
      unlocked = 2;
      $hiraganaT.removeClass('hidden')
      $(this).fadeOut(300, function() {
        $(this).remove();
      });
    }
  });

  $hiraganaT.on('click', function() {
    if (kanaPoints >= 15 && unlocked == 2 && !$hiraganaT.hasClass('disabled')) {
      kana = kana.concat(hiraganaT);
      newKana(kana);
      unlocked = 3;
      $hiraganaN.removeClass('hidden')
      $(this).fadeOut(300, function() {
        $(this).remove();
      });
    }
  });

  $hiraganaN.on('click', function() {
    if (kanaPoints >= 20 && unlocked == 3 && !$hiraganaN.hasClass('disabled')) {
      kana = kana.concat(hiraganaN);
      newKana(kana);
      unlocked = 4;
      $hiraganaH.removeClass('hidden')
      $(this).fadeOut(300, function() {
        $(this).remove();
      });
    }
  });

  $hiraganaH.on('click', function() {
    if (kanaPoints >= 8 && unlocked == 4 && !$hiraganaN.hasClass('disabled')) {
      kana = kana.concat(hiraganaH);
      newKana(kana);
      unlocked = 5;
      $hiraganaM.removeClass('hidden')
      $(this).fadeOut(300, function() {
        $(this).remove();
      });
    }
  });

  $hiraganaM.on('click', function() {
    if (kanaPoints >= 8 && unlocked == 5 && !$hiraganaN.hasClass('disabled')) {
      kana = kana.concat(hiraganaM);
      newKana(kana);
      unlocked = 6;
      $hiraganaY.removeClass('hidden')
      $(this).fadeOut(300, function() {
        $(this).remove();
      });
    }
  });

  $hiraganaY.on('click', function() {
    if (kanaPoints >= 8 && unlocked == 6 && !$hiraganaN.hasClass('disabled')) {
      kana = kana.concat(hiraganaY);
      newKana(kana);
      unlocked = 7;
      $hiraganaR.removeClass('hidden')
      $(this).fadeOut(300, function() {
        $(this).remove();
      });
    }
  });

  $hiraganaR.on('click', function() {
    if (kanaPoints >= 8 && unlocked == 7 && !$hiraganaN.hasClass('disabled')) {
      kana = kana.concat(hiraganaR);
      newKana(kana);
      unlocked = 8;
      $hiraganaWN.removeClass('hidden')
      $(this).fadeOut(300, function() {
        $(this).remove();
      });
    }
  });

  $hiraganaWN.on('click', function() {
    if (kanaPoints >= 8 && unlocked == 8 && !$hiraganaN.hasClass('disabled')) {
      kana = kana.concat(hiraganaWN);
      newKana(kana);
      unlocked = 9;
      $(this).fadeOut(300, function() {
        $(this).remove();
      });
    }
  });

  function correct() {
    kanaPoints++;
    numCorrect++;
    numTotal++;
    $statsKanaPoints.text(kanaPoints);
    $statsCorrect.text(numCorrect);
    $statsTotal.text(numTotal);
    $results.text("Correct");
    $inputBox.val("");
    newKana();
  };

  $inputBox.keyup("keypress", function(e) {
    if (e.keyCode == 13) {
      var userInput = $inputBox.val().toLowerCase();
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
        if (kanaPoints > 0) kanaPoints--;
        numIncorrect++;
        numTotal++;
        $statsKanaPoints.text(kanaPoints);
        $statsIncorrect.text(numIncorrect);
        $statsTotal.text(numTotal);
        $results.html(kana[kanaNum] + "<br>Incorrect, you entered '" + userInput + "'.");
        $inputBox.val("");
        newKana();
      }
    }
  });

});
