import PermissionType from "./PermissionType";

interface DatabaseItem {
  email: string;
  password: string;
  permission: PermissionType;
}

const database: DatabaseItem[] = [
  {
    email: "bruno@email.com",
    password: "123456",
    permission: PermissionType.ADMIN,
  },
  {
    email: "email@gmail.com",
    password: "123123",
    permission: PermissionType.USER,
  },
];

export default database;
