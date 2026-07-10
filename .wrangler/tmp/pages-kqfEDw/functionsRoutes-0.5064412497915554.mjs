import { onRequestGet as __api_admin_data_ts_onRequestGet } from "/Users/ridbay/Projects/mit/class-of-grit/functions/api/admin/data.ts"
import { onRequestPost as __api_auth_update_email_ts_onRequestPost } from "/Users/ridbay/Projects/mit/class-of-grit/functions/api/auth/update-email.ts"
import { onRequestPost as __api_auth_verify_ts_onRequestPost } from "/Users/ridbay/Projects/mit/class-of-grit/functions/api/auth/verify.ts"
import { onRequestPost as __api_votes_ts_onRequestPost } from "/Users/ridbay/Projects/mit/class-of-grit/functions/api/votes.ts"

export const routes = [
    {
      routePath: "/api/admin/data",
      mountPath: "/api/admin",
      method: "GET",
      middlewares: [],
      modules: [__api_admin_data_ts_onRequestGet],
    },
  {
      routePath: "/api/auth/update-email",
      mountPath: "/api/auth",
      method: "POST",
      middlewares: [],
      modules: [__api_auth_update_email_ts_onRequestPost],
    },
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