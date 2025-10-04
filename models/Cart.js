// const mongoose = require("mongoose");

// const CartSchema = new mongoose.Schema({
//   user: { type: String, required: true }, // username of user
//   items: [
//     {
//       name: String,
//       price: Number,
//       quantity: { type: Number, default: 1 }
//     }
//   ],
//   createdAt: { type: Date, default: Date.now }
// });

// module.exports = mongoose.model("Cart", CartSchema);

// updated to data store into the mongodb

const mongoose = require("mongoose");

const CartSchema = new mongoose.Schema({
  user: { type: String, required: true }, // username of user
  items: [
    {
      name: { type: String, required: true },
      price: { type: Number, required: true },
      quantity: { type: Number, default: 1 }
    }
  ],
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Cart", CartSchema);

