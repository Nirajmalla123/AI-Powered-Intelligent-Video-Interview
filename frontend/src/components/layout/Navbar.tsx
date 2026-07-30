export default function Navbar() {
  return (
    <header className="flex h-16 items-center justify-between border-b bg-white px-6">
      <h1 className="text-xl font-bold">
        AI Interview Assessment System
      </h1>

      <div className="flex items-center gap-3">
        <span className="text-sm text-gray-600">
          Candidate
        </span>
      </div>
    </header>
  );
}