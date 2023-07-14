import database from "../server/Database";
import PermissionType from "../server/PermissionType";
import Middleware from "./Middleware";

export default class CheckPermissionMiddleware extends Middleware {
  public check(email: string, password: string) {
    const user = database.filter((item) => item.email === email);

    if (user[0].permission === PermissionType.ADMIN) {
      console.log("Seja bem vindo, administrador!");
    } else {
      console.log("Seja bem vindo, usuário!");
    }

    return this.checkNext(email, password);
  }
}
