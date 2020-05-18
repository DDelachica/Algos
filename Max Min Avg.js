// Max/Min/Average
// SList: Max
// American Idol seems to air singers that are the best, and a few that seem like the worst! Create function max(node) to return list’s largest val.



// SList: Min
// Create min(node) to return list’s smallest val.



// SList: Average
// Create average(node) to return average val.

class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class SLL{
    constructor(value){
        this.head = new Node(value);
    }
    add_front(value){
        var restOfList = this.head;
        this.head = new Node(value);
        this.head.next = restOfList;
        return this
    }
    remove_front(){
        var newList = this.head.next;
        this.head = newList;
        return this;
    }
    display(){
        var runner = this.head;
        var count = 0
        while(runner){
            count ++;
            console.log(`This is current Node ${count}, containing value ${runner.value}, next is ${runner.next}`)
            runner = runner.next
        }
        return this
    }
    contains(value){
        var runner = this.head;
        while(runner) {
            if(runner.value == value){
                return true
            }
            runner = runner.next
        }
    return false
    } 
    add_back(value){
        if(this.head == null){
            this.head = new Node(value);
        }
        var runner = this.head;
        while(runner.next) {
            runner = runner.next
        }
        runner.next = new Node(value)
        return this
    }
    length(){
        var runner = this.head;
        var count = 1;
        while(runner.next) {
            runner = runner.next;
            count += 1;
        }
        return count;
    }
    maxMinAvg(){
        var num_of_nodes = 0
        var returnObj = {
            'max': this.head.value,
            'min': this.head.value,
            'avg': 0
        }
        var runner = this.head;
        while(runner){
            num_of_nodes++;
            if(runner.value > returnObj['max']){
                returnObj['max'] = runner.value;
            }
            if(runner.value < returnObj['min']){
                returnObj['min'] = runner.value;
            }
            returnObj['avg'] += runner.value;
            runner = runner.next;
        }
        returnObj['avg'] = returnObj['avg']/num_of_nodes;
        return returnObj
    }
}
var first_SLL = new SLL('Bill');
var second_SLL = new SLL(8);
second_SLL.add_front(5);
second_SLL.add_front(4);
second_SLL.add_front(2);
second_SLL.remove_front();
second_SLL.display();
console.log(second_SLL)
console.log("This is the length " + second_SLL.length());
console.log(second_SLL.maxMinAvg());
first_SLL.add_back('Jill').add_back('Jake').add_back('Jack').add_back('Tad').add_back('Becky');
console.log(first_SLL.contains('Tad'));
console.log(first_SLL);
console.log("This is the length " + first_SLL.length('Bill'));
