const reloadButton = document.getElementById('reload')
reloadButton.addEventListener('click', () => {
  chrome.devtools.inspectedWindow.reload()
})

chrome.devtools.inspectedWindow.eval('location.href', result => {
  const currentURL = result
  chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (sender.url === currentURL) {
      const html = Object.entries(message).map(([k, v]) => `<li>${k} : ${v}</li>`).join('')
      document.getElementById('message').innerHTML = html
    }
    return true
  })
})
