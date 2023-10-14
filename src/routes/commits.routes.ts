import { Elysia, t } from 'elysia'

import { getCommits } from "../controllers/commit.controller"


export const router = () => new Elysia()
    .get(
        '/api/:vcs/:owner/:repository/commits/:sha',
        ({ params: { vcs, owner, repository, sha } }) => {
            return getCommits(vcs, owner, repository, sha)
        },
    )