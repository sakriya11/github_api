const axios = require("axios");
const express = require("express");
const circularJson = require("circular-json");
const router = express.Router();

router.get("/api", async function (req, res) {
  try {
    const url = "https://api.github.com/search/repositories?q=stars:>100000";

    let a = await axios.get(url);

    let data = JSON.parse(circularJson.stringify(a)).data;
    let filter = [];
    for (var i of data.items) {
      let newObj = {};
      newObj["repository_name"] = i.name;
      newObj["author"] = i.full_name;
      newObj["no_of_star"] = i.watchers_count;
      newObj["watcher"] = i.watchers_count;
      newObj["forks"] = i.fork;
      newObj["desc"] = i.description;
      newObj["last_update"] = i.updated_at;

      filter.push(newObj);
    }
    return res.status(200).json({ success: true, data: filter });
  } catch (err) {
    return res.status(404).json({ success: false, msg: err });
  }
});

module.exports = router;
