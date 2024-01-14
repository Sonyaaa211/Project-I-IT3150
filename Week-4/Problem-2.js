project.problemInfo[30] =  "Kiểm tra xuất hiện"

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

project.solution_4_2 = function(input){
    let lines = input.split("\n");
    lines.shift();
    let arr = lines[0].split(" ");
    let hashTable = new HashTable();
    for(let i = 0; i < arr.length; i++){
        if(hashTable.get(arr[i]) != null) project.res += 1 +"\n";
        else {
            project.res += 0 +"\n";
            hashTable.set(arr[i], 1);
        }
    }
    return project.res;
}