const counter = {
  count: 0,
  incrementCounter: function() {
    console.log(this);
    this.count++;
  }
}
document.querySelector('.btn').addEventListener('click', counter.incrementCounter);