class Node<T> {
	constructor(public value: T,
		public next: Node<T> | null = null) { }
}

class LinkedList<T> {
	head: Node<T>;
	tail: Node<T>;
	length: number;

	constructor(value: T) {
		this.head = {
			value: value,
			next: null,
		};
		this.tail = this.head;
		this.length = 1;
	}

	append(value: T) {
		let node = new Node<T>(value);
		this.tail.next = node;
		this.tail = node;
		this.length++;
	}

	prepend(value: T) {
		let node = new Node<T>(value);
		node.next = this.head;
		this.head = node;
		this.length++;
	}

	insert(index: number, value: T) {
		if (index >= this.length) {
			return this.append(value);
		} else if (index <= 0) {
			return this.prepend(value);
		}
		let node: Node<T> = new Node<T>(value);
		let leader = this.traverseToIndex(index - 1);
		[leader.next, node.next] = [node, leader.next];
		this.length++;
	}

	remove(index: number) {
		let toRemove = this.traverseToIndex(index);
		let leader = this.traverseToIndex(index - 1);
		leader.next = toRemove.next;
		toRemove.next = null;
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
		while (currentNode.next && index--) {
			currentNode = currentNode.next;
		}
		return currentNode;
	}
	reverse() {
		if (this.length == 1) {
			return;
		}
		this.tail = this.head;
		let first = this.head;
		let second = this.head.next;
		while (second) {
			let temp = second.next;
			second.next = first;
			first = second;
			second = temp;
		}
		this.head.next = null;
		this.head = first;
	}
}

let myLinkedList = new LinkedList<string>("[0] \tHaha memory allocation go brrrrr");
for (let i = 1; i <= 100; i++) {
	myLinkedList.append(`[${i}] \tHaha memory allocation go brrrrr`);
}
for (let i = 0; i <= 100; i++)
	console.log(myLinkedList.traverseToIndex(i).value + "\n");

export { };
