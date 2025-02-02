import WebSocket, { WebSocketServer } from "ws";

const wss = new WebSocketServer({port : 8080});

const users :  WebSocket[] = [];


wss.on("connection", (ws : WebSocket)=>{
    users.push(ws);

    ws.on("message", ()=>{
        users.forEach(w => {
            w.send("hiii");
        });
    })
})