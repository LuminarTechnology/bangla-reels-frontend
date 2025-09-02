export {};

export type Roles = "superAdmin" | "contestant" | "user"[];

declare global {
  interface CustomJwtSessionClaims {
    metadata: {
      roles?: Roles[] | [];
    };
  }
}

export type TLang = "en" | "bn" | "es" | "la";
