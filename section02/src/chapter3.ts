// 객체 타입

// 객체 리터럴타입
// 구조적 타입 시스템 -> Property Based Type System

let user: {
  id?: number; // ! 옵셔널 프로퍼티
  name: string;
} = {
  id: 1,
  name: "이우빈",
};

let config: {
  readonly apiKey: string; // ! 절대 수정되서는 안될 프로퍼티에선 readonly 읽기 전용으로 설정
} = {
  apiKey: "MY API KEY",
};

// config.apiKey = "afafd"; //? 변경하지 못함
