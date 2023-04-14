import Head from "next/head";
import Image from "next/image";
import { Inter, Phudu } from "next/font/google";
import ResponsiveAppBar from "@/components/header";
import { Button, Grid, TextField, Typography } from "@mui/material";
import { Footer } from "@/components/footer";
import SelectTheme from "@/components/selectTheme";
import ProductCard from "@/components/productCard";

const inter = Inter({ subsets: ["latin"] });


export default function Home() {
  return (
    <div>
      <main>
        {/* <SelectTheme /> */}
        <ProductCard />
      </main>
    </div>
  );
}


