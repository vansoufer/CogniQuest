export default function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center" data-testid="loading-spinner">
      <div className="w-12 h-12 rounded-full animate-spin
        border-4 border-[#5f0dff] border-t-transparent">
      </div>
    </div>
  );
} 