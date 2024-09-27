'use client'
import React, {useState} from "react";
import {Button} from "@/components/Button";
import SyncIcon from '@/assets/svgs/icon-sync.svg'
import {FilterHorizontalTabs} from "@/components/FilterHorizontalTabs";
import {DatePickerWithRange} from "@/components/DateRangePicker";

export const DashboardTopFilters :React.FC = () => {
    return (
        <div className="flex flex-col gap-[14px] border-b border-grey-medium dashboard-padding">
            <DateFilters />
            <PurchaseFilters />
        </div>
    )
}

const DateFilters :React.FC = () => {
    const dateFilters = [
        { text: 'Last 12 months', value: 'last-12'},
        { text: 'Year to date', value: 'year-date'},
        { text: 'Last 6 months', value: 'last-6'},
        { text: 'Last quarter', value: 'quarter'},
        { text: 'Last 3 months', value: 'last-3'},
        { text: 'Month', value: 'months'}
    ]

    return (
        <div className="flex justify-between">
            <div className="flex gap-3">
                <FilterHorizontalTabs
                    tabItems={dateFilters}
                    preSelectedValue={dateFilters[0].value}
                />


                <DatePickerWithRange />
            </div>
            <Button
                type="button"
                label="Sync data"
                isSecondary={true}
                hasIcon={true}
                icon={<SyncIcon />}
            />
        </div>
    )
}

const PurchaseFilters :React.FC = () => {
    const purchaseFilters = [
        { text: 'Purchases', value: 'purchases'},
        { text: 'Purchase Orders', value: 'purchase-orders'},
        { text: 'Sales', value: 'sales'},
        { text: 'Quotes', value: 'Quotes'}
    ]

    const priorFilters = [
        { text: 'vs Prior', value: 'prior'},
        { text: 'vs Prior LY', value: 'prior-ly'},
    ]

    return (
        <div className="flex items-center gap-3">
            <FilterHorizontalTabs
                tabItems={purchaseFilters}
                preSelectedValue={purchaseFilters[3].value}
            />
            <FilterHorizontalTabs
                tabItems={priorFilters}
                preSelectedValue={priorFilters[0].value}
            />
        </div>
    )
}
