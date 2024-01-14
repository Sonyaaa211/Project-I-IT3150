project.problemInfo[31] = "Store & Search String"

class HashTable {
    constructor() {
      this.table = new Array(127);
      this.size = 0;
    }
  
    _hash(key) {
      let hash = 0;
      for (let i = 0; i < key.length; i++) {
        hash += key.charCodeAt(i);
      }
      return hash % this.table.length;
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

project.solution_4_3 = function(input){
    let ht = new HashTable();
    const lines = input.split("\n");
    for (let i = 0; i < lines.length - 1; i++) {
        const query = lines[i].split(" ");
        switch (query[0]){
            case "find":
                if(ht.get(query[1]) != undefined)
                    project.res += 1 + "\n";
                else project.res += 0 + "\n";
                break;
            case "insert":
                if(ht.get(query[1]) == undefined){
                    ht.set(query[1], 1);
                    project.res += 1 + "\n";
                }
                else project.res += 0 + "\n";
                break;
            case "***":
            case "*":
                break;
            default:
                    ht.set(query[0], 1);
                break;
        }
    }
    return project.res;
}