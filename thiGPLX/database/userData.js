import * as SQLite from "expo-sqlite";

function openDatabase() {
  if (Platform.OS === "web") {
    return {
      transaction: () => {
        return {
          executeSql: () => {},
        };
      },
    };
  }

  const db = SQLite.openDatabase("db.db");
  return db;
}

export const stringGenerator = (length) => {
  let result = "";
  for (let i = 1; i <= length; i++) {
    switch (i) {
      case length:
        result += "(" + i + ",'E','false');";
        break;
      default:
        result += "(" + i + ",'E','false'),";
        break;
    }
  }
  return result;
};

export const findMaxLength = (SelectedPart) => {
  switch (SelectedPart) {
    case "toanBo":
      return 200;
    case "diemLiet":
      return 20;
    case "khaiNiemQuyTac":
      return 83;
    case "vanHoaDaoDuc":
      return 5;
    case "kiThuatLaiXe":
      return 12;
    case "bienBao":
      return 65;
    case "saHinh":
      return 35;
  }
};

export const db = openDatabase();
