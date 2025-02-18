import { describe, expect, it } from "vitest";
import { BT } from "./index.test";

describe("dfs search", () => {

    const tree = new BT()
    expect(tree.getHeight()).toBe(0)

    tree.add(10)
    expect(tree.getHeight()).toBe(1)

    tree.add(20)
    expect(tree.getHeight()).toBe(2)

    tree.add(30)
    expect(tree.getHeight()).toBe(2)

    tree.add(40)
    expect(tree.getHeight()).toBe(3)

    tree.add(50)
    expect(tree.getHeight()).toBe(3)



    it("should in-order-traverse", () => {
        // left -> root -> right 
        const result = tree.inOrderTraverse()
        expect(result).toEqual([40, 20, 50, 10, 30])
    })

    it("should pre-order-traverse", () => {
        // root -> left -> right 
        const result = tree.preOrderTraverse()
        expect(result).toEqual([10, 20, 40, 50, 30])
    })

    it("should post-order-traverse", () => {
        // left -> right -> root
        const result = tree.postOrderTraverse()
        expect(result).toEqual([40, 50, 20, 30, 10])
    })
})

// Level Order Traversal
describe("bfs search", () => {

    const tree = new BT()
    expect(tree.getHeight()).toBe(0)

    tree.add(10)
    expect(tree.getHeight()).toBe(1)


    tree.add(20)
    expect(tree.getHeight()).toBe(2)

    tree.add(30)
    expect(tree.getHeight()).toBe(2)

    tree.add(40)
    expect(tree.getHeight()).toBe(3)

    tree.add(50)
    expect(tree.getHeight()).toBe(3)

    tree.add(60)
    expect(tree.getHeight()).toBe(3)

    tree.add(70)
    expect(tree.getHeight()).toBe(3)

    tree.add(80)
    expect(tree.getHeight()).toBe(4)

    tree.add(90)
    expect(tree.getHeight()).toBe(4)

    tree.add(100)
    expect(tree.getHeight()).toBe(4)


    it("traverse with bfsTraversal fn", () => {
        expect(tree.bfsTraversal()).toEqual([10, 20, 30, 40, 50, 60, 70, 80, 90, 100])
    })

    it("traverse with queue approach", () => {
        expect(tree.queueApproach()).toEqual([10, 20, 30, 40, 50, 60, 70, 80, 90, 100])
    })

    it("traverse with height and recursion approach", () => {
        expect(tree.naiveApproach()).toEqual([10, 20, 30, 40, 50, 60, 70, 80, 90, 100])
    })
})