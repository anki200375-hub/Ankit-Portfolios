import { ArrowUp, MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { ExternalLink } from "@/components/external-link";
import { profile } from "@/data/profile";
import { cn } from "@/lib/utils";

export function FloatingActions() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3">
      <button
        type="button"
        aria-label="Back to top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={cn(
          "grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-accent text-accent-foreground shadow-lg transition-all duration-300 hover:bg-primary",
          showTop ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0",
        )}
      >
        <ArrowUp className="h-5 w-5" />
      </button>
      <ExternalLink
        href={`${profile.whatsapp}?text=${encodeURIComponent("Hi Ankit, I saw your portfolio and would like to discuss a drafting role/project.")}`}
        aria-label="Chat on WhatsApp"
        className="group flex items-center gap-2 rounded-full bg-[#25d366] p-3.5 text-white shadow-lg shadow-black/20 transition-transform hover:-translate-y-0.5"
      >
        <MessageCircle className="h-6 w-6" />
        <span className="hidden max-w-0 overflow-hidden whitespace-nowrap text-sm font-semibold transition-all duration-300 group-hover:max-w-40 group-hover:pr-1 sm:inline">
          Chat on WhatsApp
        </span>
      </ExternalLink>
    </div>
  );
}
