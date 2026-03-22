import { Router } from "./router";
import { createContext } from "./context";

export function createServer(router: Router, port: number) {
  return Bun.serve({
    port,
    fetch(req: Request) {
      const ctx = createContext(req);

      const handler = router.match(req.method, ctx.path);

      if (!handler) {
        return new Response("Not found", { status: 404 });
      }

      return handler(ctx);
    }
  })
}
