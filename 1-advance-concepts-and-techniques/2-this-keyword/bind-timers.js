class Counter {
  constructor(startingNum = 0, incrementAmount = 1) {
    this.count = startingNum;
    this.incrementAmount = incrementAmount;
  }

  start() {
    setInterval(this.incrementCount.bind(this), 1000);
  }

  incrementCount() {
    console.log(this.count);
    this.count += this.incrementAmount;
  }
}

const counter = new Counter();

counter.start();
