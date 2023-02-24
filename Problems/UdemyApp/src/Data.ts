
export class Data {
     private data:string[] = [
        "//how to concat 2 strings\n" +
        "let a: string = 'abc';\n" +
        "let b: string = 'def';\n" +
        "let c:string = a + b;\n" +
        "//result is abcdef\n" +
        "\n" +
        "//use concat method\n" +
        "let d: string = a.concat(b);\n" +
        "//result is abcdef\n" +
        "\n" +
        "//use template literals\n" +
        "let e: string = `${a}${b}`;\n" +
        "//result is abcdef\n" +
        "\n" +
        "//use join method\n" +
        "let f: string = [a, b].join('');\n" +
        "//result is abcdef\n" +
        "\n" +
        "//use reduce method\n" +
        "let h: string = [a, b].reduce((acc, val) => acc + val, '');\n" +
        "//result is abcdef"
    ]

    get getData(): string[] {
        return this.data;
    }

}