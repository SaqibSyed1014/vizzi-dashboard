import React from "react";
import FavoriteIcon from '@/assets/svgs/icon-favorite.svg'
import DownloadIcon from '@/assets/svgs/icon-download.svg'
import PresentationIcon from '@/assets/svgs/icon-presentation.svg'
import CalendarIcon from '@/assets/svgs/icon-calendar.svg'
import HolderIcon from '@/assets/svgs/icon-holder.svg'

interface HeaderProps {
    title: string
}

export const DashboardHeaderBar :React.FC<HeaderProps> = ({ title }) => {
    return (
        <div className="flex justify-between border-b border-grey-medium dashboard-padding">
            <div className="flex gap-3 items-center">
                <h2 className="text-lg 2xl:text-xl font-bold">
                    {title}
                </h2>
                <div className="flex items-center gap-2 text-xs text-red-dark bg-red-light w-[240px] rounded-md px-2 py-1">
                    <CalendarIcon />
                    <p>Showing Last 12 months</p>
                    <div className="ml-auto">
                        <HolderIcon className="cursor-pointer" />
                    </div>
                </div>
            </div>
            <div className="flex gap-1 2xl:gap-2">
                <div className="border border-grey-medium size-[26px] rounded flex justify-center items-center hover:bg-gray-100 transition cursor-pointer">
                    <FavoriteIcon />
                </div>
                <div className="border border-grey-medium size-[26px] rounded flex justify-center items-center hover:bg-gray-100 transition cursor-pointer">
                    <DownloadIcon />
                </div>
                <div className="border border-grey-medium size-[26px] rounded flex justify-center items-center hover:bg-gray-100 transition cursor-pointer">
                    <PresentationIcon />
                </div>
            </div>
        </div>
    )
}
