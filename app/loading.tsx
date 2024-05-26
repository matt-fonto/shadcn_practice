import { SkeletonCard } from "@/components/custom/SkeletonCard";

const iteration = 9;

export default function Loading() {
  return (
    <div className="responsive-grid gap-x-4">
      {[...Array(iteration)].map((_, index) => (
        <SkeletonCard key={index} />
      ))}
    </div>
  );
}
