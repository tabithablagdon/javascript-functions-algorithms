// Tee's implementation of BST

var Node = function(key) {
  this.key = key;
  this.left = null;
  this.right = null;
  this.parent = null;
};

var BST = function() {
  this.root = null;
  this.size = 0;
};

BST.prototype = (function() {
  
  // INSERT
  var insert = function(key) {
  	var newNode = new Node(key);
    if (!this.root) {
      this.root = newNode;
    } else {
      insertNode(this.root, newNode);
    }
  	this.size++;
  };
  // private recursive helper function for insert method
  var insertNode = function(node, newNode) {
	  if (newNode.key < node.key) {
	    if (!node.left) {
	      node.left = newNode;
	      newNode.parent = node;
	    } else {
	      insertNode(node.left, newNode);  	
	    }	
	  } else {
	    if (!node.right) {
	      node.right = newNode;
	      newNode.parent = node;
	    } else {
	      insertNode(node.right, newNode);	
	    }	
      }
  };

  var remove = function(key) {
    this.root = removeNode(this.root, key)	
    this.size--;  	
  };
  
  // helper function for remove
  var removeNode = function(node, key) {
  	if (!node) {
  	  return null;	
  	}
    if (key < node.key) {
      node.left = removeNode(node.left, key);
      return node;
    } else if (key > node.key) {
      node.right = removeNode(node.right, key);
      return node;
    } else {
      // Node is a leaf node
      let parent = node.parent;
      if (!node.left && !node.right) {
        node = null;
        return node;
      }
      // Node has one child
      if (node.left && !node.right) {
        node = node.left;
        node.parent = parent;
        return node;
      } else if (node.right && !node.left) {
        node = node.right;
        node.parent = parent;
        return node;
      }
      // Node has two children
      var tempNode = getMinNode(node.right); // tempNode is node to replace the current node being deleted
      node.key = tempNode.key;
      node.right = removeNode(node.right, tempNode.key);
      return node;
    }
  };
  
  var inOrder = function(callback) {
    inOrderTraverse(this.root, callback);
  };
  // private helper function for inOrder traversal
  var inOrderTraverse = function(node, callback) {
    if (node) {
      inOrderTraverse(node.left, callback);
      callback(node.key);
      inOrderTraverse(node.right, callback);
    }		
  };
  
  var preOrder = function(callback) {
    preOrderTraverse(this.root, callback);
  };
  // private helper function for preOrder traversal
  var preOrderTraverse = function(node, callback) {
    if (node) {
      callback(node.key);
      preOrderTraverse(node.left, callback);
      preOrderTraverse(node.right, callback);
    }		
  };
  
  var postOrder = function(callback) {
    postOrderTraverse(this.root, callback);
  };
  // private helper function for postOrder traversal
  var postOrderTraverse = function(node, callback) {
    if (node) {
      postOrderTraverse(node.left, callback);
      postOrderTraverse(node.right, callback);
      callback(node.key);
    }		
  };
  
  var search = function(key) {
    let node = this.root;
    while (node) {
      if (node.key === key) {
        return node;	
      }
      node = key < node.key ? node.left : node.right;
    }
    return 'Not Found';
  };
  
  var contains = function(key) {
  	let node = this.root;
    while (node) {
      if (node.key === key) {
        return true;	
      }
      node = key < node.key ? node.left : node.right;
    }
    return false;
  };
  
  var getMinKey = function(node) {
  	node = node || this.root;
    if (!node) {
      return null;	
    } else {
      while (node.left) {
        node = node.left;	
      }
      return node.key;
    }
  };
  
  var getMinNode = function(node) {
    node = node || this.root;
    if (!node) {
      return null;	
    } else {
      while (node.left) {
        node = node.left;	
      }
      return node;
    }  	
  };
  
  var getMaxKey = function(node) {
  	node = node || this.root;
    if (!node) {
      return null;	
    } else {
      while (node.right) {
        node = node.right;	
      }
      return node.key;
    }
  };
  
  var getMaxNode = function(node) {
    node = node || this.root;
    if (!node) {
      return null;	
    } else {
      while (node.right) {
        node = node.right;	
      }
      return node;
    }  	
  };
	
  return {
  	constructor: BST, 
    insert: insert, 
    inOrder: inOrder, 
    getMinKey: getMinKey, 
    getMinNode: getMinNode, 
    getMaxKey: getMaxKey, 
    getMaxNode: getMaxNode, 
    remove: remove, 
    inOrder: inOrder, 
    preOrder: preOrder, 
    postOrder: postOrder,
    search: search,
    contains: contains
  };
  	
})();

var tree = new BST();

tree.insert(15);
tree.insert(25);
tree.insert(3);
tree.insert(10);
tree.insert(22);
tree.insert(2);
tree.insert(26);
tree.insert(30);
tree.insert(14);

tree.contains(14);
// => true
