const app = require("express")();
const http  =  require("http").Server(app);
const io = require("socket.io")(http);
app.get("/", (req,res) => {
   return res.sendfile(__dirname + "/index.html");
    // res.send("Hello World");
})

io.use((socket, next) => {
    next();
})
io.on("connection", (socket) => {
    socket.on("chat message", (message) => {
        console.log(message)
        io.emit("chat message", message);
    })
}) 

http.listen(3100, () => {
    console.log("3100 port is listening");
})