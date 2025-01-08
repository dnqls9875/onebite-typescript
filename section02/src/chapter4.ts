// 타입 별칭 alias

type User = {
  id: number;
  name: string;
  nickname: string;
  birth: string;
  bio: string;
  location: string;
};

// type User = {} // 중복 X

let user: User = {
  id: 1,
  name: "이우빈",
  nickname: "winterlood",
  birth: "1995-12-04",
  bio: "안녕하세요",
  location: "양주",
};

let user2: User = {
  id: 2,
  name: "노종국",
  nickname: "winterlood",
  birth: "1998-12-04",
  bio: "안녕하세요",
  location: "안양",
};

// 인덱스 시그니처
type ContryCodes = {
  [key: string]: string;
};

let contryCodes: ContryCodes = {
  Korea: "ko",
  UnitedSatae: "us",
  UnitedKingdom: "uk",
};

// 규칙을 위반하지만 않으면 모든 객체를 허용한다.
type CountryNumberCodes = {
  [key: string]: number;
  Korea: number; // 인덱스 시그니처의 타입과 일치해야 한다. / 고정으로 Korea값을 넣어줌
};
let countryNumberCodes: CountryNumberCodes = {
  Korea: 410,
};
