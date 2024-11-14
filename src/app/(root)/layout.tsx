import Navbar from "@/components/Navbar";
import "../globals.css"
import { Toaster } from "@/components/ui/toaster";

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <main className="font-work-sans">
            <Navbar />

            {children}
            <Toaster />
        </main>
    )
}