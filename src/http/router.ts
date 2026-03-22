import { Context } from "./context";

type Handler = (ctx: Context) => Response | Promise<Response>;

export class Router {
  private routes = new Map<string, Handler>();

  register(method: string, path: string, handler: Handler) {
    const key = this.createKey(method, path);
    this.routes.set(key, handler);
  }

  match(method: string, path: string): Handler | undefined {
    return this.routes.get(this.createKey(method, path));
  }

  private createKey(method: string, path: string) {
    return `${method}:${path}`;
  }
}
