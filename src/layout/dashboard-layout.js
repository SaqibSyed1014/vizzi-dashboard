import React from "react";
import TopBar from "@/components/TopBar";
import {SideBarFiltersWrapper} from "@/components/SideBarFiltersWrapper";
import {DashboardTopFilters} from "@/components/DashboardTopFilters";
import {DashboardHeaderBar} from "@/components/DashboardHeaderBar";

export default function DashboardLayout({ children }) {
    return (
        <>
            <TopBar/>
            <SideBarFiltersWrapper />
            <div className="ml-[240px] mt-[66px] overflow-auto">
                <DashboardTopFilters />
                <DashboardHeaderBar />
                {children}
            </div>
        </>
    )
}
