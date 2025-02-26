import { describe, expect, it } from 'vitest'

describe("Node creation", () => {
    it("should create empty node without any passing any params in constructor", () => {
        const node = new ListNode()
        expect(node.data).toBe(null)
        expect(node.next).toBe(null)
    })

    it("should create a node when data and next are passed in constructor", () => {
        const node = new ListNode(1, new ListNode(2))
        expect(node.data).toBe(1)
        expect(node.next).toStrictEqual(new ListNode(2))
    })

    it("should create a node without data and with next passed in constructor", () => {
        const node = new ListNode(null, new ListNode(2))
        expect(node.data).toBe(null)
        expect(node.next).toStrictEqual(new ListNode(2))
    })
})

describe("Singly Linked List creation", () => {
    it("should create list with null head and size as 0 with constructor", () => {
        const list = new SignlyLinkedList()

        expect(list.head).toBe(null)
        expect(list.size).toBe(0)
    })

    it("Should add node as head when head is null via <insertAtLast> method", () => {
        const list = new SignlyLinkedList()
        list.insertAtLast(1)

        expect(list.head).toStrictEqual(new ListNode(1))
        expect(list.head!.data).toBe(1)
        expect(list.head!.next).toBe(null)
        expect(list.size).toBe(1)
    })

    it("Should add node as head when head is null via <insertAtStart> method", () => {
        const list = new SignlyLinkedList()
        list.insertAtStart(1)

        expect(list.head).toStrictEqual(new ListNode(1))
        expect(list.head!.data).toBe(1)
        expect(list.head!.next).toBe(null)
        expect(list.size).toBe(1)
    })

    it("Should not add node when head is null via <insertAt>", () => {
        const list = new SignlyLinkedList()
        list.insertAt(1, "some data")

        expect(list.head).toBe(null)
        expect(list.size).toBe(0)
    })
})

describe("<insertAtLast> method", () => {
    it("should always insert new node at the end of list with null head with given data", () => {
        const list = new SignlyLinkedList()

        list.insertAtLast(1)
        list.insertAtLast('ashish')
        list.insertAtLast(2)

        expect(list.size).toBe(3)
        expect(list.head!.data).toBe(1)
        expect(list.head!.next!.data).toBe('ashish')
        expect(list.head!.next!.next!.data).toBe(2)
        expect(list.head!.next!.next!.next).toBe(null)
    })

    it("should insert new node at the end of the list with head with given data", () => {
        const list = new SignlyLinkedList()
        list.head = new ListNode(1)
        list.insertAtLast(2)

        expect(list.head!.data).toBe(1)
        expect(list.head!.next).toStrictEqual(new ListNode(2))
    })
})

describe("<insertAtStart> method", () => {
    it("should always insert new node at the start of list when head is null with given data", () => {
        const list = new SignlyLinkedList()

        list.insertAtStart(1)
        list.insertAtStart(2)
        list.insertAtStart(3)

        expect(list.size).toBe(3)
        expect(list.head!.data).toBe(3)
        expect(list.head!.next!.data).toBe(2)
        expect(list.head!.next!.next!.data).toBe(1)
        expect(list.head!.next!.next!.next).toBe(null)
    })

    it("should insert new node at the start of the list with head with given data", () => {
        const list = new SignlyLinkedList()
        list.head = new ListNode(1)
        list.insertAtStart(2)

        expect(list.head!.data).toBe(2)
        expect(list.head!.next).toStrictEqual(new ListNode(1))
    })
})

describe("<insertAt> method", () => {
    it("should insert new node at given index with given data when head is not null", () => {
        const list = new SignlyLinkedList()
        list.head = new ListNode("a")
        list.head.next = new ListNode("b")

        list.insertAt(2, 'c')

        expect(list.head!.data).toBe('a')
        expect(list.head!.next.data).toBe('c')
        expect(list.head!.next!.next!.data).toBe('b')

        list.insertAt(3, "dev")
        expect(list.head!.data).toBe('a')
        expect(list.head!.next.data).toBe('c')
        expect(list.head!.next!.next!.data).toBe('dev')
        expect(list.head!.next!.next!.next!.data).toBe('b')
    })

    it("should not insert new node at given index which is larger then list length", () => {
        const list = new SignlyLinkedList()
        list.head = new ListNode("a")
        list.head.next = new ListNode("b")

        list.insertAt(3, 'c')

        expect(list.head!.data).toBe('a')
        expect(list.head!.next.data).toBe('b')
        expect(list.head!.next.next).toBeNull()
    })
})


