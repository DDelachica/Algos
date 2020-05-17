// Add Front
// Rudy isn’t nice: he cuts in line in front of everyone else. Given a pointer to the first ListNode and a value, create a new node, assign it to the list head, and return a pointer to the new head node.
class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}
nodeOne = new Node(7);
nodeTwo = new Node(20);
class SLL{
    constructor(value){
        this.head = new Node(value)
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
}

first_SLL = new SLL(8);
first_SLL.add_front(5);
first_SLL.add_front(4);
first_SLL.add_front(2);
first_SLL.remove_front();
first_SLL.display();
console.log(first_SLL);
// Remove Front
// Ha! Rudy is getting what he deserves – kicked out of line. Given a pointer to the first node in a list, remove the head node and return the new list head node. If the list is empty, return null.



// Front
// Finally, Tad and Sam reach the front of the line to get movie tickets. Oh no – only one seat remains! Who was earlier in line: Tad or Sam? Return the value (not the node) at the head of the list. If the list is empty, return null.