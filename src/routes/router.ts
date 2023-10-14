import { Elysia } from 'elysia'

import { router as healthRoutes } from './health.routes'
import { router as inspectRoutes } from './inspect.routes'
import { router as branchesRoutes } from './branches.routes'
import { router as commitsRoutes } from './commits.routes'


export const router = () => new Elysia()
    .use(healthRoutes())
    .use(inspectRoutes())
    .use(branchesRoutes())
    .use(commitsRoutes())
