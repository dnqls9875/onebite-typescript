//!  타입 주석 type annotation
// number
let num1: number = 123;
let num2: number = -123;
let num3: number = 0.123;
let num4: number = -0.123;
let num5: number = Infinity;
let num6: number = -Infinity;

// string
let str1: string = "hello";
let str2: string = `안녕`;
let str3: string = `hello ${num1}`;

// boolean
let bool1: boolean = true;
let bool2: boolean = false;

// null
let null1: null = null;

// undefined
let unde: undefined = undefined;

// 리터럴 타입
// 값 그 자체가 타입이 되는것
let numA: 10 = 10;
// numA = 123;  //? 값이 고정이 되어서 재할당이 불가능

let boolA: true = true;
// boolA = false; //? false 재할당 불가능
