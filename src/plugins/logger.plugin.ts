import { Elysia } from 'elysia'


const emojiStatus = new Map([
    [100, '💬'], // Continue
    [101, '🔄'], // Switching Protocols
    [200, '✅'], // OK
    [201, '✅🆕'], // Created
    [202, '✅🔄'], // Accepted
    [204, '✅🌐'], // No Content
    [300, '🔀'], // Multiple Choices
    [301, '🔃'], // Moved Permanently
    [302, '🔀'], // Found
    [304, '🔒'], // Not Modified
    [400, '❌'], // Bad Request
    [401, '🔒❌'], // Unauthorized
    [403, '🚫'], // Forbidden
    [404, '🔍❌'], // Not Found
    [405, '🚫🤷‍♀️'], // Method Not Allowed
    [500, '🔥'], // Internal Server Error
    [501, '🚧'], // Not Implemented
    [502, '🌐❌'], // Bad Gateway
    [503, '🔧'], // Service Unavailable
    [504, '⏱️'], // Gateway Timeout
    [505, '🌐🔒'], // HTTP Version Not Supported
])

export const loggerPlugin = () => new Elysia()
    .onRequest(({ request }) => {
        const url = new URL(request.url)
        console.log(`📩 <-- ${request.method} ${url.pathname}`)
    })
    .onResponse(({ path, request, set }) => {
        console.log(`${typeof set.status === 'number' ? emojiStatus.get(set.status) ?? "" : ""} --> ${request.method} ${path} ${set.status}`)
    })