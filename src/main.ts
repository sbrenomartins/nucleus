import { Kernel } from "./core/kernel";
import { createCapsule } from "./capsule/capsule";

const UserCapsule = createCapsule({
  name: "user",
  register(router) {
    router.register("GET", "/users", () => {
      return Response.json({ users: [] });
    });
  },
});

const app = new Kernel({
  capsules: [UserCapsule]
});

app.start(3000);
