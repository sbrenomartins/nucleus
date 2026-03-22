import { Router } from "../http/router";

export type Capsule = {
  name: string;
  register: (router: Router) => void;
};

export function createCapsule(capsule: Capsule): Capsule {
  return capsule;
}
