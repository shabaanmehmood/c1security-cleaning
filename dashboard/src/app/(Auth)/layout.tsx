import  AuthBackground  from "./_components/authBackGround";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative min-h-screen w-full flex items-center justify-center p-4 sm:p-6">
      {/* Background layer */}
      <AuthBackground />
      
      {/* Centered Form Wrapper with entrance animation */}
      <main className="w-full max-w-md z-10">
        {children}
      </main>
    </div>
  );
}