import { expect, it } from "vitest"
import { BinarySearchTree } from "./index.test"

it("should traverse binary-search-tree in in-order-traverse", () => {
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


    const result = bst.inOrderTraverse()
    // console.log(result)

    expect(result).toStrictEqual([1, 2, 3, 6, 10, 20, 30, 40, 56, 70, 600])
})