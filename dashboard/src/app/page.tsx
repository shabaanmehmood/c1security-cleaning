import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 bg-slate-50">
      <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-lg border border-slate-100 text-center">
        <h1 className="text-2xl font-bold text-slate-800 mb-2">
          Select a Service
        </h1>
        <p className="text-slate-500 mb-8">
          Choose an option below to proceed.
        </p>

        <div className="flex flex-col gap-4">
          {/* Cleaning Button */}
          <Link
            href="/cleaning"
            className="w-full py-3.5 px-6 rounded-xl font-semibold text-white bg-blue-600 hover:bg-blue-700 active:scale-[0.98] transition-all shadow-md shadow-blue-200 text-center"
          >
            Cleaning
          </Link>

          {/* Security Button */}
          <Link
            href="/security"
            className="w-full py-3.5 px-6 rounded-xl font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 active:scale-[0.98] transition-all border border-slate-200 text-center"
          >
            Security
          </Link>
        </div>
      </div>
    </main>
  );
}