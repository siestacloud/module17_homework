import {defineType}  from '../../task_17-6-2/defineType.js';



describe("test for defineType fuction", () =>{
    const numberStr = 'Hello'
    const numberInt = "18"
    const numberBool = "true"
    const numberObj = {"test":"ok"}

    
    it("test 1 Should operate correctly with stinrg,int,bool and undefine type of number", () => {
        expect(defineType(numberStr)).toBe("Тип данных - строка ")
        expect(defineType(numberInt)).toBe("Тип данных - число ")
        expect(defineType(numberBool)).toBe("Тип данных - логический ")
        expect(defineType(numberObj)).toBe("Тип данных - не определен ")

    })
})