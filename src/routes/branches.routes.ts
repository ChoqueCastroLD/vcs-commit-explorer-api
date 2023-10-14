import { Elysia, t } from 'elysia'

import { getBranches } from '../controllers/branches.controller'


export const router = () => new Elysia()
    .get(
        '/api/:vcs/:owner/:repository/branches',
        ({ params: { vcs, owner, repository } }) => {
            return getBranches(vcs, owner, repository)
        },
        {
            params: t.Object({
                vcs: t.String(),
                owner: t.String(),
                repository: t.String()
            }),
            response: t.Array(
                t.Object({
                    name: t.String(),
                    sha: t.String()
                })
            )
        }
    )