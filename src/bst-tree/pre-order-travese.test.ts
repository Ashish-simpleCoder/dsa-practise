import { expect, it } from "vitest"
import { BinarySearchTree } from "./index.test"

it("should traverse binary-search-tree in pre-order-traverse", () => {
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


    // The root node of the subtree is visited first.
    // Then the left subtree  is traversed.
    // At last, the right subtree is traversed.

    const result = bst.preOrderTraverse()
    // console.log(result)

    expect(result).toStrictEqual([10, 2, 1, 3, 6, 20, 30, 56, 40, 600, 70])
})