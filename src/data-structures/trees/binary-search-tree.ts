type Option<T> = T | null;

class BNode<T> {
    constructor(
        public value: T,
        public left: Option<BNode<T>> = null,
        public right: Option<BNode<T>> = null
    ) { }
}

interface BST<T> {
    root: Option<BNode<T>>;
    insert: (value: T) => BNode<T>;
    lookup: (value: T) => boolean;
}

export default function <T = void>(): BST<T> {
    return {
        root: null,

        insert(value) {
            const newNode = new BNode(value);

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
        }
    };
}
