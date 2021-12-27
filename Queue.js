class Queue {
  constructor() {
    this.items = [];
  }
  
  // enqueue(item)
  enqueue(item) {
    this.items.push(item);
    return;
  }

  // dequeue()
  dequeue() {
    if (this.isEmpty()) return 'queue is empty';
    return this.items.shift();
  }

  // front() 
  front() {
    if (this.isEmpty()) return 'queue is empty';
    return this.items[0];
  }

  // isEmpty()
  isEmpty() {
    return this.items.length === 0;
  }

  // printQueue()
  printQueue() {
    return JSON.stringify(this.items);
  }
}

export default Queue;