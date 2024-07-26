## Search Tree

![Frame_1_57_k9ywj1](https://github.com/user-attachments/assets/aa2a3af3-5378-4700-aa08-8580665f6c48)

We start at the root 5, recognize that 4 is less than 5 so we move left. 

We find 3, recognize that 4 is greater than 3 so we move right. 

We find 4, recognize this is what we are looking for and return true.

If we search for a missing node, we return false.

For instance if we were looking for 7 on this tree:

![Frame_1_59_gara4d](https://github.com/user-attachments/assets/532cc4c4-4988-4ce7-98fc-f6c9cb94b59d)

 After recognizing that 7 is greater than 5, we attempt to move right, but there is no right node! We return false.

## Your Goal: hasNode Method
Add a method hasNode that will take a number and search our tree to find a node that has that number inside it's data property.

If a node exists with the number, return true. If not return false.

For example:

const tree = new Tree();
const node1 = new Node(4);

tree.addNode(node1);

console.log(tree.hasNode(4)); // true
console.log(tree.hasNode(7)); // false
