"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import StyledComponentsRegistry from "./util/registry";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <StyledComponentsRegistry>
            <html lang="en">
                <body className={inter.className}>{children}</body>
            </html>
        </StyledComponentsRegistry>
    );
}
