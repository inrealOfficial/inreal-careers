import { clerkMiddleware } from "@clerk/nextjs/server";
import { authMiddleware } from "@clerk/nextjs";

export default clerkMiddleware();

// Optional: Add matchers
export const config = {
  matcher: [
    // Protect these routes
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
