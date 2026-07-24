const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const MongoUrl = "mongodb://127.0.0.1:27017/wander-lust";

main()
  .then(() => {
    console.log("connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(MongoUrl);
}

const initDB = async () => {
  await Listing.deleteMany({});
  initData.data = initData.data.map((obj) => ({
    ...obj,
    owner: "6a43beb0df83a89afa1bb70d",
  }));
  await Listing.insertMany(initData.data);
  console.log("data was initialized");
};

initDB();
