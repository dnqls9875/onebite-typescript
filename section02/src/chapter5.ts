// 열거형 타입 enum type
// 여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입

// ! 숫자형 이넘
enum Role {
  // ADMIN = 10,
  // USER, // 자동 11
  // GUEST, // 자동 12
  ADMIN, // 0
  USER = 10,
  GUEST, // 11
}

enum Language {
  korean = "ko",
  english = "en",
}

const user1 = {
  name: "이우빈",
  role: Role.ADMIN, // 0 -> 관리자
  language: Language.korean,
};
const user2 = {
  name: "노종국",
  role: Role.USER, // 1 -> 일반 유저
};
const user3 = {
  name: "조영민",
  role: Role.GUEST, // 2 -> 게스트
};
