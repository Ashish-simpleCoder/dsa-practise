import { expect, it } from "vitest"

it("should create binary-tree with <add> method", () => {
    const t1 = new BT()
    expect(t1.root).toBe(null)
    expect(t1.getHeight()).toBe(0)

    t1.add(10)
    expect(t1.root!.data).toBe(10)
    expect(t1.getHeight()).toBe(1)

    t1.add(20)
    expect(t1.root!.left!.data).toBe(20)
    expect(t1.getHeight()).toBe(2)

    t1.add(30)
    expect(t1.root!.right!.data).toBe(30)
    expect(t1.getHeight()).toBe(2)

    t1.add(40)
    expect(t1.root!.left!.left!.data).toBe(40)


    // height
    expect(t1.getHeightUsingRecursion()).toBe(3)
    expect(t1.getHeightUsingLevelOrderTraversal()).toBe(3)
    expect(t1.getHeight()).toBe(3)
})

it("should create binary-tree with <addNodeFpl> method, a functional programming approach", () => {
    const t1 = new BT()
    expect(t1.root).toBe(null)
    expect(t1.getHeight()).toBe(0)

    t1.addNodeFpl(10)
    expect(t1.root!.data).toBe(10)
    expect(t1.getHeight()).toBe(1)

    t1.addNodeFpl(20)
    expect(t1.root!.left!.data).toBe(20)
    expect(t1.getHeight()).toBe(2)

    t1.addNodeFpl(30)
    expect(t1.root!.right!.data).toBe(30)
    expect(t1.getHeight()).toBe(2)




    // second tree
    const tree = new BT()

    tree.addNodeFpl(10)
    tree.addNodeFpl(20)
    tree.addNodeFpl(30)

    tree.addNodeFpl(40)
    tree.addNodeFpl(50)

    tree.addNodeFpl(60)
    tree.addNodeFpl(70)


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
    expect(tree.getHeight()).toBe(3)
})

it("should build binary tree with constructor and bfsTraverse", () => {
    const t = new BT([])
    const res = t.bfsTraversal()
    expect(res).toEqual([])
    expect(t.getHeight()).toBe(0)

    //
    const t1 = new BT([1])
    const res1 = t1.bfsTraversal()
    expect(res1).toEqual([1])
    expect(t1.getHeight()).toBe(1)

    //
    const t2 = new BT([6, 5, 4, 3, 2, 1])
    const res2 = t2.bfsTraversal()
    expect(res2).toEqual([6, 5, 4, 3, 2, 1])
    expect(t2.getHeight()).toBe(3)
})


export class Node {
    data: number
    left: Node | null = null
    right: Node | null = null

    constructor(data: number) {
        this.data = data
    }
}
export class BT {
    root: Node | null = null


    constructor(arr: any[] = []) {
        this.buildTreeWithArray(arr)
    }

    buildTreeWithArray(arr: any[] = []) {
        while (arr.length > 0) {
            this.addNodeFpl(arr.shift())
        }
    }


