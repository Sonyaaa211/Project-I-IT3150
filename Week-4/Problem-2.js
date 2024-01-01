class HashTable {
    constructor() {
      this.table = new Array(127);
      this.size = 0;
    }

    _hash(key) {
      return key % this.table.length;
    }
  
    set(key, value) {
      const index = this._hash(key);
      this.table[index] = [key, value];
      this.size++;
    }
  
    get(key) {
      const target = this._hash(key);
      return this.table[target];
    }
  
    remove(key) {
      const index = this._hash(key);
  
      if (this.table[index] && this.table[index].length) {
        this.table[index] = [];
        this.size--;
        return true;
      } else {
        return false;
      }
    }
}

function solution(arr){
    let hashTable = new HashTable();
    for(let i = 0; i < arr.length; i++){
        if(hashTable.get(arr[i]) != null) console.log(1);
        else {
            console.log(0);
            hashTable.set(arr[i], 1);
        }
    }
}

let arr = [1, 4, 3, 1, 4];
solution(arr);