import * as http from "http";
import * as fs from "fs";

const PORT = 3001;

const server = http.createServer((req, res) => {

    const requestUrl = req.url;

    if (requestUrl === "/") {
        fs.readFile("public/podatkovni-model/index.html", (err, data) => {
            if (err) {
                res.writeHead(500, {"Content-Type": "text/plain"});
                res.end("Failed to load HTML file.");
                return;
            }

            res.writeHead(200, {"Content-Type": "text/html"});
            res.end(data);
        });
    }

    if (requestUrl === "/er.png") {
        fs.readFile("public/podatkovni-model/er.png", (err, data) => {
            if (err) {
                res.writeHead(500, {"Content-Type": "text/plain"});
                res.end("Failed to load image file.");
                return;
            }

            res.writeHead(200, {"Content-Type": "image/png"});
            res.end(data);
        });
    }

    if (requestUrl === "/rest") {
        fs.readFile("public/rest/index.txt", "utf8",(err, data) => {
            if (err) {
                res.writeHead(500, {"Content-Type": "text/plain"});
                res.end("Failed to load text file.");
                return;
            }

            res.writeHead(200, {"Content-Type": "text/plain; charset=utf-8"});
            res.end(data);
        });
    }

    if (requestUrl === "/funkcionalnost-odjemalca") {
        fs.readFile("public/funkcionalnost-odjemalca/index.html", (err, data) => {
            if (err) {
                res.writeHead(500, {"Content-Type": "text/plain"});
                res.end("Failed to load HTML file.");
                return;
            }

            res.writeHead(200, {"Content-Type": "text/html"});
            res.end(data);
        });
    }

    if (requestUrl === "/useCase.png") {
        fs.readFile("public/funkcionalnost-odjemalca/useCase.png", (err, data) => {
            if (err) {
                res.writeHead(500, {"Content-Type": "text/plain"});
                res.end("Failed to load image file.");
                return;
            }

            res.writeHead(200, {"Content-Type": "image/png"});
            res.end(data);
        });
    }

    if (requestUrl === "/posebnosti") {
        fs.readFile("public/posebnosti/index.txt", "utf8", (err, data) => {
            if (err) {
                res.writeHead(500, {"Content-Type": "text/plain"});
                res.end("Failed to load text file.");
                return;
            }

            res.writeHead(200, {"Content-Type": "text/plain; charset=utf-8"});
            res.end(data);
        });
    }

    if (requestUrl === "/funkcionalnosti-streznika") {
        fs.readFile("public/funkcionalnosti-streznika/index.html", (err, data) => {
            if (err) {
                res.writeHead(500, {"Content-Type": "text/plain"});
                res.end("Failed to load HTML file.");
                return;
            }

            res.writeHead(200, {"Content-Type": "text/html"});
            res.end(data);
        });
    }

    if (requestUrl === "/posebnosti-steznika") {
        fs.readFile("public/posebnosti-streznika/tekst.txt", "utf8", (err, data) => {
            if (err) {
                res.writeHead(500, {"Content-Type": "text/plain"});
                res.end("Failed to load text file.");
                return;
            }

            res.writeHead(200, {"Content-Type": "text/plain; charset=utf-8"});
            res.end(data);
        });
    }

    if (requestUrl === "/useCase2.png") {
        fs.readFile("public/funkcionalnosti-streznika/useCase2.png", (err, data) => {
            if (err) {
                res.writeHead(500, {"Content-Type": "text/plain"});
                res.end("Failed to load image file.");
                return;
            }

            res.writeHead(200, {"Content-Type": "image/png"});
            res.end(data);
        });
    }

});
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});