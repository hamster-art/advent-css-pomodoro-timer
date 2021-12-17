window.addEventListener('DOMContentLoaded', (event) => {
  const startBtn = document.querySelector('.start-btn'),
    settingsBtn = document.querySelector('.settings-btn'),
    timeValues = document.querySelectorAll('.time-value'),
    minutes = document.querySelector('.minutes'),
    seconds = document.querySelector('.seconds');
  let countdown;

  function countDown() {
    let timeMinutes = parseInt(minutes.innerHTML);
    let timeSeconds = parseInt(seconds.innerHTML);
    if (timeSeconds === 0) {
      timeMinutes -= 1;
      timeSeconds = 60;
    } else {
      timeSeconds -= 1;
    }
    minutes.innerHTML = timeMinutes;
    seconds.innerHTML = timeSeconds;
  }

  function clickOnStartBtn() {
    if (startBtn.innerHTML === 'start') {
      startBtn.innerHTML = 'stop';
      clearInterval(countdown);
      countdown = setInterval(() => {
        countDown();
      }, 1000);
    } else {
      startBtn.innerHTML = 'start';
    }
  }
  startBtn.addEventListener('click', clickOnStartBtn);

  function clickOnSettingsBtn() {
    if (settingsBtn.classList.contains('edit')) {
      settingsBtn.classList.remove('edit');
      settingsBtn.classList.add('confirm');
      timeValues.forEach((item) => {
        item.setAttribute('contenteditable', 'true');
      });
    } else {
      settingsBtn.classList.remove('confirm');
      settingsBtn.classList.add('edit');
      timeValues.forEach((item) => {
        item.setAttribute('contenteditable', 'false');
      });
    }
  }
  settingsBtn.addEventListener('click', clickOnSettingsBtn);
});
