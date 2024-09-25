import React from "react";
import TopBar from "@/components/TopBar";
import {SideBarFiltersWrapper} from "@/components/SideBarFiltersWrapper";

export default function DashboardLayout({ children }) {
    return (
        <>
            <TopBar/>
            <SideBarFiltersWrapper />
            <div className="ml-[240px] mt-[66px] overflow-auto border border-black">
                {children}
            </div>
        </>
    )
}
