export class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}
export function generateLinkList(arr: any[]) {
    const list = new ListNode(arr[0])

    let l = list
    for (let i = 1; i < arr.length; i++) {
        l.next = new ListNode(arr[i])
        l = l.next
    }

    return list
}

export function printLinkList(list: ListNode | null) {
    if (!list) return

    let l = list
    while (l.next) {
        console.log(l.val)
        l = l.next
    }
    console.log(l.val)
}

export function getLinkListSize(list: ListNode) {
    let c = !list ? 0 : 1
    let l = list
    while (l.next) {
        l = l.next
        c++
    }
    return c
}

export function linkListToArray(list: ListNode | null) {
    if(!list) return []
    let res: any[] = [list.val]

    let l = list

    while (l.next) {
        if (l.next) {
            l = l.next
            res.push(l.val)
        }
    }
    return res
}