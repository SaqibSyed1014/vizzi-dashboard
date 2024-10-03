import HamburgerIcon from '@/assets/svgs/icon-hamburger.svg'
import ShareIcon from '@/assets/svgs/icon-share.svg';
import { Button } from "@/components/Button";
import {Menu, MenuButton} from "@headlessui/react";
import CaretUpIcon from "@/assets/svgs/icon-carret-up.svg";
import React from "react";
import EntityIcon from "@/assets/svgs/icon-entity.svg";
import dynamic from "next/dynamic";


const AddCircleIcon = dynamic(() => import('../assets/svgs/icon-add-circle.svg'), {
    ssr: false
})
const MenuItems = dynamic(() => import('@headlessui/react').then(mod => mod.MenuItems), {
    ssr: false
});
const MenuItem = dynamic(() => import('@headlessui/react').then(mod => mod.MenuItem), {
    ssr: false
});

export default function TopBar() {
    return (
        <div className="fixed z-50 top-0 w-full py-3 px-4 bg-white border border-b-grey-medium">
            <div className="flex justify-between">
                <div className="flex items-center gap-3">
                    <div className="flex justify-center items-center size-10 border border-grey-light rounded cursor-pointer transition hover:bg-grey-light">
                        <HamburgerIcon />
                    </div>
                    <h1 className="font-bold text-lg 2xl:text-xl">
                        Dashboard
                    </h1>
                </div>

                <div className="flex items-center gap-3">
                    <EntityDropdown />
                    <Button
                        type="button"
                        label="Share"
                        hasIcon={true}
                        icon={<ShareIcon />}
                        isPrimary={true}
                    />
                </div>
            </div>
        </div>
    )
}

function EntityDropdown() {
    return (
        <Menu>
            <MenuButton className="btn-wrap w-[125px]">
                <EntityIcon />
                <span>Entity</span>
                <CaretUpIcon className="ml-auto" />
            </MenuButton>
            <MenuItems anchor={{ to: 'bottom end', gap: '10px' }} className="w-[200px] menu-items">
                <MenuItem>
                    <div className="menu-item item-header">
                        Entities
                    </div>
                </MenuItem>
                <MenuItem>
                    <div className="menu-item">
                        Go Green
                    </div>
                </MenuItem>
                <MenuItem>
                    <div className="menu-item">
                        James & Co
                    </div>
                </MenuItem>
               <MenuItem>
                   <div className="menu-item border-t border-gray-200 flex items-center gap-2">
                       <AddCircleIcon />
                       <p>Add more entities</p>
                   </div>
               </MenuItem>
            </MenuItems>
        </Menu>
    )
}
