export default function Loading() {
  return (
    <div>
    
      <div className="min-h-screen max-w-3xl bg-background flex flex-col gap-4 space-4 items-center justify-center">
        <p className="text-text bg-background font-medium text-center">
          Please hold on while we retrieve movie details
        </p>
        <div className="w-10 h-10 border-4 border-brand border-t-transparent rounded-full animate-spin" />
      </div>
    </div>
  );
}
