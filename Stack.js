//  
function Stack(){
    var items = [],
    length = 0;

    this.push = function(element){
        items.push(element);
        length++;
    }

    this.pop = function(){
        if(!this.isEmpty()){
            length--;
            return items.pop();
        }    
    }

    this.peek = function(){
        return items[length-1];
    }

    this.isEmpty = function(){
        return items.length == 0;
    }

    this.clear = function(){
        items = [];
        length = 0;
    }

    this.size = function(){
        return length;
    } 
    
}

var stack = new Stack()

stack.push(5); 
stack.push(6); 
stack.push(7);  
//console.log(stack.size())


function baseConverter(dec,base){
    var remStack = new Stack(),
    rem,
    baseString='',
    digits;
    
    while( dec > 0 ){
        rem = Math.floor( dec % base );
        remStack.push(rem);
        dec = Math.floor( dec / base);
    }

    while(!remStack.isEmpty()){
        digits = '0123456789ABCDEF';
        baseString += digits[remStack.pop()]
    }
    return baseString;
}

var num = baseConverter(100345,16);
console.log(num)