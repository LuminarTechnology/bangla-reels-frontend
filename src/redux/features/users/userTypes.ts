export interface UserState {
  id: string;
  name: string;
  email: string;
  role?: "user" | "admin";
}
