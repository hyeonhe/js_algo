const fs = require("fs");
const name = fs.readFileSync("/dev/stdin").toString().trim();

const school = {
  NLCS: "North London Collegiate School",
  BHA: "Branksome Hall Asia",
  KIS: "Korea International School",
  SJA: "St. Johnsbury Academy",
};

console.log(school[name]);