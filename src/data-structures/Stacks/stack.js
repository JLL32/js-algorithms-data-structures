class Node {
	constructor(value = null) {
		this.value = value;
		this.next = null;
	}
}

class Stack {
	constructor() {
		this.top = null;
		this.bottom = null;
		this.length = 0;
	}
	peek() {
		return this.top;
	}
	push(value) {
		const newNode = new Node(value);
		if (this.length == 0) {
			this.bottom = newNode;
			this.top = newNode;
			this.length = 1;
			return
		}
		newNode.next = this.top;
		this.top = newNode;
		this.length += 1;
	}
	pop() {
		if (this.length == 0) {
			return null;
		}
		if (this.length == 1) {
			this.bottom = null;
		}
		const toPop = this.top;
		this.top = this.top.next;
		this.length -= 1;
		return toPop;
	}
}

const myStack = new Stack();
myStack.push("Hi");
myStack.push("Hello");
myStack.push("How Are You");
myStack.push("Fk U!");
console.log(JSON.stringify(myStack, null,4));
myStack.pop();
myStack.pop();
myStack.pop();
myStack.pop();
console.log(JSON.stringify(myStack, null,4));
