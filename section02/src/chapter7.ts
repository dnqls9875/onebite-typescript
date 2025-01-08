// void
// void => 공허 -> 아무것도 없다.
// void -> 아무것도 없음을 의미하는 타입

function fun1(): string {
  return "hello";
}

// 반환할 값이 없다면 void

function fun2(): void {
  console.log("hello");
}

// * void가 아닌 undefined, null로 함수 타입을 지정하면
// * return 값으로 undefined, null을 작성해줘야 한다.
// * 그래서 void는 return 값을 주지 않아도 된다.
function fun3(): undefined {
  console.log("hello");
  return undefined;
}

function fun4(): null {
  console.log("hello");
  return null;
}

// ? 변수에도 void 타입을 지정할 수 있다.
// ? void 타입으로 지정된 변수는 어떠한 값도 담을 수 없다.
let a: void;
// a = 1; // 에러
// a = "hello"; // 에러
a = undefined; // 오직 undefined만 담을 수 있음

// never
// never -> 존재하지 않는
// 불가능한 타입

// 무한 루프
// 함수가 정상적으로 종료되지 못할 경우 -> 반환값 자체가 있는게 모순이다
// 이때 never 타입 지정
function fun5(): never {
  while (true) {}
}

function fun6(): never {
  throw new Error();
}

let b: never;
// b = 1; // 에러
// b = "hello"; // 에러
// b = undefined; // 에러
// b = null; // 에러
// b = anyVar; // 에러
