//  
function Queue(){
    var items = [];

    this.enqueue = function(element){
        items.push(element);
    }

    this.dequeue = function(){
        return items.shift();
    }

    this.front = function(){
        return items[0];
    }

    this.isEmpty = function(){
        return items.length == 0;
    }

    this.size = function(){
        return items.length;
    }

    this.print = function(){
        console.log(items.toString())
    }
} 


// 优先队列
function PriorityQueue(){
    var items = [];
    
    var QueueElement = function(element,priority){
        this.element = element;
        this.priority = priority;
    }
    
    this.compare = function(a,b){
        if(a.priority<b.priority){
            return 1;
        }
        if(a.priority>b.priority){
            return -1;
        }
        return 0
    }

    this.enqueue = function(element,priority){
        var queueElement = new QueueElement(element,priority);
        items.push(queueElement);
        items.sort(this.compare)     
    }

    this.dequeue = function(){
        return items.shift();
    }

    this.front = function(){
        return items[0];
    }

    this.isEmpty = function(){
        return items.length == 0;
    }

    this.size = function(){
        return items.length;
    }

    this.print = function(){
        console.log(items[0],items[1],items[2])
    }
}

var PriorityQueue = new PriorityQueue();

PriorityQueue.enqueue(3,3)
PriorityQueue.enqueue(2,2)
PriorityQueue.enqueue(2,2)
PriorityQueue.print()


// 循环队列

function hotPotato(nameList,num){

    var queue = new Queue();

    for(var i=0; i<nameList.length; i++){
        queue.enqueue(nameList[i]);
    }
    
    var eliminated = '';
    while(queue.size()>1){
        for(var i=0; i<num; i++){
            queue.enqueue(queue.dequeue());
        }
        eliminated = queue.dequeue()
    }
    return queue.dequeue()
}

var names = ['john','jack','camila','girl','card'];
var winner = hotPotato(names,6)
console.log(winner)