import { describe, expect, it } from "vitest";
import { Tree } from "./index.test";

describe("dfs search", () => {

    const tree = new Tree()

    tree.add(10)
    tree.add(20)
    tree.add(30)
    tree.add(40)
    tree.add(50)


    it("should in-order-traverse", () => {
        // left -> root -> right 
        const result = tree.inorderTravese()
        expect(result).toEqual([40, 20, 50, 10, 30])
    })

    it("should pre-order-traverse", () => {
        // root -> left -> right 
        const result = tree.preOrderTraverse()
        expect(result).toEqual([10,20,40,50,30])
    })

    it("should post-order-traverse", () => {
        // left -> right -> root
        const result = tree.postOrderTraverse()
        expect(result).toEqual([40,50,20,30,10])
    })
})

// Level Order Traversal
describe("bfs search", () =>{

    const tree = new Tree()
    tree.add(10)
    
    tree.add(20)
    tree.add(30)
    tree.add(40)

    it("dfs search",()=>{
        console.log(tree.getHeightUsingRecursion())
    })
})