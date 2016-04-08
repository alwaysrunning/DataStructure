//  
function BinarySearchTree(){
    
    var Node = function (key){
        this.key = key;
        this.left = null;
        this.right = null;
    }

    var root = null;

    this.insert = function(key){
    	var newNode = new Node(key);

    	if(root==null){
    		root = newNode;
    	}else{
    		insertNode(root,newNode);
    	}
    }

    var insertNode = function(node,newNode){
    	if(newNode.key<node.key){
    		if(node.left===null){
    			node.left = newNode;
    		}else{
    			insertNode(node.left,newNode);
    		}
    	}else{
    		if(node.right===null){
    			node.right = newNode
    		}else{
    			insertNode(node.right,newNode);
    		}
    	}
    }

    this.inOrderTraverse = function(callback){
    	inOrderTraverseNode(root,callback)
    }

    var inOrderTraverseNode = function(node,callback){
    	if(node!=null){
    		inOrderTraverseNode(node.left,callback);
    		callback(node.key);
    		inOrderTraverseNode(node.right,callback);
    	}
    }

    this.preOrderTranverse = function(callback) {
        preOrderTranverseNode(root, callback);
    };

    var preOrderTranverseNode = function(node,callback){
    	if(node!=null){
    		callback(node.key); 
    		preOrderTranverseNode(node.left,callback);
    		preOrderTranverseNode(node.right,callback);  				
    	}
    }

    this.postOrderTranverse = function(callback) {
        postOrderTranverseNode(root, callback);
    }

    var postOrderTranverseNode = function(node,callback){
    	if(node!=null){
    		postOrderTranverseNode(node.left,callback);
    		postOrderTranverseNode(node.right,callback); 
    		callback(node.key);  				
    	}
    }

    this.min = function(){
    	return minNode(root);
    }

    var minNode = function(node){
    	if(node!=null){
    		while(node && node.left!=null){
    			node = node.left;
    		}
    		return node.key;
    	}
    	return null;
    }

    this.max = function(){
    	return maxNode(root);
    }

    var maxNode = function(node){
    	if(node!=null){
    		while(node && node.right){
    			node = node.right;
    		}
    		return node.key;
    	}
    	return null;
    }

    this.search = function(key){
    	return searchNode(root,key);
    }

    var searchNode = function(node,key){
    	if(node == null){
    		return false;
    	}else if(key>node.key){
    		searchNode(node.right,key);
    	}else if(key<node.key){
    		searchNode(node.left,key);
    	}else{
    		return true;
    	}
    }

    this.remove = function(key){
    	root = removeNode(root,key)
    }

    var removeNode = function(node,key){
    	if(node==null){
    		return null;
    	}else if(key < node.key){
    		node.left = removeNode(node.left,key);
    		return node;
    	}else if(key > node.key){
    		node.right = removeNode(node.right,key);
    		return node;
    	}else{
    		if(node && node.left == null && node.right ==null){
    			node = null;
    			return node;
    		}
    		if(node.left===null){
    			node = node.right
    			return node;
    		}
    		if(node.right===null){
    			node = node.left;
    			return node;
    		}

    		var aux = findMinNode(node.right);
    		node.key = aux.key;

    		node.right = removeNode(node.right,aux.key)
    	}
    }

    var findMinNode = function(node){
    	return this.min()
    }
}

