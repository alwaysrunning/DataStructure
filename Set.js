//  集合是由一组无序且唯一的项组成
function Set(){

    var items = {};
    var length = 0;

    this.has = function(value){
        return value in items;
        //return items.hasOwnProperty(key)
    }

    this.add = function(value){
        if(!this.has(value)){
            items[value] = value;
            length++;
            return true;
        }
        return false;      
    }

    this.remove = function(value){
        if(this.has(value)){
            delete items[value];
            length--;
            return true;
        }
        return false;
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

    this.union = function(otherSet){   // 并集
        var unionSet = new Set();

        var values = this.values();
        for(var i=0; i<values.length; i++){
            unionSet.add(values[i])
        }
        var values = otherSet.values();
        for(var i=0; i<values.length; i++){
            unionSet.add(values[i])
        }
        return unionSet
    }

    this.intersection = function(otherSet){  // 交集
        var intersectionSet = new Set();
        
        var valueA = this.values();
        /*var valueB = otherSet.values();
        for(var i=0; i<valueA.length; i++){
            var item = valueA[i];
            for(var j=0; j<valueB.length; j++){
                if(item==valueB[j]){
                    intersectionSet.add(item)
                }
            }
        }*/
        
        for(var i=0; i<valueA.length; i++){
            if(otherSet.has(valueA[i])){
                intersectionSet.add(valueA[i]);
            }
        }

        return intersectionSet;

    }

    this.difference = function(otherSet){
        var differenceSet = new Set();

        var values = this.values();
        for(var i=0; i<values.length; i++){
            if(!otherSet.has(values[i])){
                differenceSet.add(values[i]);
            }
        }

        return differenceSet;

    }

    this.subset = function(otherSet){
        var values = this.values()
        for(var i=0; i<values.length; i++){
            if(!otherSet.has(values[i])){
                return false;
            }
        }
        return true;
    }
}

var setA = new Set();
setA.add(1);
setA.add(2);
setA.add(3);

var setB = new Set();
setB.add(2);
setB.add(3);
setB.add(4);

var newSet = setA.subset(setB);


//console.log(set.remove('andy'))
console.log(newSet)