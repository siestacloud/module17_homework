
export function defineType(clientInput) {
    // Task 2. 10.3 логический тип ветвление
    switch (true) {
        case typeof (+clientInput) === "number" && !isNaN(+clientInput):
            return "Тип данных - число ";
        case clientInput === 'true' || clientInput === 'false':
            return "Тип данных - логический ";
        case typeof (clientInput) === 'string':
            return "Тип данных - строка ";
        default:
            return "Тип данных - не определен ";
    }
}
