type Option<T> = T | null;

class Node<T> {
    constructor(
        public value: T,
        public left: Option<Node<T>> = null,
        public right: Option<Node<T>> = null
    ) { }
}

interface BST<T> {
    root: Option<Node<T>>;
    insert: (value: T) => Node<T>;
    lookup: (value: T) => boolean;
    remove: (value: T) => Option<Node<T>>;
}

export default function <T = void>(): BST<T> {
    return {
        root: null,

        insert(value) {
            const newNode = new Node(value);

            if (this.root == null) {
                this.root = newNode;
                return this.root;
            }

            let tempNode = this.root;
            for (; ;) {
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
        },

        lookup(value) {
            if (this.root == null)
                return false;
            let currentNode = this.root;
            for (; ;) {
                if (value > currentNode?.value)
                    if (currentNode.right != null) {
                        currentNode = currentNode.right;
                    } else {
                        break;
                    }
                if (value < currentNode.value)
                    if (currentNode.left != null) {
                        currentNode = currentNode.left;
                    } else {
                        break;
                    }
                if (value == currentNode.value)
                    return true;
            }
            return false;
        },

        remove(value) {
            if (this.root == null)
                return null;
            let currentNode = this.root;
            let parentNode = null;
            return currentNode;
        }
    };
}
