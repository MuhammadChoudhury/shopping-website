const DatabaseURL = "mongodb://localhost:27017/edureka-certification";
const mongoose = require("mongoose");
mongoose.connect(DatabaseURL, { useNewURLParser: true, useUnifiedTopology: true })