const { faker } = require("@faker-js/faker");
const fs = require('fs');


const dashboardDataList = [];

const genders = ["MALE", "FEMALE"];
const booleans = [true, false];

const createListItem = (id, name, email, gender, isActive) => ({
  id,
  name,
  email,
  gender,
  isActive,
});

const getOneOfTwo = () => Math.floor(Math.random() * 10) % 2;

let activeCount = 0;
let totalFemales = 0;

new Array(20).fill(0).forEach((_, index) => {
  const name = faker.name.findName();
  const email =
    "" +
    name.toLowerCase().split(" ").join(".") +
    Math.floor(Math.random() * 10) +
    "@gamil.com";

  const gender = genders[getOneOfTwo()];
  const isActive = booleans[getOneOfTwo()];

  if (gender === genders[1]) totalFemales++;
  if (isActive) activeCount++;

  dashboardDataList.push(
    createListItem(index + 1, name, email, gender, isActive)
  );
});

const dashboardStat = [
  {
    id: 1,
    text: "Total Users",
    count: `${dashboardDataList.length} people`,
  },
  {
    id: 2,
    text: "Total Males",
    count: `${dashboardDataList.length - totalFemales} males`,
  },
  {
    id: 3,
    text: "Total Females",
    count: `${totalFemales} females`,
  },
  {
    id: 4,
    text: "Total Active",
    count: `${activeCount} people`,
  },
];

const myAutomatedData = {
    "dashboard-statistics" : { list: dashboardStat},
    "all-dashboard-users" :  dashboardDataList,
}

  


let writer = fs.createWriteStream('data.json',{
    flags: "a",
  }) 
writer.write(JSON.stringify(myAutomatedData,null, 2));