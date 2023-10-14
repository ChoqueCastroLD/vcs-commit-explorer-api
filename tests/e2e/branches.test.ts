import { describe, expect, it } from 'bun:test'

import { app } from "../../src/server"


const BASE_URL = `http://${app.server?.hostname}:${app.server?.port}`

describe('Inspect Repository Endpoint', () => {
    it('[GITHUB] repository have master branch', async () => {
        const owner = 'ChoqueCastroLD'
        const repository = 'vcs-commit-explorer-api'
        const branchName = 'master'

        const response = await app.handle(
            new Request(`${BASE_URL}/api/github/${owner}/${repository}/branches`)
        ).then(res => res.json())

        const masterBranch = response.find((branch: { name: string }) => branch.name === branchName)
        expect(masterBranch.name).toBe(branchName)
    })
})