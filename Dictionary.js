function Dictionary(){
    
    var items = {};
    var length = 0;

    this.has = function(key){
        return key in items;
    }

    this.set = function(key,value){
        items[key] = value;
        length++;
    }

    this.remove = function(key){
        if(this.has(key)){
            delete items[key];
            length--;
            return true;
        }
        return false;
    }

    this.get = function(key){
        return this.has(key) ? items[key] : undefined ;
    }

    this.values = function(){
        var values = [];
        for(var i in items){
            values.push(items[i]);
        }

        return values
    }

    this.clear = function(){
        items = {};
        length = 0;
    }

    this.size = function(){
        return length;
    }

    this.getItems = function(){
        return items;
    }
}

var dictionary = new Dictionary()

dictionary.set('andy',29);
dictionary.set('loading',29);

console.log(dictionary.remove('andy'))
console.log(dictionary.getItems())