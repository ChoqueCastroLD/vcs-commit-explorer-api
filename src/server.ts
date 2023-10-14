import { Elysia } from 'elysia'
import { cors } from '@elysiajs/cors'
import { swagger } from '@elysiajs/swagger'

import { router } from './routes/router'
import { loggerPlugin } from "./plugins/logger.plugin"


const app = new Elysia()
	.use(cors())
	.use(swagger())
	.use(loggerPlugin())
	.use(router())
	.listen(Bun.env.PORT ?? 3000)

console.log(`🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`)
