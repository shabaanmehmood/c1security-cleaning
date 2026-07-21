import Footer from "@/components/ui/footer";
import Header from "@/components/ui/header";

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="pt-24">{children}</main>
      <Footer/>
    </>
  );
}