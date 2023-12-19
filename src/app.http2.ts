import http2 from 'http2'
import fs from 'fs'

const server = http2.createSecureServer({
    key: fs.readFileSync('./key/server.key'),
    cert: fs.readFileSync('./key/server.crt')
}, (req, res) => {

    console.log(req.url)

    if (req.url === '/') {
        const htmlData = fs.readFileSync('./public/index.html', 'utf-8')
        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.end(htmlData)
        return
    }

    if (req.url?.endsWith('.js')) {
        res.writeHead(200, { 'Content-Type': 'application/javascript' })
    } else if (req.url?.endsWith('.css')) {
        res.writeHead(200, { 'Content-Type': 'text/css' })
    }

    if (req.url !== '/favicon.ico') {
        const data = fs.readFileSync(`./public${req.url}`, 'utf-8')
        res.end(data)
    }
})

server.listen(8080, () => {
    console.log('Server running on port 8080')
})