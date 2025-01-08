// ? 배열 타입
let numArr: number[] = [1, 2, 3];

let strArr: string[] = ["사과", "배", "오렌지"];

let boolArr: Array<boolean> = [true, false, false]; // 제너릭 문법 <>

// 배열의 들어가는 요소들의 타입이 다양할 경우
let multiArr: (number | string)[] = [1, "hello"];

// 다차원 배열의 타입을 정의하는 방법
let doubleArr: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
];

// % 튜플 (타입스크립트에만 있음)
// % 길이와 타입이 고정된 배열
// & 튜플로 배열을 저장하면 [1,2] 외에는 다른 값이 올 수 없음
let tup1: [number, number] = [1, 2];
// tup1 = [1, 2, 3];
// tup1 = ["1", "2"];

let tup2: [number, string, boolean] = [1, "2", true];
// tup2 = ["2", 1, false]; // 순서를 바꿀 수 없음

tup1.unshift(1); // ? 튜플은 길이 제한을 뒀지만 배열메서드를 사용하면 값을 추가 할 수 있음

// ^ 튜플을 유용하게 사용할 수 있는 상황
// ! number, string 규칙이 있었는데 눈치없는 동료가 순서를 잘못 추가한다면
// ! 튜플 타입으로 타입을 고정시켜버리면 오류가 떠서 작성 하는것을 방지할 수 있다.
const users: [string, number][] = [
  ["이우빈", 1],
  ["노종국", 2],
  ["조영민", 3],
  ["심선범", 4],
  // [5, "야무"],
];
