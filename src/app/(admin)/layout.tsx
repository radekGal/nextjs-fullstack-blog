import { DashboardNav } from "@/components";
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex h-screen">
      <DashboardNav /> 
      <main className="flex flex-col flex-1 overflow-hidden bg-[#fff] mt-12 md:mt-0">
        <div className="flex-1 overflow-x-hidden overflow-y-auto">
          <div className="container mx-auto px-6 py-8">
            {children}
          </div>
        </div>
      </main>
      <ToastContainer />
    </div>
  )
}