project.problemInfo[32] = "Sum pair of sequence equal to a number"

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

project.solution_4_4 = function(input){
    let lines = input.split("\n");
    let m = parseInt(lines.shift().split(" ")[1]);
    let arr = lines[0].split(" ");
    let hashTable = new HashTable();
    let res = 0;
    for(let i = 0; i < arr.length; i++){
        if(hashTable.get(m - arr[i]) != null){
            res++;
        } 
        if(hashTable.get(arr[i]) == null) {
            hashTable.set(arr[i], 1);
        }
    }
    return res;
}