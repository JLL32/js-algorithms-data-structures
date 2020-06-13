class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  get(index) {
    return this.data[index];
  }

  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }

  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }

  insert(item) {
    for (let i = this.length - 1; i >= 0; i--) {
      this.data[i + 1] = this.data[i];
    }
    this.length++;
    this.data[0] = item;
  }

  delete(index) {
    const deletedItem = this.data[index];
    delete this.data[index];
    this.shiftItems(index);
    return deletedItem;
  }

  shiftItems(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
  }
}

const newArray = new MyArray();

newArray.push("Hi");
newArray.push("hello");
newArray.push("jll");
console.log(newArray);
newArray.delete(1);
console.log(newArray);
newArray.insert("Item");
console.log(newArray);
