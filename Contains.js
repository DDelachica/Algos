// Contains
// Sam thinks Tad might be somewhere in a very long line waiting to attend the Superman movie. Given a ListNode pointer and a val, return whether val is found in any node in the list.
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
}
var first_SLL = new SLL('Bill');
first_SLL.add_back('Jill').add_back('Jake').add_back('Jack').add_back('Tad').add_back('Becky');
console.log(first_SLL.contains('Tad'));
console.log(first_SLL);