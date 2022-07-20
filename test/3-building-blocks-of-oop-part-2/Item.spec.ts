import { Item } from "../../src/3-building-blocks-of-oop-part-2/Item";

class TestItem extends Item {
    public use() {}
}

describe('Item', () => {
    it('should set ids and numberOfItems and reset', () => {
        const a = new TestItem('A', 100, 100);
        const b = new TestItem('B', 200, 200);
        const c = new TestItem('C', 300, 300);

        expect(a.getId()).toBe(0);
        expect(b.getId()).toBe(1);
        expect(c.getId()).toBe(2);
        expect(Item.numberOfItems).toBe(3);

        Item.reset();

        const d = new TestItem('D', 400, 400);

        expect(d.getId()).toBe(0);
        expect(Item.numberOfItems).toBe(4);
    })
})