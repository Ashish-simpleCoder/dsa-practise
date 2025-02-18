import { describe, expect, it } from "vitest";
import { BT, Node } from "./index.test";


// Level Order Traversal
describe("bfs traversal", () => {

    const tree = new BT()
    expect(tree.getHeight()).toBe(0)
    expect(tree.bfsTraversal()).toEqual([])

    tree.add(10)
    expect(tree.getHeight()).toBe(1)
    expect(tree.bfsTraversal()).toEqual([10])

    tree.add(20)
    expect(tree.getHeight()).toBe(2)
    expect(tree.bfsTraversal()).toEqual([10, 20])

    tree.add(30)
    expect(tree.getHeight()).toBe(2)
    expect(tree.bfsTraversal()).toEqual([10, 20, 30])

    tree.add(40)
    expect(tree.getHeight()).toBe(3)
    expect(tree.bfsTraversal()).toEqual([10, 20, 30, 40])

    tree.add(50)
    expect(tree.getHeight()).toBe(3)
    expect(tree.bfsTraversal()).toEqual([10, 20, 30, 40, 50])

    tree.add(60)
    expect(tree.getHeight()).toBe(3)
    expect(tree.bfsTraversal()).toEqual([10, 20, 30, 40, 50, 60])

    tree.add(70)
    expect(tree.getHeight()).toBe(3)
    expect(tree.bfsTraversal()).toEqual([10, 20, 30, 40, 50, 60, 70])

    tree.add(80)
    expect(tree.getHeight()).toBe(4)
    expect(tree.bfsTraversal()).toEqual([10, 20, 30, 40, 50, 60, 70, 80])

    tree.add(90)
    expect(tree.getHeight()).toBe(4)
    expect(tree.bfsTraversal()).toEqual([10, 20, 30, 40, 50, 60, 70, 80, 90])

    tree.add(100)
    expect(tree.getHeight()).toBe(4)
    expect(tree.bfsTraversal()).toEqual([10, 20, 30, 40, 50, 60, 70, 80, 90, 100])


    it("traverse with bfsTraversal fn", () => {
        expect(tree.bfsTraversal()).toEqual([10, 20, 30, 40, 50, 60, 70, 80, 90, 100])
    })

    it("traverse with queue approach", () => {
        expect(tree.queueApproach()).toEqual([10, 20, 30, 40, 50, 60, 70, 80, 90, 100])
    })

    it("traverse with height and recursion approach", () => {
        expect(tree.naiveApproach()).toEqual([10, 20, 30, 40, 50, 60, 70, 80, 90, 100])
    })

    it("should traverse left-skewed tree", () => {
        const t = new BT()
        t.root = new Node(1)
        t.root.left = new Node(2)
        t.root.left.left = new Node(3)

        expect(t.bfsTraversal()).toEqual([1, 2, 3])
    })

    it("should traverse right-skewed tree", () => {
        const t = new BT()
        t.root = new Node(1)
        t.root.right = new Node(2)
        t.root.right.right = new Node(3)

        expect(t.bfsTraversal()).toEqual([1, 2, 3])
    })

    it("should traverse tree with varying depth", () => {
        const t = new BT()
        t.root = new Node(1)
        t.root.left = new Node(2)
        t.root.right = new Node(3)
        t.root.right.right = new Node(4)
        t.root.right.right.left = new Node(5)

        expect(t.bfsTraversal()).toEqual([1, 2, 3, 4, 5])
    })

    it("should traverse tree with duplicate values", () => {
        const t = new BT()
        t.root = new Node(1)
        t.root.left = new Node(2)
        t.root.right = new Node(3)
        t.root.right.right = new Node(2)
        t.root.right.right.left = new Node(2)

        expect(t.bfsTraversal()).toEqual([1, 2, 3, 2, 2])
    })
})

