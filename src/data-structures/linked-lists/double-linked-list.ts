class Node<T> {
	constructor(
		public value: T,
		public next: Node<T> | null = null,
		public previous: Node<T> | null = null) { }
}

class LinkedList<T> {
	head: Node<T>;
	tail: Node<T>;
	length: number;

	constructor(value: T) {
		this.head = {
			value: value,
			next: null,
			previous: null,
		};
		this.tail = this.head;
		this.length = 1;
	}

	append(value: T) {
		let newNode = new Node<T>(value);
		newNode.previous = this.tail;
		this.tail.next = newNode;
		this.tail = newNode;
		this.length++;
	}

	prepend(value: T) {
		let newNode = new Node<T>(value);
		newNode.next = this.head;
		this.head.previous = newNode;
		this.head =newNode;
		this.length++;
	}

	insert(index: number, value: T) {
		if (index >= this.length) {
			return this.append(value);
		} else if (index <= 0) {
			return this.prepend(value);
		}
		let newNode = new Node<T>(value);
		let follower = this.traverseToIndex(index);
		let leader = follower.previous;
		if (leader && leader.next) {
			newNode.next = follower;
			follower.previous = newNode;
			leader.next = newNode;
			newNode.previous = leader;
		}
		this.length++;
	}

	remove(index: number) {
		let toRemove = this.traverseToIndex(index);
		let leader = this.traverseToIndex(index - 1);
		let follower = this.traverseToIndex(index + 1)
		leader.next = follower;
		follower.previous = leader;
		toRemove.next = null;
		toRemove.previous = null;
		this.length--;
	}

	toArray(): T[] {
		let nodeArray = new Array();
		let currentNode: Node<T> = this.head;
		while (currentNode) {
			nodeArray.push(currentNode.value);
			if (currentNode.next) {
				currentNode = currentNode.next;
			} else {
				break;
			}
		}
		return nodeArray;
	}

	traverseToIndex(index: number): Node<T> {
		if (index <= 0) { return this.head; }
		let currentNode: Node<T> = this.head;
		while (currentNode && index--) {
			if (currentNode.next) { currentNode = currentNode.next; }
		}
		return currentNode;
	}
}

let myLinkedList = new LinkedList<number>(10);
myLinkedList.append(599);
myLinkedList.prepend(0);
myLinkedList.insert(2, 55);
myLinkedList.remove(1);
console.log(myLinkedList.toArray());
console.log(myLinkedList);

export { };
