class BNode<T> {
    constructor(
        public value: T,
        public left: BNode<T> | null = null,
        public right: BNode<T> | null = null
    ) {}
}

class BinarySearchTree<T> {
    constructor(public root: BNode<T> | null = null) {}

    insert(value: T): BNode<T> {
        let newNode = new BNode(value);

        if (this.root == null) {
            this.root = newNode;
            return this.root;
        }

        let tempNode = this.root;
        for (;;) {
            if (value > tempNode.value) {
                if (tempNode.right == null) {
                    tempNode.right = newNode;
                    return newNode;
                } else tempNode = tempNode.right;
            }
            if (value < tempNode.value) {
                if (tempNode.left == null) {
                    tempNode.left = newNode;
                    return newNode;
                } else tempNode = tempNode.left;
            }
        }
    }
}

let myBT = new BinarySearchTree<number>();
console.log(myBT.insert(9));
console.log(myBT.insert(4));
console.log(myBT.insert(20));
console.log(myBT.insert(1));
console.log(myBT.insert(6));
console.log(JSON.stringify(myBT.root, null, "    "));
