class BNode<T> {
    constructor(
        public value: T,
        public left: BNode<T> | null = null,
        public right: BNode<T> | null = null
    ) {}
}

class BinarySearchTree<T> {
    constructor(public root: BNode<T> | null = null) {}
}
