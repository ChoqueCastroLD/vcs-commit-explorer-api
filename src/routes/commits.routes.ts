import { Elysia, t } from 'elysia'

import { getCommits } from "../controllers/commit.controller"


export const router = () => new Elysia()
    .get(
        '/api/:vcs/:owner/:repository/commits/:sha',
        ({ params: { vcs, owner, repository, sha } }) => {
            return getCommits(vcs, owner, repository, sha)
        },
        {
            params: t.Object({
                vcs: t.String(),
                owner: t.String(),
                repository: t.String(),
                sha: t.String()
            }),
            response: t.Array(
                t.Object({
                    sha: t.String(),
                    node_id: t.String(),
                    message: t.String(),
                    author_name: t.String(),
                    author_email: t.String(),
                    commiter_name: t.String(),
                    commiter_email: t.String(),
                    parents: t.Array(t.String())
                })
            )
        }
    )