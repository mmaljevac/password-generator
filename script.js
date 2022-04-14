function generate() {
  document.getElementById('copied').style.visibility = 'hidden';

  const passLength = document.getElementById('slider').value;
  const extraChecked = document.getElementById('extra').checked;
  let chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let generatedPass = '';

  if (extraChecked) chars += '!?@#$%^&*';

  for (let i = 0; i < passLength; i++) {
    generatedPass += chars.charAt(Math.floor(Math.random(chars) * chars.length));
  }

  const password = document.getElementById('password');
  password.innerHTML = generatedPass;
  password.style.visibility = 'visible';
  password.animate([{ backgroundColor: 'white' }, { backgroundColor: 'transparent' }], 500);
  password.style.backgroundColor = 'transparent';
}

function copy() {
  document.getElementById('copied').style.visibility = 'visible';
  navigator.clipboard.writeText(document.getElementById('password').innerHTML);
}

document.getElementById('generate').addEventListener('click', generate);
document.getElementById('password').addEventListener('click', copy);
