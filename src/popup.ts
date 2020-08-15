// @ts-ignore
const changeColor = document.getElementById('changeColor');

chrome.storage.sync.get('color', (data) => {
  if (!changeColor) {
    return;
  }

  changeColor.style.backgroundColor = data.color;
  changeColor.setAttribute('value', data.color);
});

// @ts-ignore
changeColor.onclick = (element) => {
  // @ts-ignore
  const color = element.target.value;
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    // @ts-ignore
    chrome.tabs.executeScript(tabs[0].id, {
      code: `document.body.style.backgroundColor = "${color}";`,
    });
  });
};
