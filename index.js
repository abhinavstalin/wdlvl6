const app = require("./app");
//The Browser will run at the port 3000 or any port
app.listen(process.env.PORT || 3000, () => {
  console.log("Express server at port 3000");
});
