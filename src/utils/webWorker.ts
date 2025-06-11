let isRunning = false;

self.onmessage = function (event) {
    if(isRunning) return;

    isRunning = true;

    const state = event.data;
    const { activeTask, secondsRemaining } = state;
    
    const endDate = activeTask.startDate + (secondsRemaining * 1000);

    const now = Date.now();
    let seconds = Math.ceil((endDate - now) / 1000);

    function tick() {
        self.postMessage(seconds)

        const now = Date.now();
        seconds = Math.floor((endDate - now) / 1000);

        setTimeout(tick, 1000)
    }

    tick()
}