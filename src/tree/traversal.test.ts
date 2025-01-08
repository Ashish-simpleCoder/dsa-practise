import { describe, expect, it } from "vitest";
import { Tree } from "./index.test";

describe("dfs search", () => {

    it("should in-order-traverse", () => {
        const tree = new Tree()

        tree.add(10)
        tree.add(20)
        tree.add(30)
        tree.add(40)
        tree.add(50)

        const result = tree.inorderTravese()

        expect(result).toEqual([40, 20, 50, 10, 30])
    })
})