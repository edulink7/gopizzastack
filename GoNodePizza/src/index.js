const server = require("./server");

server.listen(process.env.PORT || 3333);

if (process.env.NODE_ENV === "development") {
  console.log("Server Running...");
}
