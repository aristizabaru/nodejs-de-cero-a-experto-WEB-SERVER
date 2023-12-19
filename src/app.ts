import http from 'http'
import fs from 'fs'

const server = http.createServer((req, res) => {

    if (req.url === '/') {
        const htmlData = fs.readFileSync('./public/index.html', 'utf-8')
        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.end(htmlData)
    } else {
        res.writeHead(404, { 'Content-Type': 'text/html' })
        res.end()
    }
})

server.listen(8080, () => {
    console.log('Server running on port 8080')
})