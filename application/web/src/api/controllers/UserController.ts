import { api } from "../init"

export class UserController {
  static get() {
    return api.get("/v0.1/users/")
  }
}
