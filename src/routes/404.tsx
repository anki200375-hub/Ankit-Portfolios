import { createFileRoute } from "@tanstack/react-router";
import { NotFound } from "@/components/not-found";

// Prerendered to 404.html, which Netlify serves for any unknown URL.
export const Route = createFileRoute("/404")({
  head: () => ({
    meta: [{ title: "Page not found | Ankit Sharma" }, { name: "robots", content: "noindex" }],
  }),
  component: NotFound,
});
