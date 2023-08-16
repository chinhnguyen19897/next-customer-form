import React from "react";

export default function CustomerInfoRoot({children}: { children: React.ReactNode }) {
    return (
        <section className="customter-info container">{children}</section>
    )
}