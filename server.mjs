import http from 'http';
import fs from 'fs/promises';

const port = 8080;

http.createServer(async (req, res) => {
    const data = await fs.readFile('index.html', 'utf8');
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(data);
}).listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
