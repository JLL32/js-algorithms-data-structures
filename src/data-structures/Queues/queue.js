class Node {
	constructor(value = null) {
		this.value = value;
		this.next = null;
	}
}

class Queue {
	constructor() {
		this.last = null;
		this.first = null;
		this.length = 0;
	}
	peek() {
		return this.first;
	}
	enqueue(value) {
		const newNode = new Node(value);
		if (this.length == 0) {
			this.first = newNode;
			this.last = newNode;
		}
		else {
			this.last.next = newNode;
			this.last = newNode;
		}
		this.length += 1;
	}
	dequeue() {
		if (this.length == 0) {
			return null;
		}
		if (this.length == 1) {
			this.last = null;
		}
		const toPop = this.first;
		this.first = this.first.next;
		this.length -= 1;
		return toPop;
	}
}

const myQueue = new Queue();
myQueue.enqueue("Hello");
myQueue.enqueue("Hi");
myQueue.enqueue("FK U!");
console.log(JSON.stringify(myQueue, null,4));
myQueue.dequeue();
myQueue.dequeue();
console.log(JSON.stringify(myQueue, null, 4));
