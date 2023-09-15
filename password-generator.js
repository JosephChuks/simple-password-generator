function password(limit = 12) {
  const elements = '1234567890#@&*()QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm';
  const newPass = [];
  for (let i = 1; i <= limit; i++) {
    const rand = Math.floor(Math.random() * elements.length);
    newPass.push(elements[rand])
  }
  return newPass.join('');
}

//console.log(password(16));
