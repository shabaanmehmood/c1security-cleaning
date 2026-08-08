import Footer from "@/components/ui/footer";
import Navbar from "@/app/cleaning/(Main)/_components/_homeHeroComponent/Navbar";
export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
       <Navbar/>
      {/* flex-1 allows main content to stretch, keeping footer at the bottom */}
      <main className="flex-1 pt-20 sm:pt-24">
        {children}
      </main>

      <Footer />
    </div>
  );
}