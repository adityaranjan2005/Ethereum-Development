class Tree {
    constructor() {
        this.root = null;
    }

    addNode(node) {
        if(!this.root) {
            this.root = node;
        }

        if(node.data < this.root.data) {
            this.root.left = node;
        }

        if(node.data > this.root.data) {
            this.root.right = node;
        }
    }
}

module.exports = Tree;
