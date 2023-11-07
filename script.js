function Node(value) {
  this.value = value;
  this.left = 0;
  this.right = 0;
}

function BinarySearch() {
  this.root = null;

  this.insert = (value) => {
    const newNode = new Node(value);

    if (!this.root) {
      this.root = newNode;
      return;
    }

    let current = this.root;

    while (true) {
      if (value == current.value) {
        return this;
      }
      if (value < current.value) {
        if (!current.left) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else {
        if (!current.right) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  };

  this.inOrder = (node = this.root, result = []) => {
    if (node) {
      this.inOrder(node.left, result);
      result.push(node.value);
      this.inOrder(node.right, result);
    }
    return result;
  };

  this.preOrder = (node = this.root, result = []) => {
    if (node) {
      result.push(node.value);
      this.preOrder(node.left, result);
      this.preOrder(node.right, result);
    }
    return result;
  };

  this.postOrder = (node = this.root, result = []) => {
    if (node) {
      this.postOrder(node.left, result);
      this.postOrder(node.right, result);
      result.push(node.value);
    }
    return result;
  };

  this.delete = function (value, node = this.root) {
    if (!node) {
      return node;
    }

    if (value < node.value) {
      node.left = this.delete(value, node.left);
      return node;
    } else if (value > node.value) {
      node.right = this.delete(value, node.right);
      return node;
    }

    if (!node.left) {
      return node.right;
    } else if (!node.right) {
      return node.left;
    }
    let inOrder = node.right;
    while (inOrder.left) {
      inOrder = inOrder.left;
    }

   
    node.value = inOrder.value;

   
    node.right = this.delete(inOrder.value, node.right);

    return node;
  };
}
