import BST from "./data-structures/trees/binary-search-tree.ts";

const TestBST = function () {
    let myBT = BST<number>();
    console.log(myBT.insert(9));
    console.log(myBT.insert(4));
    console.log(myBT.insert(20));
    console.log(myBT.insert(1));
    console.log(myBT.insert(6));
    console.log(JSON.stringify(myBT.root, null, "    "));
};

TestBST();
