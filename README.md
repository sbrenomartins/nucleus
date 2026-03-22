# 🚀 Nucleus

> A capsule-driven backend framework for Bun
> High performance. Clean architecture. Exceptional DX.

---

## ✨ Overview

**Nucleus** is a modern backend framework built on top of **Bun**, designed to deliver:

* ⚡ **Extreme performance** (Radix routing, zero-regex runtime)
* 🧠 **Clean and scalable architecture**
* 🧩 **Capsule-based modular system**
* 🔌 Built-in features (DI, validation, OpenAPI, interceptors)
* ✨ Developer experience inspired by Laravel & Rails

It combines ideas from enterprise frameworks with the simplicity of modern JavaScript ecosystems — without copying them.

---

## 🧬 Core Philosophy

Nucleus is built around three core ideas:

### 🧠 Kernel-centric architecture

Everything flows through a central **Kernel**, ensuring consistency and extensibility.

### 🧩 Capsules instead of modules

Encapsulation is a first-class concept:

* Each feature is isolated
* Plug-and-play architecture
* Clear boundaries

### ⚡ Performance-first design

* Radix Tree Router
* Minimal allocations
* No heavy runtime reflection
* Bun-native APIs

---

## 📦 Features

* 🚀 Bun-native HTTP server
* 🌳 High-performance Radix Tree router
* 🧠 Dependency Injection container:

  * Singleton
  * Scoped (per request)
  * Transient
* 🔄 Middleware + Interceptors pipeline
* ✅ Built-in validation system
* 📄 Automatic OpenAPI generation
* 📚 Optional Scalar documentation UI
* 🛠️ CLI (project scaffolding & generators)
* 🔥 Hot reload support

---

## 🏗️ Project Structure

```txt
src/
  main.ts
  capsules/
    user/
      user.capsule.ts
      user.controller.ts
      user.service.ts

nucleus/
  core/
  http/
  di/
  capsule/
  pipeline/
  validation/
  openapi/
  cli/
```

---

## 🚀 Getting Started

### Install CLI

```bash
bunx nucleus create app
```

### Run project

```bash
bun run dev
```

---

## 🧠 Basic Example

### Create a Capsule

```ts
import { createCapsule } from "nucleus";

export const UserCapsule = createCapsule({
  name: "user",

  providers: [UserService],

  controllers: [UserController],

  routes: (r) => {
    r.get("/:id", "UserController.getUser");
  },
});
```

---

### Controller

```ts
import { Controller, Get } from "nucleus";

@Controller("/users")
export class UserController {
  constructor(private userService: UserService) {}

  @Get("/:id")
  getUser(ctx) {
    return ctx.json(this.userService.getUser(ctx.params.id));
  }
}
```

---

### Bootstrap

```ts
import { Kernel } from "nucleus";
import { UserCapsule } from "./capsules/user/user.capsule";

const app = new Kernel({
  capsules: [UserCapsule],
  features: {
    openapi: true,
    validation: true,
  },
});

app.start();
```

---

## 🧩 Capsules

Capsules are the core building blocks of Nucleus.

They encapsulate:

* Controllers
* Services
* Routes
* Dependencies

### Example

```ts
createCapsule({
  name: "auth",
  providers: [AuthService],
  controllers: [AuthController],
});
```

---

## 🌳 Router

Nucleus uses a **Radix Tree Router**:

* No regex in runtime
* Fast path matching
* Segment-based resolution

Priority:

1. Static routes
2. Params (`:id`)
3. Wildcards (`*`)

---

## 🧠 Dependency Injection

Powerful and lightweight DI container.

### Example

```ts
container.bind(UserService).asSingleton();
container.bind("CACHE").to(CacheService);
```

### Scopes

* Singleton
* Scoped (per request)
* Transient

---

## 🔄 Request Lifecycle

```txt
Request
 ↓
Context
 ↓
Scoped DI Container
 ↓
Middleware
 ↓
Interceptor (before)
 ↓
Controller
 ↓
Interceptor (after)
 ↓
Response
```

---

## 🔁 Interceptors

More powerful than middleware.

```ts
@UseInterceptor(LoggerInterceptor)
@Get("/users")
getUsers() {}
```

---

## ✅ Validation

### Inline

```ts
@Get("/:id")
getUser(@Param("id", number()) id: number) {}
```

### DTO

```ts
class CreateUserDto {
  name = string().min(3);
  age = number().min(18);
}
```

---

## 📄 OpenAPI

Automatic API documentation:

* `/openapi.json`
* `/docs`

Optional UI:

* Scalar

---

## 🛠️ CLI

### Commands

```bash
nucleus create app
nucleus generate capsule user
nucleus generate service user
nucleus dev
```

### Interactive Setup

```bash
? Select features:
✔ OpenAPI
✔ Validation
✔ Interceptors
```

---

## 🔥 Hot Reload

Powered by Bun:

```bash
bun --watch src/main.ts
```

or

```bash
nucleus dev
```

---

## ⚙️ Features System

```ts
features: {
  validation: true,
  openapi: true,
}
```

---

## 🧭 Roadmap

### Phase 1

* Kernel
* HTTP server
* Router

### Phase 2

* DI Container
* Capsules

### Phase 3

* Middleware
* Interceptors

### Phase 4

* Validation

### Phase 5

* OpenAPI

### Phase 6

* CLI

---

## 💡 Why Nucleus?

* Clean architecture without overengineering
* Performance-first approach
* Modern developer experience
* Built for real-world scale

---

## 🤝 Contributing

Contributions are welcome.

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Open a pull request

---

## 📜 License

MIT License

---

## 🌌 Final Thought

Nucleus is not just another framework.

It’s an attempt to redefine how backend systems can be:

* Fast
* Elegant
* Scalable
* Developer-friendly

---

> Build the core. Everything else becomes a capsule.
