'use client'
import React from "react";
import TopBar from "@/components/TopBar";

export default function DashboardLayout({ children }) {
    return (
        <>
            <TopBar/>
            <div className="">
                {children}
            </div>
        </>
    )
}
