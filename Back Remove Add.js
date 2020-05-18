// Back/Remove/Add
// SList: Back
// Create a function that accepts a ListNode pointer and returns the last value in the list.



// SList: Remove Back
// Create a standalone function that removes the last ListNode in the list and returns the new list.



// SList: Add Back
// Create a function that creates a ListNode with given value and inserts it at end of a linked list.

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
    back(){
        var last_value = this.head.value;
        var runner = this.head;
        while(runner){
            last_value = runner.value;
            runner = runner.next;
        }
        return last_value
    }
    remove_back(){
        var runner = this.head;
        while(runner.next.next) {
            runner = runner.next
            console.log(`value ${runner.value}, next is ${runner.next}`);
        }
        runner.next = null;
        return this
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
first_SLL.remove_back()
console.log(first_SLL.contains('Tad'));
console.log(first_SLL);
console.log("This is the length " + first_SLL.length('Bill'));
console.log("This is the last value " + first_SLL.back());