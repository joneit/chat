window.onload = () => {
  const connection = new WebSocket('ws://localhost:1492');
  const chatList = document.getElementById('conversation');
  const messageBox = document.getElementById('messageBox');

  const messageBoxStyle = window.getComputedStyle(messageBox);
  chatList.style.bottom = (
    parseInt(messageBoxStyle.height) +
    parseInt(messageBoxStyle.paddingTop) +
    parseInt(messageBoxStyle.paddingBottom)
  ) + 'px';

  let who;
  while (!(who = window.prompt('Your name, please:')));

  connection.addEventListener('open', () => console.log('connected'));

  let prevName;

  connection.addEventListener('message', e => {
    const data = JSON.parse(e.data);
    const fromMe = data.who === who;

    if (data.who !== prevName) {
      prevName = data.who;
      if (!fromMe) {
        const nameEl = document.createElement('div');
        nameEl.className = "name";
        nameEl.textContent = prevName;
        chatList.appendChild(nameEl);
      }
    }

    const messageEl = document.createElement('div');
    messageEl.className = 'message';
    if (fromMe) { messageEl.classList.add('origin'); }
    messageEl.setAttribute('title', data.when);
    const div = document.createElement('div');
    div.textContent = data.what;
    messageEl.appendChild(div);
    chatList.appendChild(messageEl);
  });

  const send = what => {
    if (connection.readyState === WebSocket.OPEN) {
      const when = (new Date).toLocaleString();
      connection.send(JSON.stringify({ when, who, what }));
    } else {
      throw 'No connection!';
    }
  };

  messageBox.addEventListener('keydown', e => {
    const kc = e.which || e.keyCode;

    if (kc === 0xD) {
      send(messageBox.value);
      messageBox.value = '';
    }
  });

  messageBox.focus();
};
