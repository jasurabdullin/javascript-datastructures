function Node(data){
    this.data = data
    this.next = null //this represents the pointer
}

// Singly Linked List

//Difference between Singly Linked List and Doubly Link List
    // Singly List flows in one direction: pointers to the node in front with no pointers to go back
    // Doubly Linked List has a head and tail

function LinkedList(){
    this.length = 0
    this.head = null
}

LinkedList.prototype.add = function(value){
    // validation checking for passing in of a value
    if(!value){throw new Error ('Pass in a value')}
    
    //create node
    let node = new Node(value)
    // if there is no head, set node to head of list
    if(!this.head){
        this.head = node
        this.length += 1
        return node
    }
    //if there is a head
    let current = this.head
    while(current.next){
        current = current.next
    }
    current.next = node
    this.length += 1
    return node 
}

let singlyLinkedList = new LinkedList()
singlyLinkedList.add(10)
singlyLinkedList.add(11)
console.log(singlyLinkedList)
