// any
// 특정 변수의 타입을 우리가 확실히 모를때 사용
// 타입 검사를 안하는 것과 똑같다.
// 타입스크립트를 사용하는 의미가 없음.

let anyVar: any = 10;
anyVar = "hello";

anyVar = true;
anyVar = () => {};
anyVar = [];
anyVar.toUpperCase();
anyVar.map();

let num: number = 10;
num = anyVar;

// unknown
// 변수에 값이 확실하지 않을 때 unknown을 사용하자 (좀 더 안전)
let unknownVar: unknown;
unknownVar = "";
unknownVar = 1;
unknownVar = "hello";
unknownVar = () => {};

// num = unknownVar; // 불가능
// unknownVar.toUpperCase(); // 불가능

// ? 타입 정제
if (typeof unknownVar === "number") {
  num = unknownVar;
}
