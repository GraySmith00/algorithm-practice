class Stopwatch {
  constructor() {
    this.running = false;
    this.startTime = null;
    this.stopTime = null;
  }

  start() {
    if (this.running) throw new Error('Already started');
    this.running = true;
    if (!this.startTime) {
      this.startTime = new Date() / 1000;
    }
  }

  stop() {
    if (!this.running) throw new Error('Already stopped');
    this.running = false;
    this.stopTime = new Date() / 1000;
  }

  getDuration() {
    return this.stopTime - this.startTime;
  }

  reset() {
    this.startTime = null;
    this.stopTime = null;
  }
}

const watch = new Stopwatch();
watch.start();

setTimeout(() => {
  watch.stop();
  console.log(watch.getDuration());
  watch.start();
  setTimeout(() => {
    watch.stop();
    console.log(watch.getDuration());
    watch.reset();
    watch.start();
    setTimeout(() => {
      watch.stop();
      console.log(watch.getDuration());
    }, 1000);
  }, 2000);
}, 3000);
