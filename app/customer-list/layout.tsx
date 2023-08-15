import React from "react";

export default function CustomerListLayout({children}: { children: React.ReactNode }) {
    return (
        <section className="customter-list container">{children}</section>
    )
}