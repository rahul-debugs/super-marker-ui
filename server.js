

// // updated the both 


// const express = require("express");
// const mongoose = require("mongoose");
// const bcrypt = require("bcryptjs");
// const session = require("express-session");
// const bodyParser = require("body-parser");
// require("dotenv").config();

// const User = require("./models/User");
// const Cart = require("./models/Cart");

// const app = express();
// const PORT = process.env.PORT || 3000;

// // ------------------- MIDDLEWARE -------------------

// // Parse HTML form submissions
// app.use(bodyParser.urlencoded({ extended: true }));

// // Parse JSON payloads (for fetch from frontend)
// app.use(express.json());

// // Serve static files from 'public' folder
// app.use(express.static("public"));

// // Session middleware
// app.use(
//   session({
//     secret: process.env.SESSION_SECRET,
//     resave: false,
//     saveUninitialized: true,
//   })
// );

// // ------------------- MONGODB -------------------
// mongoose
//   .connect(process.env.MONGODB_URI)
//   .then(() => console.log("✅ MongoDB connected"))
//   .catch((err) => console.log(err));

// // ------------------- ROUTES -------------------

// // Register
// app.post("/register", async (req, res) => {
//   const { username, password } = req.body;
//   try {
//     const hashedPassword = await bcrypt.hash(password, 10);
//     const user = new User({ username, password: hashedPassword });
//     await user.save();
//     res.redirect("/index.html");
//   } catch (err) {
//     res.send("Error registering user: " + err.message);
//   }
// });

// // Login
// app.post("/login", async (req, res) => {
//   const { username, password } = req.body;

//   // Admin login
//   if (username === "rahul" && password === "rahul123") {
//     req.session.user = { username: "rahul", role: "admin" };
//     return res.redirect("/admin.html");
//   }

//   // Normal user
//   const user = await User.findOne({ username });
//   if (user && (await bcrypt.compare(password, user.password))) {
//     req.session.user = { username: user.username, role: "user" };
//     return res.redirect("/index.html");
//   }

//   res.send("Invalid credentials");
// });

// // Add to Cart
// app.post("/add-to-cart", async (req, res) => {
//   try {
//     if (!req.session.user) {
//       return res.status(401).json({ message: "You must be logged in" });
//     }

//     const username = req.session.user.username;
//     const { items } = req.body;

//     const cart = new Cart({ user: username, items });
//     await cart.save();

//     res.json({ message: "Cart stored successfully!" });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: "Error storing cart" });
//   }
// });

// // ------------------- START SERVER -------------------
// app.listen(PORT, () =>
//   console.log(`🚀 Server running on http://localhost:${PORT}`)
// );


// updated the path

// const express = require("express");
// const mongoose = require("mongoose");
// const bcrypt = require("bcryptjs");
// const session = require("express-session");
// const bodyParser = require("body-parser");
// const path = require("path");
// require("dotenv").config();

// const User = require("./models/User");
// const Cart = require("./models/Cart");

// const app = express();
// const PORT = process.env.PORT || 3000;

// // ------------------- MIDDLEWARE -------------------

// // Parse HTML form submissions
// app.use(bodyParser.urlencoded({ extended: true }));

// // Parse JSON payloads (for fetch from frontend)
// app.use(express.json());

// // Serve static files from 'public' folder
// app.use(express.static("public"));

// // Session middleware
// app.use(
//   session({
//     secret: process.env.SESSION_SECRET,
//     resave: false,
//     saveUninitialized: true,
//   })
// );

// // ------------------- MONGODB -------------------
// mongoose
//   .connect(process.env.MONGODB_URI)
//   .then(() => console.log("✅ MongoDB connected"))
//   .catch((err) => console.log(err));

// // ------------------- ROUTES -------------------

// // Default route -> show login page
// app.get("/", (req, res) => {
//   if (req.session.user) {
//     // If user already logged in, go to homepage
//     res.sendFile(path.join(__dirname, "public", "index.html"));
//   } else {
//     // Otherwise show login page
//     res.sendFile(path.join(__dirname, "public", "login.html"));
//   }
// });

// // Register
// app.post("/register", async (req, res) => {
//   const { username, password } = req.body;
//   try {
//     const hashedPassword = await bcrypt.hash(password, 10);
//     const user = new User({ username, password: hashedPassword });
//     await user.save();

//     // After successful registration, log user in and redirect to homepage
//     req.session.user = { username: user.username, role: "user" };
//     res.redirect("/index.html");
//   } catch (err) {
//     res.send("Error registering user: " + err.message);
//   }
// });

// // Login
// app.post("/login", async (req, res) => {
//   const { username, password } = req.body;

//   // Admin login
//   if (username === "rahul" && password === "rahul123") {
//     req.session.user = { username: "rahul", role: "admin" };
//     return res.redirect("/admin.html");
//   }

//   // Normal user login
//   const user = await User.findOne({ username });
//   if (user && (await bcrypt.compare(password, user.password))) {
//     req.session.user = { username: user.username, role: "user" };
//     return res.redirect("/index.html");
//   }

//   res.send("Invalid credentials");
// });

// // Add to Cart
// app.post("/add-to-cart", async (req, res) => {
//   try {
//     if (!req.session.user) {
//       return res.status(401).json({ message: "You must be logged in" });
//     }

//     const username = req.session.user.username;
//     const { items } = req.body;

//     const cart = new Cart({ user: username, items });
//     await cart.save();

//     res.json({ message: "Cart stored successfully!" });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: "Error storing cart" });
//   }
// });

// // ------------------- START SERVER -------------------
// app.listen(PORT, () =>
//   console.log(`🚀 Server running on http://localhost:${PORT}`)
// );


// updated code for data store into the card

const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const session = require("express-session");
const bodyParser = require("body-parser");
const path = require("path");
require("dotenv").config();

const User = require("./models/User");
const Cart = require("./models/Cart");

const app = express();
const PORT = process.env.PORT || 3000;

// ------------------- MIDDLEWARE -------------------
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
  })
);

// ------------------- MONGODB -------------------
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.log(err));

// ------------------- ROUTES -------------------
app.get("/", (req, res) => {
  if (req.session.user) {
    res.sendFile(path.join(__dirname, "public", "index.html"));
  } else {
    res.sendFile(path.join(__dirname, "public", "login.html"));
  }
});

// Register
app.post("/register", async (req, res) => {
  const { username, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ username, password: hashedPassword });
    await user.save();
    req.session.user = { username: user.username, role: "user" };
    res.redirect("/index.html");
  } catch (err) {
    res.send("Error registering user: " + err.message);
  }
});

// Login
app.post("/login", async (req, res) => {
  const { username, password } = req.body;

  if (username === "rahul" && password === "rahul123") {
    req.session.user = { username: "rahul", role: "admin" };
    return res.redirect("/admin.html");
  }

  const user = await User.findOne({ username });
  if (user && (await bcrypt.compare(password, user.password))) {
    req.session.user = { username: user.username, role: "user" };
    return res.redirect("/index.html");
  }

  res.send("Invalid credentials");
});

// ------------------- Add to Cart -------------------
app.post("/add-to-cart", async (req, res) => {
  try {
    if (!req.session.user) {
      return res.status(401).json({ message: "You must be logged in" });
    }

    const username = req.session.user.username;
    const { items } = req.body; // [{name, price, quantity}]

    const cart = new Cart({ user: username, items });
    await cart.save();

    res.json({ message: "Cart stored successfully!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error storing cart" });
  }
});

// ------------------- START SERVER -------------------
app.listen(PORT, () =>
  console.log(`🚀 Server running on http://localhost:${PORT}`)
);
