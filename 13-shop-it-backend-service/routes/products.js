var express = require("express");
var router = express.Router();

const products = [
  {
    id: 1,
    name: "Laptop",
    description: "Laptop description",
    price: 20000,
    isAvailable: true,
    image: "images/Laptop.png",
  },
  {
    id: 2,
    name: "Mobile",
    description: "Mobile description",
    price: 20000,
    isAvailable: true,
    image: "images/Mobile.png",
  },
];
const reviews = {
  1: [
    {
      id: 1,
      rating: 5,
      comment: "This is a great laptop",
      user: {
        name: "Foo",
      },
    },
    {
      id: 2,
      rating: 2,
      comment: "This is a bad laptop",
      user: {
        name: "Bar",
      },
    },
  ],
  2: [
    {
      id: 1,
      rating: 5,
      comment: "This is a great mobile",
      user: {
        name: "Foo",
      },
    },
    {
      id: 2,
      rating: 2,
      comment: "This is a bad mobile",
      user: {
        name: "Bar",
      },
    },
  ],
};

router.get("/", function (req, res, next) {
  res.json(products);
});
router.get("/:productId/reviews", function (req, res, next) {
  res.json(reviews[req.params.productId]);
});
router.post("/:productId/reviews", function (req, res, next) {
  let review = req.body;
  review.id = reviews[req.params.productId].length + 1;
  reviews[req.params.productId].push(review);
  res.status(201).json(review);
});

module.exports = router;
