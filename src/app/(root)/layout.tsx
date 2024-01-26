import { Footer } from "@/components/ui/footer";
import { NavBar } from "@/components/ui/Navbar";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="overflow-x-hidden antialiased">
      <NavBar />
      {children}
      <Footer />
    </div>
  )
}