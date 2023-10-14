import { Elysia, t } from 'elysia'

import { inspect } from "../controllers/inspect.controller"


export const router = () => new Elysia()
    .get(
        '/api/:vcs/:owner/:repository/inspect',
        ({ params: { vcs, owner, repository } }) => {
            return inspect(vcs, owner, repository)
        },
        {
            params: t.Object({
                vcs: t.String(),
                owner: t.String(),
                repository: t.String()
            }),
            response: t.Object({
                owner: t.String(),
                owner_avatar_url: t.String(),
                owner_url: t.String(),
                description: t.String(),
                stars: t.Number(),
                watchers: t.Number(),
                language: t.String(),
                default_branch: t.String(),
                license_name: t.String(),
                license_url: t.String(),
                fork: t.Boolean(),
                created_at: t.String(),
                updated_at: t.String(),
            }),
        }
    )
