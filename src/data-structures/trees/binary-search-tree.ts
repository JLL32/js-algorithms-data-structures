type Option<T> = T | null;

class BNode<T> {
    constructor(
        public value: T,
        public left: Option<BNode<T>> = null,
        public right: Option<BNode<T>> = null
    ) {}
}

export class BinarySearchTree<T> {
    constructor(public root: Option<BNode<T>> = null) {}

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
