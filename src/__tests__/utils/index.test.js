import {sum}  from '../../utils/index.js';

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});


// xdescribe - skip suit 
describe("test sum fuction", () =>{
    it("test 1 5 + 5 = 10", () => {
        const res = sum(5,5)
        expect(res).toBe(10)
    }),
    it("test 2 15 + 15 = 30", () => {
        const res = sum(15,15)
        expect(res).toBe(30)
    })
})