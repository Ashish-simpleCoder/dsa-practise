import { describe, expect, it } from "vitest";
import { BT, Node } from "./index.test";

// full, complete or perfect
describe("binary type check", () => {


    // Full binary tree
    // A binary tree in which every node other than the leaves has two children. 
    // All levels are fully filled except possibly for the last level.
    // total nodes = internal node count + leaves nodes count
    // leaves nodes = internal node count + 1
    it("should return true if full binary tree otherwise false", () => {
        const t = new BT([1,2,3])
        expect(t.isFullBinaryTree()).toBe(true)

        const t2 = new BT([1])
        expect(t2.isFullBinaryTree()).toBe(true)
        
        const t3 = new BT([1,2])
        expect(t3.isFullBinaryTree()).toBe(false)


        const t4 = new BT()
        t4.root = new Node(1)
        t4.root.left = new Node(2)
        t4.root.right = new Node(3)

        t4.root.left.left = new Node(4)
        t4.root.left.right = new Node(5)
        t4.root.left.left.left = new Node(6)
        t4.root.left.left.right = new Node(7)
        expect(t4.isFullBinaryTree()).toBe(true)


        const t5 = new BT()
        t5.root = new Node(1)
        t5.root.left = new Node(2)
        t5.root.right = new Node(3)

        t5.root.left.left = new Node(4)
        t5.root.right.right = new Node(5)
        expect(t5.isFullBinaryTree()).toBe(false)
    })

    // Complete binary tree
    // A binary tree in which all levels are fully filled except possibly for the last level, 
    // which is filled from left to right.
})