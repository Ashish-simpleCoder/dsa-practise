import { expect, it } from "vitest"
import { BinarySearchTree } from "./index.test"

it("should traverse binary-search-tree in post-order-traverse", () => {
    const bst = new BinarySearchTree()

    bst.insert(10)
    bst.insert(20)
    bst.insert(2)
    bst.insert(1)
    bst.insert(30)
    bst.insert(3)
    bst.insert(56)
    bst.insert(600)
    bst.insert(6)
    bst.insert(40)
    bst.insert(70)



    // Traverse the left subtree, i.e., call Postorder(left->subtree) 
    //  Traverse the right subtree, i.e., call Postorder(right->subtree) 
    //  Visit the root 

    const result = bst.postOrderTraverse()
    // console.log(result)
    expect(result).toStrictEqual([1, 6, 3, 2, 40, 70, 600, 56, 30, 20, 10])
})

// https://www.cs.usfca.edu/~galles/visualization/BST.html