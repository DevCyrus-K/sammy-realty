import { Star } from "lucide-react";

export function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, index) => (
        <Star
          key={index}
          size={16}
          className={index < rating ? "fill-[var(--brand-accent)] text-[var(--brand-accent)]" : "text-[var(--brand-border)]"}
        />
      ))}
    </div>
  );
}
