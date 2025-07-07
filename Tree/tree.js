class TreeNode {
  constructor(value) {
    this.value = value;
    this.children = [];
  }

  // Add a child node
  addChild(child) {
    this.children.push(child);
  }
   
}

const root = new TreeNode("A");

const child1 = new TreeNode("B");
const child2 = new TreeNode("C");

root.addChild(child1);
root.addChild(child2);

child1.addChild(new TreeNode("D"));
child1.addChild(new TreeNode("E"));
child2.addChild(new TreeNode("F"));

function dfs(node) {
  console.log(node.value);
  for (let child of node.children) {
    dfs(child);
  }
}
dfs(root); // Output: A B D E C F

console.log('---------------------------');

function bfs(node) {
  let queue = [node];

  while (queue.length > 0) {
    let current = queue.shift();
    console.log(current.value);
    queue.push(...current.children);
  }
}
bfs(root); // Output: A B C D E F
