// SList: Second to Last Value
// Create a standalone function that, given a pointer to the first node in a singly linked list, will return the second-to-last value in that list. What will you return if the list is not long enough?



// SList: Delete Given Node
// Create ListNode method removeSelf() to disconnect (remove) itself from linked lists that include it. Note: the node might be the first in a list (it won’t be the last), and you do NOT have a pointer to the previous node. Also, don’t lose any subsequent nodes pointed to by .next.



// SList: Copy
// Given a pointer to a singly linked list, return a copy of that list. Do not return the same list, but instead make a copy of each node in the list and connect them in the same order as the original.



// SList: Filter
// Given a headNode, a lowVal and a highVal, remove from the list any nodes that have values less than lowVal or higher than highVal. Return the new list.

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
    length(){
        var runner = this.head;
        var count = 1;
        while(runner.next) {
            runner = runner.next;
            count += 1;
        }
        return count;
    }
    secondToLast(){
        var runner = this.head;
        while(runner.next.next){
            runner = runner.next;
            console.log("This is the runner " + runner.value)
        }
        return runner.value;
    }
    removeSelf(value){
        var runner = this.head;
        while(runner){
            var next = runner.next;      
            if(next.value == value){
                runner.next = runner.next.next;
                break;
            }
            runner = runner.next;
        }
        return runner;
    }
    display(){
        var runner = this.head;
        var count = 0;
        while(runner){
            count ++;
            console.log(`This is current Node ${count}, containing value ${runner.value}, next is ${runner.next}`);
            runner = runner.next;
        }
        return this
    }
    copy(value){
        var runner = this.head;
        while(runner){
            var next = runner.next       
            if(next.value == value){
                var new_list = runner.next;
                break;
            }
            runner = runner.next;
        }
        return new_list;
    }
    // filter(lowVal, highVal){  //work in progress
    //     var runner = this.head;
    //     while(runner.next){
    //         console.log(runner);
    //         if(runner.value < lowVal || runner.value > highVal){
    //             console.log("This should be removed: " + runner.value);
    //             runner = new_SLL.removeSelf(runner);
    //         } 
    //     runner = runner.next;   
    //     }
    //     return runner;
    // }
}
var new_SLL = new SLL(1);
new_SLL.add_front(2).add_front(6).add_front(5).add_front(4).add_front(10).add_front(3).add_front(8).add_front(5).add_front(12);
new_SLL.secondToLast();
console.log(new_SLL.length());
console.log("This is second to last: " + new_SLL.secondToLast());
new_SLL.removeSelf(3);
console.log("This is after removeSelf(3): ");
new_SLL.display();
console.log("This is a copy of given node in list: " + new_SLL.copy(5));
// new_SLL.filter(5,8);
// console.log("this is after filter(5,8): ");
// new_SLL.display();