import { expect, it } from "vitest"

it("should create binary-search-tree",()=>{
    const bst = new BinarySearchTree()

    bst.insert(10)
    bst.insert(20)
    bst.insert(2)
    bst.insert(1)
    bst.insert(30)
    bst.insert(3)
    bst.insert(56)


    // root level check
    const root = bst.root!
    expect(root.data).toBe(10)
    expect(root.left.data).toBe(2)
    expect(root.right.data).toBe(20)


    // then check for the all of the child nodes
    expect(root.left.left.data).toBe(1)
    expect(root.left.right.data).toBe(3)
    expect(root.right.right.data).toBe(30)
    expect(root.right.right.right.data).toBe(56)
})



export class Node {
    data
    left
    right

    constructor(data) {
        this.data = data
        this.left = null
        this.right = null
    }
}

export class BinarySearchTree {
    root: Node | null
    constructor() {
        this.root = null
    }

    inOrderTraverse(){
        let result = []
        traverse(this.root)

        function traverse(node){
            if(node != null){
                traverse(node.left)
                result.push(node.data)
                traverse(node.right)
            }
        }

        return result
    }



    insert(data) {

        // create new node
        const new_node = new Node(data)

        // if root is null then node will become the root itself

        if (this.root === null) {
            this.root = new_node
        } else {
            this.insertNode(this.root, new_node)
        }

    }

    insertNode(parent_node: Node, new_node: Node) {
        // if new_node data is less than the parent node 
        if (new_node.data < parent_node.data) {
            // if left is null then asign it to left
            if (parent_node.left === null) {
                parent_node.left = new_node
            } else {
                // if left is not null, then recur the same function
                this.insertNode(parent_node.left, new_node)
            }
        } else {
            if (parent_node.right === null) {
                parent_node.right = new_node
            } else {
                this.insertNode(parent_node.right, new_node)
            }
        }
    }


}

