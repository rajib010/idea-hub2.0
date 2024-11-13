import Navbar from "@/components/Navbar";
import "../index.css"

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <main className="font-work-sans">
            <Navbar />

            {children}
        </main>
    )
}