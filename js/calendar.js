function timer(a) {
  return {
    play: function (c) {
      var d = performance.now();
      c = c || a.to;
      requestAnimationFrame(function e(b) {
        b = (b - d) / a.duration;
        1 <= b && (b = 1);
        a.elem.style.transform = "rotate(" + (a.from + (c - a.from) * b | 0) % 360 + "deg)";
        1 > b && requestAnimationFrame(e)
      })
    }
  }
}
var div = document.querySelector('.roulette-animals'),
  but = document.querySelector('#go'),
  num = 0;
anim = timer({
  from: 0,
  to: 360 * 3 + 120,
  duration: 2 * 1000,
  elem: div,
  callback: function () {}
});

var input;
var dateEntered;

/* Присваивает значение календаря в dateEntered при выборе даты в <input type="date"> */
document.getElementById("Dateborn").addEventListener("change", function () {
  input = this.value;
  dateEntered = new Date(input);
});

/* Открывает popup-menu */
function openForm() {
  formWrap.classList.add('open');
}

but.addEventListener('mousedown', function () {

  var n;

  if (input != null) {
    if (input != '0001-01-01') {
      if (input > '1900-01-01') {
        if (((dateEntered.getMonth() == 5) && dateEntered.getUTCDate() >= 3) || ((dateEntered.getMonth() == 6) && dateEntered.getUTCDate() <= 4)) {
          n = 8;
          num = ['Росомаха', 'Лось', 'Выдра', 'Лисица', 'Белка', 'Куница', 'Медведь', 'Северный олень', 'Горностай'][n];
          anim.play(-360 * 3 + 45); //задать нужный угол поворота
          setTimeout(() => {
            const form = document.querySelector('#showErmine');
            const popup = document.querySelector('.popupErmine');
            form.classList.add('open');
            popup.classList.add('popup_openErmine');
          }, 3200) /* Последнее число setTimeout() - задержка перед появлением pop-up-menu*/
        }

        if (((dateEntered.getMonth() == 3) && dateEntered.getUTCDate() >= 28) || (dateEntered.getMonth() == 4) || ((dateEntered.getMonth() == 5) && dateEntered.getUTCDate() <= 2)) {
          n = 7;
          num = ['Росомаха', 'Лось', 'Выдра', 'Лисица', 'Белка', 'Куница', 'Медведь', 'Северный олень', 'Горностай'][n];
          anim.play(-360 * 3 + 15);
          setTimeout(() => {
            const form = document.querySelector('#showDeer');
            const popup = document.querySelector('.popupDeer');
            form.classList.add('open');
            popup.classList.add('popup_openDeer');
          }, 3200) /* Последнее число setTimeout() - задержка перед появлением pop-up-menu*/
        }

        if (((dateEntered.getMonth() == 2) && dateEntered.getUTCDate() >= 22) || ((dateEntered.getMonth() == 3) && dateEntered.getUTCDate() <= 27)) {
          n = 6;
          num = ['Росомаха', 'Лось', 'Выдра', 'Лисица', 'Белка', 'Куница', 'Медведь', 'Северный олень', 'Горностай'][n];
          anim.play(-360 * 3 - 15);
          setTimeout(() => {
            const form = document.querySelector('#showBear');
            const popup = document.querySelector('.popupBear');
            form.classList.add('open');
            popup.classList.add('popup_openBear');
          }, 3200) /* Последнее число setTimeout() - задержка перед появлением pop-up-menu*/
        }

        if (((dateEntered.getMonth() == 1) && dateEntered.getUTCDate() >= 22) || ((dateEntered.getMonth() == 2) && dateEntered.getUTCDate() <= 21)) {
          n = 5;
          num = ['Росомаха', 'Лось', 'Выдра', 'Лисица', 'Белка', 'Куница', 'Медведь', 'Северный олень', 'Горностай'][n];
          anim.play(-360 * 3 + n * 45 + 95);
          setTimeout(() => {
            const form = document.querySelector('#showMarten');
            const popup = document.querySelector('.popupMarten');
            form.classList.add('open');
            popup.classList.add('popup_openMarten');
          }, 3200) /* Последнее число setTimeout() - задержка перед появлением pop-up-menu*/
        }

        if (((dateEntered.getMonth() == 0) && dateEntered.getUTCDate() >= 25) || ((dateEntered.getMonth() == 1) && dateEntered.getUTCDate() <= 21)) {
          n = 4;
          num = ['Росомаха', 'Лось', 'Выдра', 'Лисица', 'Белка', 'Куница', 'Медведь', 'Северный олень', 'Горностай'][n];
          anim.play(-360 * 3 + n * 45 + 105);
          setTimeout(() => {
            const form = document.querySelector('#showSquirrel');
            const popup = document.querySelector('.popupSquirrel');
            form.classList.add('open');
            popup.classList.add('popup_openSquirrel');
          }, 3200) /* Последнее число setTimeout() - задержка перед появлением pop-up-menu*/
        }

        if (((dateEntered.getMonth() == 11) && dateEntered.getUTCDate() >= 20) || ((dateEntered.getMonth() == 0) && dateEntered.getUTCDate() <= 24)) {
          n = 3;
          num = ['Росомаха', 'Лось', 'Выдра', 'Лисица', 'Белка', 'Куница', 'Медведь', 'Северный олень', 'Горностай'][n];
          anim.play(-360 * 3 + n * 45 + 105);
          setTimeout(() => {
            const form = document.querySelector('#showFox');
            const popup = document.querySelector('.popupFox');
            form.classList.add('open');
            popup.classList.add('popup_openFox');
          }, 3200) /* Последнее число setTimeout() - задержка перед появлением pop-up-menu*/
        }

        if (((dateEntered.getMonth() == 9) && dateEntered.getUTCDate() >= 5) || (dateEntered.getMonth() == 10) || ((dateEntered.getMonth() == 11) && dateEntered.getUTCDate() <= 19)) {
          n = 2;
          num = ['Росомаха', 'Лось', 'Выдра', 'Лисица', 'Белка', 'Куница', 'Медведь', 'Северный олень', 'Горностай'][n];
          anim.play(-360 * 3 + n * 45 + 85);
          setTimeout(() => {
            const form = document.querySelector('#showOtter');
            const popup = document.querySelector('.popupOtter');
            form.classList.add('open');
            popup.classList.add('popup_openOtter');
          }, 3200) /* Последнее число setTimeout() - задержка перед появлением pop-up-menu*/
        }

        if (((dateEntered.getMonth() == 7) && dateEntered.getUTCDate() >= 10) || (dateEntered.getMonth() == 8) || ((dateEntered.getMonth() == 9) && dateEntered.getUTCDate() <= 4)) {
          n = 1;
          num = ['Росомаха', 'Лось', 'Выдра', 'Лисица', 'Белка', 'Куница', 'Медведь', 'Северный олень', 'Горностай'][n];
          anim.play(-360 * 3 + n * 45 + 80);
          setTimeout(() => {
            const form = document.querySelector('#showElk');
            const popup = document.querySelector('.popupElk');
            form.classList.add('open');
            popup.classList.add('popup_openElk');
          }, 3200) /* Последнее число setTimeout() - задержка перед появлением pop-up-menu*/
        }

        if (((dateEntered.getMonth() == 6) && dateEntered.getUTCDate() >= 5) || ((dateEntered.getMonth() == 7) && dateEntered.getUTCDate() <= 9)) {
          n = 0;
          num = ['Росомаха', 'Лось', 'Выдра', 'Лисица', 'Белка', 'Куница', 'Медведь', 'Северный олень', 'Горностай'][n];
          anim.play(-360 * 3 + 75);
          setTimeout(() => {
            const form = document.querySelector('#showWolverine');
            const popup = document.querySelector('.popupWolverine');
            form.classList.add('open');
            popup.classList.add('popup_openWolverine');
          }, 3200) /* Последнее число setTimeout() - задержка перед появлением pop-up-menu*/
        }
      }
    }

  } else {
    alert("Пожалуйста, выберите дату рождения.");
  }





  /* num = ['Росомаха', 'Лось', 'Выдра', 'Лисица', 'Белка', 'Куница', 'Медведь', 'Северный олень', 'Горностай'][n];
  anim.play(-360 * 3 + n * 45); //задать нужный угол поворота */
});