window.addEventListener('DOMContentLoaded', (event) => {
  const startBtn = document.querySelector('.start-btn'),
    settingsBtn = document.querySelector('.settings-btn'),
    timeValues = document.querySelectorAll('.time-value');

  function clickOnStartBtn() {
    if (startBtn.innerHTML === 'start') {
      startBtn.innerHTML = 'stop';
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
