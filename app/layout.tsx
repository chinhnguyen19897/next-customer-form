import React from "react";
import '../styles/globals.css'
import NavBar from "../components/NavBar";
import {Providers} from "./providers";

export default function RootLayout({children}: { children: React.ReactNode }) {
    return (
        <html lang="eng">
        <body>
        <Providers>
            <NavBar/>
            {children}
        </Providers>
        </body>
        </html>
    )
}
