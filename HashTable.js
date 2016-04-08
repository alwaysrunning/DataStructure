// 散列表是通过散列算法尽可能快的在数据结构中找到对应的值  
function HashTable(){
    var table = [];
    var loseloseHashCode = function(key){
    	var hash = 0;
    	for(var i=0; i<key.length; i++){
    		hash += key.charCodeAt(i);
    	}
    	return hash % 37;
    }
    
    var ValuePair = function(key,value){
    	this.key = key;
    	this.value = value;
    	this.toString = function(){
    		return this.key + '-' + this.value;
    	}
    }
    this.put = function(key,value){
    	var position = loseloseHashCode(key);
    	if(table[position]==undefined){
    		table[position] = new LinkedList();
    	}
    	table[position].append(new ValuePair(key,value))

    }

    this.get = function(key){
    	var position = loseloseHashCode(key);
    	if(table[position]!== undefined){
    		var current = table[position].getHead();
    		while(current){
    			if(current.element.key==key){
    				return current.element.value
    			}
    			current = current.next
    		}
    	}
    	return undefined;
    }

    this.remove = function(key){
    	var position = loseloseHashCode(key);
    	var previous ;
    	if(table[position]!== undefined){
    		var current = table[position].getHead();
    		while(current){
    			if(current.element.key==key){
    				table[position].remove(current.element);
    				if(table[position].isEmpty()){
    					table[position]==undefined;
    				}
    				return true
    			}
    			current = current.next
    		}
    		return false
    	}
    }
};




function LinkedList(){

    var Node = function(element){
        this.element = element;
        this.next = null;
    }

    var length = 0;
    var head = null;

    this.append = function(element){
        var node = new Node(element);
        var current;

        if(head == null){
            head = node;
        }else{
            current = head
            while(current.next){
                current = current.next
            }
            current.next = node
        }
        length++;
    }

    this.removeAt = function(position){
        if(position>-1 && position<length){
            var current = head,
            previous,
            index = 0;
            if(position==0){
                head = current.next
            }else{
                while(index++ < position){
                    previous = current
                    current = current.next
                }
                previous.next = current.next
            }

            length--;
            return current.element;

        }else{

            return null;
        }
    }

    this.insert = function(position,element){
        if(position>=0 && position<=length){
            var current = head,
            previous,
            index = 0,
            node = new Node(element);
            if(position==0){
                node.next = current
                head = node
            }else{
                while(index++ < position){
                    previous = current
                    current = current.next
                }
                previous.next = node;
                node.next = current

            }
            length++;
            return true;
        }else{
            return false;
        }
    }

    this.toString = function(){
        var current = head,
        string="";
        
        while(current){
            string += current.element;
            current = current.next;
        }
        
        return string;
    }

    this.indexOf = function(element){
        var current = head,
        index = 0;

        while(current){
            if(current.element == element){
                return index;
            }
            index++;
            current = current.next;
        }
        return -1;
    }

    this.remove = function(element){
        var position = this.indexOf(element);
        return this.removeAt(position);
    }

    this.isEmpty = function(){
        return length==0 ? true : false
    }

    this.getHead = function(){
        return head;
    }
}


var hash = new HashTable();
hash.put('Jamie','178224406@qq.com')
hash.put('Sue','johnsnow@email.com')
hash.remove('Jamie')
var a = hash.get('Sue')
console.log(a)