describe("dfs search", () => {

    const tree = new BT()
    expect(tree.inOrderTraverse()).toEqual([])
    expect(tree.preOrderTraverse()).toEqual([])
    expect(tree.postOrderTraverse()).toEqual([])


    tree.addNodeFpl(1)
    expect(tree.inOrderTraverse()).toEqual([1])
    expect(tree.preOrderTraverse()).toEqual([1])
    expect(tree.postOrderTraverse()).toEqual([1])

    tree.addNodeFpl(2)
    expect(tree.inOrderTraverse()).toEqual([2, 1])
    expect(tree.preOrderTraverse()).toEqual([1, 2])
    expect(tree.postOrderTraverse()).toEqual([2, 1])

    tree.addNodeFpl(3)
    expect(tree.inOrderTraverse()).toEqual([2, 1, 3])
    expect(tree.preOrderTraverse()).toEqual([1, 2, 3])
    expect(tree.postOrderTraverse()).toEqual([2, 3, 1])

    tree.addNodeFpl(4)
    expect(tree.inOrderTraverse()).toEqual([4, 2, 1, 3])
    expect(tree.preOrderTraverse()).toEqual([1, 2, 4, 3])
    expect(tree.postOrderTraverse()).toEqual([4, 2, 3, 1])

    tree.addNodeFpl(5)
    expect(tree.inOrderTraverse()).toEqual([4, 2, 5, 1, 3])
    expect(tree.preOrderTraverse()).toEqual([1, 2, 4, 5, 3])
    expect(tree.postOrderTraverse()).toEqual([4, 5, 2, 3, 1])

    tree.addNodeFpl(6)


    it("should in-order-traverse", () => {
        // left -> root -> right 
        expect(tree.inOrderTraverse()).toEqual([4, 2, 5, 1, 6, 3])
    })

    it("should pre-order-traverse", () => {
        // root -> left -> right 
        expect(tree.preOrderTraverse()).toEqual([1, 2, 4, 5, 3, 6])
    })

    it("should post-order-traverse", () => {
        // left -> right -> root
        expect(tree.postOrderTraverse()).toEqual([4, 5, 2, 6, 3, 1])
    })

    it("should traverse left-skewed tree", () => {
        const t = new BT()
        t.root = new Node(1)
        t.root.left = new Node(2)
        t.root.left.left = new Node(3)
        t.root.left.left.left = new Node(4)
        t.root.left.left.left.left = new Node(5)

        expect(t.inOrderTraverse()).toEqual([5, 4, 3, 2, 1])
        expect(t.preOrderTraverse()).toEqual([1, 2, 3, 4, 5])
        expect(t.postOrderTraverse()).toEqual([5, 4, 3, 2, 1])
    })

    it("should traverse right-skewed tree", () => {
        const t = new BT()
        t.root = new Node(1)
        t.root.right = new Node(2)
        t.root.right.right = new Node(3)
        t.root.right.right.right = new Node(4)
        t.root.right.right.right.right = new Node(5)

        expect(t.inOrderTraverse()).toEqual([1, 2, 3, 4, 5])
        expect(t.preOrderTraverse()).toEqual([1, 2, 3, 4, 5])
        expect(t.postOrderTraverse()).toEqual([5, 4, 3, 2, 1])
    })

    it("should traverse tree with varying depth", () => {
        const t = new BT()
        t.root = new Node(1)

        t.root.left = new Node(2)
        t.root.left.right = new Node(3)
        t.root.right = new Node(4)
        t.root.right.right = new Node(5)

        expect(t.inOrderTraverse()).toEqual([2, 3, 1, 4, 5])
        expect(t.preOrderTraverse()).toEqual([1, 2, 3, 4, 5])
        expect(t.postOrderTraverse()).toEqual([3, 2, 5, 4, 1])
    })

    it("should traverse tree with duplicate values", () => {
        const t = new BT([1, 1, 1, 1, 1])

        expect(t.inOrderTraverse()).toEqual([1, 1, 1, 1, 1])
        expect(t.preOrderTraverse()).toEqual([1, 1, 1, 1, 1])
        expect(t.postOrderTraverse()).toEqual([1, 1, 1, 1, 1])
    })
})
