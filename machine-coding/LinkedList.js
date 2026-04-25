class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
        this.size = 0;
    }
    
    printList(){
        const result = [];
        if(this.size === 0) return null;
        let current = this.head;
        while (current) {
          result.push(current.value);
          current = current.next;
        }
        console.log(result);
    }
    
    insertAtStart(value){
        const node = new Node(value);
        node.next = this.head;
        this.head = node;
        this.size++;
    }
    
    insertAtEnd(value){
        const node = new Node(value);
        if(!this.head) this.head = node;
        else {
            let temp = this.head;
            while(temp.next !== null){
                temp = temp.next;
            }
            temp.next = node;
        }
        
        this.size++;
    }
}



const l1 = new LinkedList();
l1.insertAtStart(10);
l1.insertAtStart(20);
l1.insertAtStart(30);
l1.insertAtStart(40);
l1.insertAtStart(50);
l1.insertAtEnd(60);
l1.insertAtEnd(70);
l1.insertAtEnd(80);
l1.insertAtEnd(90);
l1.insertAtEnd(100);

l1.printList()

