import { onRequestPost as __api_auth_verify_ts_onRequestPost } from "/Users/ridbay/Projects/mit/class-of-grit/functions/api/auth/verify.ts"
import { onRequestPost as __api_votes_ts_onRequestPost } from "/Users/ridbay/Projects/mit/class-of-grit/functions/api/votes.ts"

export const routes = [
    {
      routePath: "/api/auth/verify",
      mountPath: "/api/auth",
      method: "POST",
      middlewares: [],
      modules: [__api_auth_verify_ts_onRequestPost],
    },
  {
      routePath: "/api/votes",
      mountPath: "/api",
      method: "POST",
      middlewares: [],
      modules: [__api_votes_ts_onRequestPost],
    },
  ]