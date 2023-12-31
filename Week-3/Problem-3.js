/*Viết chương trình thực hiện công việc sau:
Xây dựng danh sách liên kết với các khóa được cung cấp ban đầu là dãy a, 
sau đó thực hiện các thao tác trên danh sách bao gồm: 
thêm 1 phần tử vào đầu, vào cuối danh sách, hoặc vào trước, vào sau 1 phần tử nào đó trong danh sách, hoặc loại bỏ 1 phần tử nào đó trong danh sách*/

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    addLast(data) {
        let newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }

    addFirst(data) {
        let newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
    }

    addAfter(u, v) {
        let current = this.head;
        while (current) {
            if (current.data === v) {
                let newNode = new Node(u);
                newNode.next = current.next;
                current.next = newNode;
                if (newNode.next === null) {
                    this.tail = newNode;
                }
                return;
            }
            current = current.next;
        }
    }

    addBefore(u, v) {
        if (this.head.data === v) {
            this.addFirst(u);
            return;
        }
        let current = this.head;
        while (current.next) {
            if (current.next.data === v) {
                let newNode = new Node(u);
                newNode.next = current.next;
                current.next = newNode;
                return;
            }
            current = current.next;
        }
    }

    remove(data) {
        if (!this.head) {
            return;
        }
        if (this.head.data === data) {
            this.head = this.head.next;
            return;
        }
        let current = this.head;
        while (current.next) {
            if (current.next.data === data) {
                current.next = current.next.next;
                if (current.next === null) {
                    this.tail = current;
                }
                return;
            }
            current = current.next;
        }
    }

    reverse() {
        let prev = null;
        let current = this.head;
        let next = null;
        while (current) {
            next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }
        this.tail = this.head;
        this.head = prev;
    }

    printList() {
        let current = this.head;
        let result = '';
        while (current) {
            result += current.data + ' ';
            current = current.next;
        }
        console.log(result.trim());
    }
}


function solution(input) {
    let linkedList = new LinkedList();
    const lines = input.split("\n");
    const sequence = lines[1].split(" ").map(Number);
    for(let i = 0; i < sequence.length; i++){
        linkedList.addLast(sequence[i]);
    }
    for (let i = 2; i < lines.length - 1; i++) {
        const query = lines[i].split(" ");
        switch (query[0]){
            case "addlast":
                let a = Number(query[1]);
                linkedList.addLast(a)
                break;
            case "addfirst":
                let b = Number(query[1]);
                linkedList.addFirst(b)
                break;
            case "addafter":
                let c = Number(query[1]);
                let d = Number(query[2]);
                linkedList.addAfter(c, d);
                break;
            case "addBefore":
                let e = Number(query[1]);
                let f = Number(query[2]);
                linkedList.addBefore(e, f);
                break;
            case "remove":
                let g = Number(query[1]);
                linkedList.remove(g);
                break;
            case "reverse":
                linkedList.reverse();
                break;
            default:
                break;
        }
    }
    linkedList.printList();
}

const input = `5\n5 4 3 2 1\naddlast 9\naddfirst 8\naddafter 10 4\nremove 1\n#`;
solution(input);