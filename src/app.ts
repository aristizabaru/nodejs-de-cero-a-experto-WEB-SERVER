import http from 'http'

const server = http.createServer((req, res) => {
    const data = { name: 'John Doe', age: 39, city: 'New York' }
    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.write(JSON.stringify(data))
    res.end()
})

server.listen(8080, () => {
    console.log('Server running on port 8080')
})