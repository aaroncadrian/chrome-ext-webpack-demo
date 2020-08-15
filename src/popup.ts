const changeColor = document.getElementById('changeColor');

chrome.storage.sync.get('color', (data) => {
  changeColor!.style.backgroundColor = data.color;
  changeColor!.setAttribute('value', data.color);
});

changeColor!.onclick = (element) => {
  const color = (element.target as HTMLButtonElement).value;

  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const [tab] = tabs;

    if (!tab) {
      return;
    }

    // @ts-ignore
    chrome.tabs.executeScript(tab.id, {
      code: `document.body.style.backgroundColor = "${color}";`,
    });
  });
};