    addNodeFpl(data, queue = [this.root], parentNode = queue.shift()) {
        if (this.root) {
            if (!parentNode) return

            if (parentNode.left) {
                queue.push(parentNode.left)
            } else {
                parentNode.left = new Node(data)
                return
            }

            if (parentNode.right) {
                queue.push(parentNode.right)
            } else {
                parentNode.right = new Node(data)
                return
            }

            this.addNodeFpl(data, queue, queue.shift())
        } else {
            this.root = new Node(data)
        }
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




    // bfs / level order  traversal----------------------------
    bfsTraversal(queue: (Node | null)[] = [this.root], node = queue.shift(), result: number[] = []) {
        if (this.root) {
            if (!node) return result

            result.push(node.data)

            if (node.left) {
                queue.push(node.left)
            }
            if (node.right) {
                queue.push(node.right)
            }

            return this.bfsTraversal(queue, queue.shift(), result)
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
    // bfs / level order  traversal----------------------------end







    // dfs         traversal-----------------------------------
    //in-order
    // left-root-right
    inOrderTraverse(queue = [this.root], result: number[] = []) {
        if (this.root) {
            const node = queue.shift()
            if (!node) return
            if (node.left) {
                queue.push(node.left)
                this.inOrderTraverse(queue, result)
            }
            result.push(node.data)

            if (node.right) {
                queue.push(node.right)
                this.inOrderTraverse(queue, result)
            }
        }
        return result
    }

    //pre-order
    // root-left-right
    preOrderTraverse(queue = [this.root], result: number[] = []) {
        if (this.root) {
            const node = queue.shift()
            if (!node) return
            result.push(node.data)

            if (node.left) {
                queue.push(node.left)
                this.preOrderTraverse(queue, result)
            }

            if (node.right) {
                queue.push(node.right)
                this.preOrderTraverse(queue, result)
            }
        }
        return result
    }

    //post-order
    // left-right-root
    postOrderTraverse(queue = [this.root], result: number[] = []) {
        if (this.root) {
            const node = queue.shift()
            if (!node) return

            if (node.left) {
                queue.push(node.left)
                this.postOrderTraverse(queue, result)
            }

            if (node.right) {
                queue.push(node.right)
                this.postOrderTraverse(queue, result)
            }

            result.push(node.data)
        }
        return result
    }
    // dfs         traversal-----------------------------------end



    // height

    getHeight(node = this.root, currentHeight = 0) {
        if (!node) return currentHeight
        return Math.max(this.getHeight(node.left, currentHeight + 1), this.getHeight(node.right, currentHeight + 1))
    }

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


    // types of binary tree
    isFullBinaryTree(node = this.root) {
        if (!node) return true

        if (!node.left && !node.right) {
            return true
        }

        if (node.left && node.right) {
            return this.isFullBinaryTree(node.left) && this.isFullBinaryTree(node.right)
        }

        return false
    }


}


// export class Node {
//     data: number
//     left: Node | null = null
//     right: Node | null = null

//     constructor(data: number) {
//         this.data = data
//     }
// }

// export class Tree {
//     root: null | Node = null
//     constrcutor() {

//     }

//     // depth first search-----------------------------------------------
//     // inorder traversal
//     // left -> root -> right
//     inorderTravese() {
//         const result: number[] = []

//         traverse(this.root)

//         function traverse(node: Node | null) {
//             if (!node) return
//             traverse(node.left)
//             result.push(node.data)
//             traverse(node.right)
//         }

//         return result
//     }


//     // root -> left -> right 
//     preOrderTraverse() {
//         const result: number[] = []

//         traverse(this.root)

//         function traverse(node: Node | null) {
//             if (!node) return
//             result.push(node.data)
//             traverse(node.left)
//             traverse(node.right)
//         }
//         return result
//     }

//     // left -> right -> root
//     postOrderTraverse() {
//         const result: number[] = []

//         traverse(this.root)

//         function traverse(node: Node | null) {
//             if (!node) return null
//             traverse(node.left)
//             traverse(node.right)
//             result.push(node.data)
//         }

//         return result
//     }
//     // depth first search-----------------------------------------------end

//     // breadth first search---------------------------------------------

// naiveApproach() {
//     // get the tree height
//     // and iterate over all nodes with same level of height
//     const result: number[] = []
//     const treeHeight = this.getHeightUsingRecursion()

//     for (let i = 1; i <= treeHeight; i++) {
//         getLevelNode(this.root, i)
//     }


//     function getLevelNode(node: Node | null, level: number) {
//         if (!node) return
//         // means we have reached to current iterating level
//         if (level == 1) {
//             result.push(node.data)
//         } else if (level > 1) {
//             getLevelNode(node.left, level - 1)
//             getLevelNode(node.right, level - 1)
//         }
//     }

//     return result
// }

// // enqueue and dequeue
// queueApproach() {


//     const queue: Node[] = []
//     const result: number[] = []

//     if (!this.root) {
//         return
//     }

//     queue.push(this.root)

//     while (queue.length > 0) {
//         const currentNode = queue.shift()

//         if (!currentNode) return

//         result.push(currentNode.data)

//         if (currentNode.left) {
//             queue.push(currentNode.left)
//         }
//         if (currentNode.right) {
//             queue.push(currentNode.right)
//         }
//     }

//     return result
// }

//     // breadth first search---------------------------------------------end




// // depth-first traversal
// // O -> n
// // o -> h
// // visit each node and get it's height
// getHeightUsingRecursion() {
//     let height = 0

//     if (!this.root) {
//         return height
//     }

//     function getHeight(node: Node | null) {
//         if (!node) return 0
//         return Math.max(getHeight(node.left), getHeight(node.right)) + 1
//     }

//     return Math.max(getHeight(this.root), height)
// }

//     getHeight(node = this.root, currentHeight = 0) {
//         if (!node) return currentHeight
//         return Math.max(this.getHeight(node.left, currentHeight + 1), this.getHeight(node.right, currentHeight + 1))
//     }


//     // level-order traversal (breadth first search)
//     // O -> n
//     // o -> n
//     getHeightUsingLevelOrderTraversal() {
//         let height = 0

//         if (!this.root) {
//             return height
//         }
//         const queue: (Node | null)[] = [this.root]
//         queue.push(null)

//         while (queue.length > 0) {
//             const removed_node = queue.shift()

//             if (removed_node === null) {
//                 height++

//                 if (queue.length > 0) {
//                     queue.push(null)
//                 }
//             } else {
//                 if (removed_node?.left) queue.push(removed_node.left)
//                 if (removed_node?.right) queue.push(removed_node.right)
//             }
//         }
//         return height
//     }


// // The idea is to do an iterative level order traversal of the given tree using queue.
// // If we find a node whose left child is empty,
// // we make a new key as the left child of the node.
// // Else if we find a node whose right child is empty,
// // we make the new key as the right child.
// // We keep traversing the tree until
// // we find a node whose either left or right child is empty
// add(data) {
//     const newNode = new Node(data)

//     if (this.root == null) {
//         this.root = newNode
//     } else {
//         addNode(this.root, newNode)
//     }

//     function addNode(parentNode: Node, newNode: Node) {
//         const root = parentNode

//         let queue: Node[] = [];
//         queue.push(root);

//         while (queue.length > 0) {

//             let curr = queue.shift();
//             if (!curr) return

//             // First check left if left is null
//             // insert node in left otherwise check for right
//             if (curr.left !== null)
//                 queue.push(curr.left);
//             else {
//                 curr.left = newNode;
//                 break;
//             }

//             if (curr.right !== null)
//                 queue.push(curr.right);
//             else {
//                 curr.right = newNode;
//                 break;
//             }
//         }
//     }
// }


//     addNodeFpl(newData, queue = [this.root], parentNode = queue.shift()) {
//         if (this.root) {
//             if (!parentNode) return

//             if (parentNode.left) {
//                 queue.push(parentNode.left)
//             } else {
//                 parentNode.left = new Node(newData)
//                 return
//             }

//             if (parentNode.right) {
//                 queue.push(parentNode.right)
//             } else {
//                 parentNode.right = new Node(newData)
//                 return
//             }

//             this.addNodeFpl(newData, queue, queue.shift())
//         } else {
//             this.root = new Node(newData)
//         }
//     }
//     // addNodeFpl(newData, queue = [this.root]) {
//     //     if (!this.root) {
//     //         this.root = new Node(newData)
//     //         return
//     //     }
//     //     if (queue.length == 0) return


//     //     const parentNode = queue.shift()
//     //     if (!parentNode) return


//     //     if (parentNode.left) {
//     //         queue.push(parentNode.left)
//     //     } else {
//     //         parentNode.left = new Node(newData)
//     //         return
//     //     }


//     //     if (parentNode.right) {
//     //         queue.push(parentNode.right)
//     //     } else {
//     //         parentNode.right = new Node(newData)
//     //         return
//     //     }


//     //     this.addNodeFpl(newData, queue)
//     // }


// }
