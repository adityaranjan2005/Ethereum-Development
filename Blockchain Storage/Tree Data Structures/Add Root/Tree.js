class Tree {
    constructor() {
        this.root = null;
    }

    addNode(node) {
        if(!this.root) {
            this.root = node;
        }
    }
}

module.exports = Tree;
