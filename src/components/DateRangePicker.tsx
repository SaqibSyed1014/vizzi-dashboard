"use client"

import * as React from "react"
import { addDays, format } from "date-fns"
import CalendarIcon from "@/assets/svgs/icon-calendar.svg";
import { DateRange } from "react-day-picker"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import CaretUpIcon from "@/assets/svgs/icon-carret-up.svg";
import {MenuButton} from "@headlessui/react";

export function DatePickerWithRange({
                                        className,
                                    }: React.HTMLAttributes<HTMLDivElement>) {
    const [date, setDate] = React.useState<DateRange | undefined>({
        from: undefined,
        to: undefined,
    })

    return (
            <Popover>
                <PopoverTrigger asChild>
                    <button className="btn-wrap min-w-[235px] text-xs">
                        <CalendarIcon/>
                        {date?.from ? (
                            date.to ? (
                                <>
                                    {format(date.from, "LLL dd, y")} -{" "}
                                    {format(date.to, "LLL dd, y")}
                                </>
                            ) : (
                                format(date.from, "LLL dd, y")
                            )
                        ) : (
                            <span>Custom Range</span>
                        )}
                        <CaretUpIcon className="ml-auto"/>
                    </button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0 bg-white" align="end">
                    <Calendar
                        initialFocus
                        mode="range"
                        defaultMonth={date?.from}
                        selected={date}
                        onSelect={setDate}
                        numberOfMonths={1}
                    />

                    <div className="flex gap-3 p-3 pt-0">
                        <button className="w-full bg-white rounded py-2.5 hover:bg-grey-medium transition">Clear</button>
                        <button className="w-full bg-blue rounded text-white py-2.5 font-medium hover:bg-blue/70 transition">Today</button>
                    </div>
                </PopoverContent>
            </Popover>
    )
}
