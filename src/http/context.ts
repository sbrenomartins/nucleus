export function createContext(req: Request) {
  const url = new URL(req.url);

  return {
    req,
    path: url.pathname,
    method: req.method,
    query: url.searchParams,
    params: {},
  };
}

export type Context = ReturnType<typeof createContext>;
