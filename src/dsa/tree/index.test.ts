import { expect, it } from "vitest"

it("should create binary-tree with <add> method", () => {
    const tree = new Tree()

    tree.add(10)
    tree.add(20)
    tree.add(30)

    tree.add(40)
    tree.add(50)

    tree.add(60)
    tree.add(70)


    const root = tree.root!
    expect(root.data).toBe(10)
    expect(root.left!.data).toBe(20)
    expect(root.right!.data).toBe(30)

    expect(root.left!.left!.data).toBe(40)
    expect(root.left!.right!.data).toBe(50)

    expect(root.right!.left!.data).toBe(60)
    expect(root.right!.right!.data).toBe(70)


    // height
    expect(tree.getHeightUsingRecursion()).toBe(3)
    expect(tree.getHeightUsingLevelOrderTraversal()).toBe(3)
})


export class Node {
    data: number
    left: Node | null = null
    right: Node | null = null

    constructor(data) {
        this.data = data
    }
}

export class Tree {
    root: null | Node = null
    constrcutor() {

    }

    // depth first search-----------------------------------------------
    // inorder traversal
    // left -> root -> right
    inorderTravese() {
        const result: number[] = []

        traverse(this.root)

        function traverse(node: Node | null) {
            if (!node) return
            traverse(node.left)
            result.push(node.data)
            traverse(node.right)
        }

        return result
    }


    // root -> left -> right 
    preOrderTraverse() {
        const result: number[] = []

        traverse(this.root)

        function traverse(node: Node | null) {
            if (!node) return
            result.push(node.data)
            traverse(node.left)
            traverse(node.right)
        }
        return result
    }

    // left -> right -> root
    postOrderTraverse() {
        const result: number[] = []

        traverse(this.root)

        function traverse(node: Node | null) {
            if (!node) return null
            traverse(node.left)
            traverse(node.right)
            result.push(node.data)
        }

        return result
    }
    // depth first search-----------------------------------------------end

    // breadth first search---------------------------------------------

    naiveApproach() {
        // get the tree height  
        // and iterate over all nodes with same level of height  
        const result: number[] = []
        const treeHeight = this.getHeightUsingRecursion()

        for (let i = 1; i <= treeHeight; i++) {
            getLevelNode(this.root, i)
        }


        function getLevelNode(node: Node | null, level: number) {
            if (!node) return
            // means we have reached to current iterating level
            if (level == 1) {
                result.push(node.data)
            } else if (level > 1) {
                getLevelNode(node.left, level - 1)
                getLevelNode(node.right, level - 1)
            }
        }

        return result
    }

    // enqueue and dequeue
    queueApproach() {


        const queue: Node[] = []
        const result: number[] = []

        if (!this.root) {
            return
        }

        queue.push(this.root)

        while (queue.length > 0) {
            const currentNode = queue.shift()

            if (!currentNode) return

            result.push(currentNode.data)

            if (currentNode.left) {
                queue.push(currentNode.left)
            }
            if (currentNode.right) {
                queue.push(currentNode.right)
            }
        }

        return result
    }

    // breadth first search---------------------------------------------end




    // depth-first traversal
    // O -> n
    // o -> h
    // visit each node and get it's height 
    getHeightUsingRecursion() {
        let height = 0

        if (!this.root) {
            return height
        }

        function getHeight(node: Node | null) {
            if (!node) return 0
            return Math.max(getHeight(node.left), getHeight(node.right)) + 1
        }

        return Math.max(getHeight(this.root), height)
    }

    // level-order traversal (breadth first search)
    // O -> n
    // o -> n
    getHeightUsingLevelOrderTraversal() {
        let height = 0

        if (!this.root) {
            return height
        }
        const queue: (Node | null)[] = [this.root]
        queue.push(null)

        while (queue.length > 0) {
            const removed_node = queue.shift()

            if (removed_node === null) {
                height++

                if (queue.length > 0) {
                    queue.push(null)
                }
            } else {
                if (removed_node?.left) queue.push(removed_node.left)
                if (removed_node?.right) queue.push(removed_node.right)
            }
        }
        return height
    }


    // The idea is to do an iterative level order traversal of the given tree using queue. 
    // If we find a node whose left child is empty, 
    // we make a new key as the left child of the node. 
    // Else if we find a node whose right child is empty, 
    // we make the new key as the right child. 
    // We keep traversing the tree until 
    // we find a node whose either left or right child is empty 
    add(data) {
        const newNode = new Node(data)

        if (this.root == null) {
            this.root = newNode
        } else {
            addNode(this.root, newNode)
        }

        function addNode(parentNode: Node, newNode: Node) {
            const root = parentNode

            let queue: Node[] = [];
            queue.push(root);

            while (queue.length > 0) {

                let curr = queue.shift();
                if (!curr) return

                // First check left if left is null 
                // insert node in left otherwise check for right
                if (curr.left !== null)
                    queue.push(curr.left);
                else {
                    curr.left = newNode;
                    break;
                }

                if (curr.right !== null)
                    queue.push(curr.right);
                else {
                    curr.right = newNode;
                    break;
                }
            }
        }
    }



}
