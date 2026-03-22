import { Router } from "../http/router";
import { createServer } from "../http/server";
import { Capsule } from "../capsule/capsule";

export class Kernel {
  private server?: ReturnType<typeof Bun.serve>;
  private router = new Router();

  constructor(private options: {
    capsules: Capsule[];
  }) {}

  private registerCapsules() {
    for (const capsule of this.options.capsules) {
      capsule.register(this.router);
    }
  }

  public async start(port = 3000) {
    this.registerCapsules();

    this.server = createServer(this.router, port);

    console.log(`🚀 Server running on http://localhost:${port}`);
  }
}
