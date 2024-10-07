import type { AppRouter } from '@server/trpc/trpc.router'
import { createTRPCProxyClient, httpBatchLink } from '@trpc/client'

const PORT = 3001 // TODO: make this configurable and/or use env vars

export const trpc = createTRPCProxyClient<AppRouter>({
  links: [
    httpBatchLink({
      url: `http://localhost:${PORT}/trpc`,
    }),
  ],
})
