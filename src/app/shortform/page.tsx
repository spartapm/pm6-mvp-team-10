import { Suspense } from "react";
import ShortformContent from "./ShortformContent";

export default function ShortformPage() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-dvh items-center justify-center">
          <div className="h-8 w-8 animate-spin rounded-full border-2 border-neutral-200 border-t-neutral-900" />
        </div>
      }
    >
      <ShortformContent />
    </Suspense>
  );
}
