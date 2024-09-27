import React from "react";
import FavoriteIcon from '@/assets/svgs/icon-favorite.svg'
import DownloadIcon from '@/assets/svgs/icon-download.svg'
import PresentationIcon from '@/assets/svgs/icon-presentation.svg'

export const DashboardHeaderBar :React.FC = () => {
    return (
        <div className="flex justify-between border-b border-grey-medium dashboard-padding">
            <h2 className="text-lg 2xl:text-xl font-bold">Suppliers</h2>
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
