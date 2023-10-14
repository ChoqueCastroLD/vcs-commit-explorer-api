import { describe, expect, it } from 'bun:test'

import { app } from "../../src/server"


const BASE_URL = `http://${app.server?.hostname}:${app.server?.port}`

describe('Health Endpoint', () => {
    it('return a response', async () => {
        const response = await app.handle(
            new Request(`${BASE_URL}/api/health`)
        ).then(res => res.json())

        expect(response.status).toBe(true)
        expect(response.message).toBe('All good 👍')
    })
})