import { expect, it } from "vitest"
import { generateLinkList, getLinkListSize, linkListToArray, ListNode } from "../../utils/linked-list.utils"



it.only("remove nth node from the end and return the head of singly linkedlist", () => {
    const list = generateLinkList([1, 2, 3, 4, 5])
    const l = removeNthNodeFromEnd(list, 2)

    expect(linkListToArray(l)).toEqual([1, 2, 3, 5])
})

it.only("should return empty list when list is 1 and remove index is 1", () => {
    const list = generateLinkList([1])
    const l = removeNthNodeFromEnd(list, 1)

    expect(linkListToArray(l)).toEqual([])
})
it.only("should return empty list if list is empty ", () => {
    const list = generateLinkList([])
    const l = removeNthNodeFromEnd(list, 1)

    expect(linkListToArray(l)).toEqual([])
})

it.only("should remove first node when list size and remove index is equal", () => {
    const list = generateLinkList([1, 2, 3, 4, 5, 6, 7])
    const l = removeNthNodeFromEnd(list, 7)

    expect(linkListToArray(l)).toEqual([2, 3, 4, 5, 6, 7])
})

it.only("should not remove anything when remove index is negative or greater than list size", () => {
    const list = generateLinkList([1, 2, 3, 4, 5, 6, 7])
    const l = removeNthNodeFromEnd(list, 10)

    expect(linkListToArray(l)).toEqual([1, 2, 3, 4, 5, 6, 7])

    const l2 = removeNthNodeFromEnd(list, -2)

    expect(linkListToArray(l2)).toEqual([1, 2, 3, 4, 5, 6, 7])
})



function removeNthNodeFromEnd(head: ListNode, idxFromEnd: number) {
    if(!head) return head

    const size = getLinkListSize(head)

    if (idxFromEnd == size) {
        return head.next
    }

    if (idxFromEnd < 0 || idxFromEnd > size) return head


    let idxToReplace = (size - idxFromEnd)
    let l = head

    for (let i = 1; i <= idxToReplace; i++) {
        if (!l.next) continue

        if (i == idxToReplace) {
            l.next = l.next.next
        } else {
            l = l.next
        }
    }

    return head
}