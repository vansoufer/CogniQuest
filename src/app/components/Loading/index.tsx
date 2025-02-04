interface LoadingProps {
  showText?: boolean;
}

export default function Loading({ showText = true }: LoadingProps) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-black/80 p-8 rounded-lg flex flex-col items-center gap-4">
        <div className="w-12 h-12 border-4 border-[#5f0dff] border-t-transparent rounded-full animate-spin" />
        {showText && (
          <p className="text-white">Processando sua solicitação...</p>
        )}
      </div>
    </div>
  );
} 