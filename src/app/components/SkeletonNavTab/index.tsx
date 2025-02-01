export default function SkeletonNavTab() {
  return (
    <div className="animate-pulse space-y-4">
      <div className="flex gap-4 border-b border-gray-700 mb-4">
        <div className="h-10 w-32 bg-gray-700 rounded"></div>
      </div>
      <div className="space-y-3">
        <div className="h-4 bg-gray-700 rounded w-3/4"></div>
        <div className="h-4 bg-gray-700 rounded w-1/2"></div>
        <div className="h-4 bg-gray-700 rounded w-5/6"></div>
      </div>
    </div>
  );
} 