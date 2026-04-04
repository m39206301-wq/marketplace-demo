import { T } from '../data/tokens';

export default function SkeletonCard({ aspectRatio }) {
  return (
    <div style={{
      borderRadius: "14px", overflow: "hidden", aspectRatio: aspectRatio || "4/5",
      background: "linear-gradient(90deg, " + T.n[100] + " 25%, " + T.n[50] + " 50%, " + T.n[100] + " 75%)",
      backgroundSize: "200% 100%", animation: "shimmer 1.5s ease-in-out infinite",
    }}/>
  );
}
