$(document).ready(function() {

  (function() {
    var $userInputBox = $('#user-input-box');
    var $currentKanaDisplay = $('#current-kana-display');
    var $lvl = $('#lvl');
    var $xp = $('#xp');
    var $xpToLvl = $('#xp-to-level');
    var $kp = $('#kp');
    var $correct = $('#correct');
    var $incorrect = $('#incorrect');
    var $total = $('#total');
    var $result = $('#result');
    var $result2 = $('#result2');
    var $progressBox = $('#progress-box');
    var $alice = $('#alice');

    var currentKana, lastKana, lastKanaNum, kanaChar, randNum, userInput, emotion = false;

    var hiraganaList = [
        {
          kana: "あ",
          romaji: "a",
          correct: 0,
          incorrect: 0
        },
        {
          kana: "い",
          romaji: "i",
          correct: 0,
          incorrect: 0
        },
        {
          kana: "う",
          romaji: "u",
          correct: 0,
          incorrect: 0
        },
        {
          kana: "え",
          romaji: "e",
          correct: 0,
          incorrect: 0
        },
        {
          kana: "お",
          romaji: "o",
          correct: 0,
          incorrect: 0
        },
        {
          kana: "か",
          romaji: "ka",
          correct: 0,
          incorrect: 0
        },
        {
          kana: "き",
          romaji: "ki",
          correct: 0,
          incorrect: 0
        },
        {
          kana: "く",
          romaji: "ku",
          correct: 0,
          incorrect: 0
        },
        {
          kana: "け",
          romaji: "ke",
          correct: 0,
          incorrect: 0
        },
        {
          kana: "こ",
          romaji: "ko",
          correct: 0,
          incorrect: 0
        },
        {
          kana: "さ",
          romaji: "sa",
          correct: 0,
          incorrect: 0
        },
        {
          kana: "し",
          romaji: "shi",
          correct: 0,
          incorrect: 0
        },
        {
          kana: "す",
          romaji: "su",
          correct: 0,
          incorrect: 0
        },
        {
          kana: "せ",
          romaji: "se",
          correct: 0,
          incorrect: 0
        },
        {
          kana: "そ",
          romaji: "so",
          correct: 0,
          incorrect: 0
        },
        {
          kana: "た",
          romaji: "ta",
          correct: 0,
          incorrect: 0
        },
        {
          kana: "ち",
          romaji: "chi",
          correct: 0,
          incorrect: 0
        },
        {
          kana: "つ",
          romaji: "tsu",
          correct: 0,
          incorrect: 0
        },
        {
          kana: "て",
          romaji: "te",
          correct: 0,
          incorrect: 0
        },
        {
          kana: "と",
          romaji: "to",
          correct: 0,
          incorrect: 0
        },
        {
          kana: "な",
          romaji: "na",
          correct: 0,
          incorrect: 0
        },
        {
          kana: "に",
          romaji: "ni",
          correct: 0,
          incorrect: 0
        },
        {
          kana: "ぬ",
          romaji: "nu",
          correct: 0,
          incorrect: 0
        },
        {
          kana: "ね",
          romaji: "ne",
          correct: 0,
          incorrect: 0
        },
        {
          kana: "の",
          romaji: "no",
          correct: 0,
          incorrect: 0
        },
        {
          kana: "は",
          romaji: "ha",
          correct: 0,
          incorrect: 0
        },
        {
          kana: "ひ",
          romaji: "hi",
          correct: 0,
          incorrect: 0
        },
        {
          kana: "ふ",
          romaji: "fu",
          correct: 0,
          incorrect: 0
        },
        {
          kana: "へ",
          romaji: "he",
          correct: 0,
          incorrect: 0
        },
        {
          kana: "ほ",
          romaji: "ho",
          correct: 0,
          incorrect: 0
        },
        {
          kana: "ま",
          romaji: "ma",
          correct: 0,
          incorrect: 0
        },
        {
          kana: "み",
          romaji: "mi",
          correct: 0,
          incorrect: 0
        },
        {
          kana: "む",
          romaji: "mu",
          correct: 0,
          incorrect: 0
        },
        {
          kana: "め",
          romaji: "me",
          correct: 0,
          incorrect: 0
        },
        {
          kana: "も",
          romaji: "mo",
          correct: 0,
          incorrect: 0
        },
        {
          kana: "や",
          romaji: "ya",
          correct: 0,
          incorrect: 0
        },
        {
          kana: "ゆ",
          romaji: "yu",
          correct: 0,
          incorrect: 0
        },
        {
          kana: "よ",
          romaji: "yo",
          correct: 0,
          incorrect: 0
        },
        {
          kana: "ら",
          romaji: "ra",
          correct: 0,
          incorrect: 0
        },
        {
          kana: "り",
          romaji: "ri",
          correct: 0,
          incorrect: 0
        },
        {
          kana: "る",
          romaji: "ru",
          correct: 0,
          incorrect: 0
        },
        {
          kana: "れ",
          romaji: "re",
          correct: 0,
          incorrect: 0
        },
        {
          kana: "ろ",
          romaji: "ro",
          correct: 0,
          incorrect: 0
        },
        {
          kana: "わ",
          romaji: "wa",
          correct: 0,
          incorrect: 0
        },
        {
          kana: "を",
          romaji: "wo",
          correct: 0,
          incorrect: 0
        },
        {
          kana: "ん",
          romaji: "n",
          correct: 0,
          incorrect: 0
        }
      ];

    var user = {
      lvl: 1,
      xp: 0,
      xpToLvl: 15,
      xpBase: 15,
      exponent: 1.1,
      kp: 50,
      kana: 5,
      correct: 0,
      incorrect: 0,
      total: 0
    }

    newKana();
    aliceBlink();

    function numGen() {
      return Math.floor(Math.random() * user.kana);
    }

    function newKana() {
      while(lastKanaNum == randNum) {
        randNum = numGen();
      }
      kanaChar = hiraganaList[randNum].kana;
      $currentKanaDisplay.text(kanaChar);
      lastKana = kanaChar;
      lastKanaNum = randNum;
    }

    function aliceBlink() {
      setInterval(function() {
        if(!emotion) {
          $alice.attr('src', 'img/alice/blink.png');
          setTimeout(function() {
            $alice.attr('src', 'img/alice/normal.png');
          }, 200);
        }
      }, 5000);
    }
    function setSmile() {
      emotion = true;
      $alice.attr('src', 'img/alice/happy.png');
      setTimeout(function() {
        $alice.attr('src', 'img/alice/normal.png');
        emotion = false;
      }, 4000);
    }
    function setWorried() {
      emotion = true;
      $alice.attr('src', 'img/alice/worried.png');
      setTimeout(function() {
        $alice.attr('src', 'img/alice/normal.png');
        emotion = false;
      }, 2500);
    }

    // //uncomment to view lvl curve
    // for(var i = 1; i < 20; i++) {
    //   console.log(Math.floor(user.xpBase * (i ** user.exponent)));
    // }


    var click = new Howl({
      src: ['snd/click.wav']
    });

    var success = new Howl({
      src: ['snd/success.wav']
    });

    var error = new Howl({
      src: ['snd/error.wav']
    });

    function checkLevelUp() {
      if(user.xp >= user.xpToLvl) {
        success.play();
        user.xp = user.xp % user.xpToLvl;
        user.lvl++;
        user.xpToLvl = Math.floor(user.xpBase * (user.lvl ** user.exponent));
        $lvl.text(user.lvl);
        $lvl.addClass('highlighted');
        setTimeout(function() {
          $lvl.removeClass('highlighted');
        }, 2000);
        $xp.text(user.xp);
        $xpToLvl.text(user.xpToLvl);
      }
    }

    function correct() {
      click.play();
      user.correct++;
      user.kp++;
      user.xp++;
      $correct.text(user.correct);
      $kp.text(user.kp);
      $xp.text(user.xp);
      $result.css('color', 'green');
      $result.text('Correct!');
      if($result2.text() !== undefined) {
        $result2.text('');
      }
      checkLevelUp();
    }

    function incorrect() {
      error.play();
      user.incorrect++;
      if(user.kp > 0) {
        user.kp--;
      }
      setWorried();
      $incorrect.text(user.incorrect);
      $kp.text(user.kp);
      $result.css('color', 'red');
      $result.text('Incorrect!');
      $result2.text('The last kana was ' + lastKana + ", you entered " + userInput + ".");
    }

    var ka = $('#ka');
    var sa = $('#sa');
    var ta = $('#ta');
    var na = $('#na');
    var ha = $('#ha');
    var ma = $('#ma');
    var ya = $('#ya');
    var ra = $('#ra');
    var wa = $('#wa');
    var btnArr = [];

    btnArr.push(ka, sa, ta, na, ha, ma, ya, ra, wa);
    var kanaUnlock = 0;

    unlockButton.call(ka, 5, 50);
    unlockButton.call(sa, 5, 50);
    unlockButton.call(ta, 5, 50);
    unlockButton.call(na, 5, 75);
    unlockButton.call(ha, 5, 75);
    unlockButton.call(ma, 5, 75);
    unlockButton.call(ya, 3, 100);
    unlockButton.call(ra, 5, 100);
    unlockButton.call(wa, 3, 100);

    function unlockButton(numKanaAdded, kpCost) {
      $(this).on('click', function() {
        if(user.kp >= kpCost) {
          user.kp -= kpCost;
          $kp.text(user.kp);
          user.kana += numKanaAdded;
          if(btnArr[kanaUnlock + 1] !== undefined) {
            btnArr[kanaUnlock + 1].removeClass('d-none');
            btnArr[kanaUnlock + 1].addClass('animated zoomIn');
          }
          kanaUnlock++;
          $(this).remove();
        }
      });
    }

    function checkKana() {
      userInput = $userInputBox.val().toLowerCase();
      userInput === hiraganaList[randNum].romaji ? correct() : incorrect();
      $userInputBox.val('');
      user.total++;
      $total.text(user.total);
      newKana();
    }

    $userInputBox.on('keyup', function() {
      var len = $userInputBox.val().length;
      if(len === 1 && (randNum <= 4 || randNum === 45)) {
        checkKana();
      } else if (len === 2 &&
        randNum !== 11 &&
        randNum !== 16 &&
        randNum !== 17) {
        checkKana();
      } else if (len === 3) {
        checkKana();
      }
    });

  })();
});
