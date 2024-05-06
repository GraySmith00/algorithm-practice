class Node:
    def __init__(self, value):
        self.value = value
        self.next = None
        self.prev = None


class DoublyLinkedList:
    def __init__(self, value):
        new_node = Node(value)
        self.head = new_node
        self.tail = new_node
        self.length = 1

    def print_list(self):
        temp = self.head
        while temp is not None:
            print(temp.value)
            temp = temp.next

    def append(self, value):
        new_node = Node(value)
        if self.length == 0:
            self.head = new_node
            self.tail = new_node
        else:
            self.tail.next = new_node
            new_node.prev = self.tail
            self.tail = new_node
        self.length += 1
        return True
    
    def pop(self):
        if self.length == 0:
            return None
        prevTail = self.tail
        if self.length == 1:
            self.head = None
            self.tail = None
        else:
            self.tail = prevTail.prev
            self.tail.next = None
            prevTail.prev = None
            self.length -= 1
        return prevTail 
    
    def prepend(self, value):
        new_node = Node(value)
        if self.length == 0:
            self.head = new_node
            self.tail = new_node
        else:
            new_node.next = self.head
            self.head.prev = new_node
            self.head = new_node
        self.length += 1
        return True
    
    def unshift(self):
        if self.length == 0:
            return None
        prevHead = self.head
        if self.length == 1:
            self.head = None
            self.tail = None
        else:
            self.head = prevHead.next
            self.head.prev = None
            prevHead.next = None
        self.length -= 1
        return prevHead
    

ll = DoublyLinkedList(1)
ll.append(2)
ll.unshift()
ll.unshift()
ll.unshift()
ll.print_list()