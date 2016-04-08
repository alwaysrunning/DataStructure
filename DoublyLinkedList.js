//  
function DoublyLinkedList(){

    var Node = function(element){
        this.element = element;
        this.next = null;
        this.prev = null;
    }

    var length = 0;
    var head = null;
    var trail = null;

    this.append = function(element){
        var node = new Node(element);
        var current,previous;

        if(head == null){
            head = node;
        }else{
            current = head
            while(current.next){
                previous = current
                current = current.next
            }
            current.next = node;
            node.prev = current;           
        }
        trail = node;
        length++;
    }

    this.removeAt = function(position){
        if(position>-1 && position<length){
            var current = head,
            previous,
            index = 0;
            if(position==0){
                head = current.next;
                if(length==1){
                    trail = null;
                }else{
                    head.prev = null;
                }
            }else if(position==length-1){
                current = trail;
                trail = current.prev;
                trail.next = null;
            }else{
                while(index++ < position){
                    previous = current;
                    current = current.next;
                }
                previous.next = current.next;
                current.next.prev = previous;
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
                if(!head){
                    head = node;
                    trail = node;
                }else{
                    node.next = current;
                    current.prev = node;
                    head = node;
                }                
            }else if(position==length){
                trail.next = node
                node.prev = trail
                trail = node
            }else{
                while(index++ < position){
                    previous = current
                    current = current.next
                }
                previous.next = node;
                node.next = current;

                node.prev = previous;
                current.prev = node

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

   

var list = new DoublyLinkedList();
list.append(15);
list.append(10);
list.insert(1,'andy')
list.remove(10)

console.log(list.toString())