import * as http from "http";
import * as fs from "fs";

const PORT = 3000;

const server = http.createServer((req, res) => {
    fs.readFile("public/index.html", (err, data) => {
        if (err) {
            res.writeHead(500, {"Content-Type": "text/plain"});
            res.end("Failed to load HTML file.");
            return;
        }

        res.writeHead(200, {"Content-Type": "text/html"});
        res.end(data);
    });
});
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});
