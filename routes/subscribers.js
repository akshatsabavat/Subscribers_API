const express = require("express");
const router = express.Router();
const Subscriber = require("../models/subscriberModel");

//Getting all subs
router.get("/", async (req, res) => {
  try {
    const subscribers = await Subscriber.find();
    res.json(subscribers);
  } catch (err) {
    res.status(500).json({ message: err.message }); //errCode : 500 --> means something went wrong with the server
  }
});

//Creating a subscription
router.post("/", async (req, res) => {
  const name = req.body.name;
  const subscribedToChannel = req.body.subscribedToChannel;

  const subscriber = new Subscriber({
    name,
    subscribedToChannel,
  });

  try {
    const newSub = await subscriber.save(); //saves all the request inputs into the schema
    res.status(201).json(newSub); // errCode : 201 --> means an object has been successfully created
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//getting a subscriber
router.get("/:id", async (req, res) => {
  try {
    const sub = await Subscriber.findById(req.params.id);
    res.json(sub);
  } catch (err) {
    res.status(404).json({ message: err.message }); //errCode : 404 --> means object not found
  }
});

module.exports = router;
