import Navbar from "@/components/header";
import { Footer } from "@/components/footer";

export default function MainLayout({ children }) {
	return (
		<div>
            <Navbar />
            {children}
            <Footer />
		</div>
	);
}
