// const DB = require("./db");

// async function logAllCollectionsData() {
//   const db = await DB();

//   const collections = await db.listCollections().toArray();

//   for (const col of collections) {
//     const name = col.name;
//     const data = await db.collection(name).find({}).toArray();

//     console.log(`\n===== COLLECTION: ${name} =====`);
//     console.log(data);
//   }
// }

//logAllCollectionsData();

// const DB = require("./db");

// async function listCollections() {
//   const db = await DB();

//   const collections = await db.listCollections().toArray();

//   console.log(collections.map((c) => c.name));
// }

// listCollections();
const DB = require("./db");
const { ObjectId } = require("mongodb");

async function getInvestorById(id) {
  const db = await DB();

  const investor = await db
    .collection("investors")
    .findOne({ _id: new ObjectId(id) });

  return investor;
}
getInvestorById("697ba144b93973c0dac8fa2d")
  .then((data) => {
    console.log(data);
  })
  .catch(console.error);

module.exports = getInvestorById;
