import { createCookieSessionStorage } from "@remix-run/node";

export const sessionStorage = createCookieSessionStorage({
  cookie: {
    name: "auth_session",
    sameSite: "lax",
    path: "/",
    httpOnly: true,
    secrets: [process.env.AUTH_SESSION_SECRET!],
    secure: process.env.NODE_ENV === "production",
    maxAge: 60 * 60 * 24,
  },
});