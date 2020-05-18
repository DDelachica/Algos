// Length
// July 20, 2013: about 5000 people wait in line for a chance to audition for American Idol. Create a function that accepts a pointer to the first list node, and returns number of nodes in that SList.

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
    length(value){
        var runner = this.head;
        var count = 0;
        while(runner.next) {
            runner = runner.next;
            count += 1;
        }
        return count;
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
console.log("This is the length " + second_SLL.length(8))
first_SLL.add_back('Jill').add_back('Jake').add_back('Jack').add_back('Tad').add_back('Becky');
console.log(first_SLL.contains('Tad'));
console.log(first_SLL);
console.log("This is the length " + first_SLL.length('Bill'));