// пути определяются однозначно поэтому если 
// тестируемый js файл лежит по определенному пути то
// и тесты для для этого файла в директории __test__
// так-же должны быть по такому-же пути
import {definePrime}  from '../../utils/definePrime.js';


describe("test for definePrime fuction", () =>{
    const simple = 17
    const comples = 18

    it("test 1 Should operate correctly with simple number", () => {
        expect(definePrime(17)).toBe(`Число ${simple} - простое число`)
    }),
    it("test 2 Should operate correctly with complex number", () => {
        expect(definePrime(18)).toBe(`Число ${comples} - составное число`)
    }),
    it("test 2 Should operate correctly with invalid number", () => {
        expect(definePrime(1001)).toBe("Данные неверны")
    })

    
    it("test 1 Should operate correctly with simple,complex and invalid number", () => {
        expect(definePrime(17)).toBe(`Число ${simple} - простое число`)
        expect(definePrime(18)).toBe(`Число ${comples} - составное число`)
        expect(definePrime(1001)).toBe("Данные неверны")
    })
    // toEqual можно сравнивать обьекты
})