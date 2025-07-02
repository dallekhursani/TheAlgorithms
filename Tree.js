class BinaryTree {
  constructor() {
    this.root = null;
  }

  // Insert a value into the tree
  insert(data) {
    this.root = this._insertRec(this.root, data);
  }

  _insertRec(node, data) {
    if (node === null) {
      return new Node(data);
    }

    if (data < node.data) {
      node.left = this._insertRec(node.left, data);
    } else {
      node.right = this._insertRec(node.right, data);
    }

    return node;
  }

  // Search for a value
  search(data) {
    return this._searchRec(this.root, data);
  }

  _searchRec(node, data) {
    if (node === null) return false;
    if (node.data === data) return true;

    if (data < node.data) {
      return this._searchRec(node.left, data);
    } else {
      return this._searchRec(node.right, data);
    }
  }

  // In-order Traversal (Left, Root, Right)
  inorder() {
    this._inorderRec(this.root);
  }

  _inorderRec(node) {
    if (node !== null) {
      this._inorderRec(node.left);
      console.log(node.data);
      this._inorderRec(node.right);
    }
  }
}
