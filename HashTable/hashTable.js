class HashTable {
  constructor(size) {
    this.table = new Array(size);
    this.size = size;
  }

  hash(key) {
    let hash = 0;
    for (let char of key) {
      hash += char.charCodeAt(0);
    }
    return hash % this.size;
  }
 
  set(key, value) {
    let index = this.hash(key);
    if (!this.table[index]) {
      this.table[index] = [];
    }
    this.table[index].push([key, value]);
  }

  get(key) {
    let index = this.hash(key);
    let bucket = this.table[index];
    if (bucket) {
      for (let [k, v] of bucket) {
        if (k === key) return v;
      }
    }
    return undefined;
  }

  remove(key) {
    let index = this.hash(key);
    let bucket = this.table[index];
    if (bucket) {
      this.table[index] = bucket.filter(([k, v]) => k !== key);
    }
  }
}
