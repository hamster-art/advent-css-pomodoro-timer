window.addEventListener('DOMContentLoaded', (event) => {
  const timer = document.querySelector('.timer'),
    startBtn = timer.querySelector('.start-btn'),
    settingsBtn = timer.querySelector('.settings-btn'),
    minutesBox = timer.querySelector('.minutes'),
    secondsBox = timer.querySelector('.seconds');
  let countdown;

  function countDown() {
    let minutes = parseInt(minutesBox.innerHTML);
    let seconds = parseInt(secondsBox.innerHTML);
    if (seconds === 0 && minutes !== 0) {
      minutes -= 1;
      seconds = 59;
    } else if (seconds === 0 && minutes === 0) {
      timer.style.borderColor = '#00aa51';
      startBtn.innerHTML = 'start';
      clearInterval(countdown);
      alert('Count is over');
    } else {
      seconds -= 1;
      timer.style.borderColor = '#9d0000';
    }
    minutesBox.innerHTML = minutes < 10 ? '0' + minutes : minutes;
    secondsBox.innerHTML = seconds < 10 ? '0' + seconds : seconds;
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
      clearInterval(countdown);
    }
  }
  startBtn.addEventListener('click', clickOnStartBtn);

  function clickOnSettingsBtn() {
    if (settingsBtn.classList.contains('edit')) {
      settingsBtn.classList.remove('edit');
      settingsBtn.classList.add('confirm');
      minutesBox.setAttribute('contenteditable', 'true');
      secondsBox.setAttribute('contenteditable', 'true');
    } else {
      settingsBtn.classList.remove('confirm');
      settingsBtn.classList.add('edit');
      minutesBox.setAttribute('contenteditable', 'false');
      secondsBox.setAttribute('contenteditable', 'false');
    }
  }
  settingsBtn.addEventListener('click', clickOnSettingsBtn);
});
