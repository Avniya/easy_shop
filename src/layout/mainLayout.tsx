import Navbar from "@/components/header";
import { Footer } from "@/components/footer";
import Paper from "@mui/material/Paper";

export default function MainLayout(props: { children?: any }) {
    return (
        <>
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
            <Footer />
        </>
    );
}
