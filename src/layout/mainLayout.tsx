import Navbar from "@/components/header";
import { Footer } from "@/components/footer";
import Paper from "@mui/material/Paper";
import ProductsPage from "../pages/products/ProductsPage";

export default function MainLayout(props: { children?: any }) {
    return (
        <div>
            <Navbar />
            <Paper
                sx={{
                    borderRadius: "unset",
                    boxShadow: "none",
                    backgroundColor: "#fafafa",
                    minHeight: "calc(100vh - 4rem)",
                }}
            >
                {props?.children}
            </Paper>
            <ProductsPage /> 
            <Footer />
        </div>
    );
}
