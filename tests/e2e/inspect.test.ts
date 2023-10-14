import { describe, expect, it } from 'bun:test'

import { app } from "../../src/server"


const BASE_URL = `http://${app.server?.hostname}:${app.server?.port}`

describe('Inspect Repository Endpoint', () => {
    it('[GITHUB] owner match retrieved repository information', async () => {
        const owner = 'ChoqueCastroLD'
        const repository = 'vcs-commit-explorer-api'

        const response = await app.handle(
            new Request(`${BASE_URL}/api/github/${owner}/${repository}/inspect`)
        ).then(res => res.json())

        expect(response.owner).toBe(owner)
    })
})