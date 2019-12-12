const observer = new PerformanceObserver((list) => {
  const sendData = {}
  for (const entry of list.getEntries()) {
    observer.disconnect();
    sendData[entry.name] = entry.startTime
    chrome.runtime.sendMessage(chrome.runtime.id, sendData)
  }
});

observer.observe({
  type: 'paint',
  buffered: true,
})


