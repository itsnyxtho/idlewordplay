/* Timer */
class Timer {
  constructor () {
    this.isRunning = false;
    this.startTime = 0;
    this.overallTime = 0;
  }

  _getTimeElapsedSinceLastStart () {
    if (!this.startTime) {
      return 0;
    }
  
    return Date.now() - this.startTime;
  }

  start () {
    if (this.isRunning) {
      return console.error('Timer is already running');
    }

    this.isRunning = true;

    this.startTime = Date.now();
  }

  stop () {
    if (!this.isRunning) {
      return console.error('Timer is already stopped');
    }

    this.isRunning = false;

    this.overallTime = this.overallTime + this._getTimeElapsedSinceLastStart();
  }

  reset () {
    this.overallTime = 0;

    if (this.isRunning) {
      this.startTime = Date.now();
      return;
    }

    this.startTime = 0;
  }

  getTime () {
    if (!this.startTime) {
      return 0;
    }

    if (this.isRunning) {
      return this.overallTime + this._getTimeElapsedSinceLastStart();
    }

    return this.overallTime;
  }
}

/* @namespace */
var iwp = {
  intervalLength: 1000,
  stamps: [],
};

var iwp__timer = function () {
  let curTime = new Date();
  iwp.stamps.push(curTime);
  console.log('tick', Math.floor((curTime - iwp.stamps[0])/1000));

  if (iwp.stamps.length%30===0) {
    console.log(iwp);
  }
};

var iwp__onPlay = function () {
  iwp.ticker.start();
};

var iwp__onPause = function () {
  iwp.ticker.stop();
};

var iwp__onReset = function () {
  iwp.ticker.reset();
};

// iwp.ticker = setInterval(iwp__timer, iwp.intervalLength);


iwp.ticker = new Timer();
iwp.ticker.start();
setInterval(() => {
  const timeInSeconds = Math.round(iwp.ticker.getTime() / 1000);
  document.getElementById('time').innerText = timeInSeconds;
}, 100)