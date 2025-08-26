export {};

export type Roles = "super-admin" | "contestant" | "user";

declare global {
  interface CustomJwtSessionClaims {
    metadata: {
      roles?: Roles[] | [];
    };
  }
}