type Head = ListNode | null

class ListNode {
    data: any = null
    next: Head = null

    constructor(data: typeof this.data = null, next: Head = null) {
        this.data = data
        this.next = next
    }
}

class SignlyLinkedList {
    head: Head = null
    size = 0

    constructor() {

    }

    getAllNodes() {
        if (!this.head) return []

        const result: any[] = []
        let currentHead: Head = this.head

        while (currentHead) {
            result.push(currentHead.data)
            currentHead = currentHead.next
        }
        return result
    }
    getSize() {
        return this.getAllNodes().length
    }

    incrementSize() {
        this.size++
    }
    decrementSize() {
        this.size--
    }

    insertAtLast(data: any) {
        if (!this.head) {
            this.head = new ListNode(data)
        } else {
            let currentHead = this.head
            while (currentHead.next) {
                currentHead = currentHead.next
            }
            currentHead.next = new ListNode(data)
        }
        this.incrementSize()
    }
    insertAtStart(data: any) {
        if (!this.head) {
            this.head = new ListNode(data)
        } else {
            const newNode = new ListNode(
                data, this.head
            )
            this.head = newNode
        }
        this.incrementSize()
    }
    insertAt(idx: number, data: any) {
        if (!this.head) return

        let currentIdx = 1
        const listSize = this.getSize()


        if (idx > listSize) return

        if (idx == 1) {
            let newList = new ListNode(data, this.head)
            this.head = newList
        } else {
            let currentHead: ListNode | null = this.head
            while (idx <= listSize) {
                if (idx == currentIdx + 1) {
                    if (currentHead) {
                        currentHead.next = new ListNode(data, currentHead.next)
                    }
                    // if inserted at last, then update the tail
                    break
                }
                if (currentHead) {
                    currentHead = currentHead.next
                }
                currentIdx++
            }
        }
        this.incrementSize()
    }

    deleteNthNode(nthNodeIdxToDelete: number) {
        if (!this.head) return
        let listSize = this.getSize()

        // out-of-bound index
        if (nthNodeIdxToDelete > listSize) return

        let currentIdx = 1
        let currentHead: ListNode | null = this.head

        if (nthNodeIdxToDelete == 1) {
            // if (listSize == 1) {
            //     this.head = null
            // } else {
            this.head = this.head.next
            // }
            return
        } else {
            while (currentIdx <= listSize) {
                // get next-node while iterating on current node
                if (nthNodeIdxToDelete == currentIdx + 1) {
                    if (currentHead && currentHead.next && currentHead.next.next) {
                        currentHead.next = currentHead.next.next
                    } else {
                        if (currentHead) {
                            currentHead.next = null
                        }
                    }
                    break
                }
                if (currentHead) {
                    currentHead = currentHead.next
                }
                currentIdx++
            }
        }
        this.decrementSize()
    }
    deleteFirstNode() {
        if (!this.head) return
        this.head = this.head.next
        this.decrementSize()
    }
    deleteLastNode() {
        if (!this.head) return
        if (this.getSize() == 1) {
            this.deleteFirstNode()
        } else {
            let currentHead: ListNode | null = this.head
            while (currentHead && currentHead.next && currentHead.next.next) {
                currentHead = currentHead.next
            }
            //  doing partial, because delete operator requires to property in ListNode type as optional
            delete (currentHead as Partial<ListNode>).next
        }
        this.decrementSize()
    }

    reverseList() {
        if (!this.head) return null

        let revList = new SignlyLinkedList()
        let currentHead: ListNode | null = this.head

        while (currentHead) {
            let newList = new SignlyLinkedList()
            newList.insertAtLast(currentHead.data)
            newList.head!.next = revList.head
            revList = newList

            currentHead = currentHead.next
        }

        return revList
    }

    mergeList(list: SignlyLinkedList, direction = "end"  /*end | start*/) {
        if ('head' in list === false) return

        if (!this.head) {
            this.head = list.head
            this.size = list.getSize()
            return
        }

        if (direction == "end") {
            let currentHead = this.head
            while (currentHead.next) {
                currentHead = currentHead.next
            }
            currentHead.next = list.head
        } else if (direction == "start") {
            let currentHead: ListNode | null = list.head
            while (currentHead && currentHead.next) {
                currentHead = currentHead.next
            }
            if (currentHead) {
                currentHead.next = this.head
            }
            this.head = list.head
        }
        this.size = this.getSize()
    }
}
