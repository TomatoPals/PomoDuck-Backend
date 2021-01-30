require("dotenv").config();
const express = require("express");
const session = require("express-session");
const MemoryStore = require("memorystore")(session);
const cors = require("cors");
const db = require("./models");
const routes = require("./routes");
const passport = require("./config/passport");
const PORT = process.env.PORT || 3001;
const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.use(
  session({
    secret: "keyboard cat",
    resave: true,
    saveUninitialized: true,
    store: new MemoryStore({ checkPeriod: 60000 })
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.use(routes);

db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(" Listening on port %s", PORT, PORT);
  });
});
