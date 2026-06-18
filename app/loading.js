export default function Loading() {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#040a06]">
      <div className="flex flex-col items-center gap-4">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-emerald-500 border-t-transparent" />
        <span className="text-sm font-medium text-zinc-400">Loading...</span>
      </div>
    </div>
  );
}
