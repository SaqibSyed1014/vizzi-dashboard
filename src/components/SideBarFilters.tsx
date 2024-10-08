'use client'
import React, {useState} from "react";
import CaretUpIcon from '@/assets/svgs/icon-carret-up.svg'
import InfoIcon from '@/assets/svgs/icon-info.svg'
import CaretDownOutlineIcon from '@/assets/svgs/icon-carret-down-outline.svg'
import { Menu, MenuButton } from "@headlessui/react";
import Tippy from '@tippyjs/react';
import 'tippy.js/themes/light.css';
import 'tippy.js/dist/tippy.css';
import dynamic from "next/dynamic";

const SearchIcon = dynamic(() => import('../assets/svgs/icon-search.svg'), {
    ssr: false
})
const HolderIcon = dynamic(() => import('../assets/svgs/icon-holder.svg'), {
    ssr: false
})
const MenuItems = dynamic(() => import('@headlessui/react').then(mod => mod.MenuItems), {
    ssr: false
});
const MenuItem = dynamic(() => import('@headlessui/react').then(mod => mod.MenuItem), {
    ssr: false
});

interface FilterList {
    text: string,
    value: string,
    isChecked: boolean
}

export const SideBarFilters :React.FC = () => {
    const suppliersFilters :FilterList[] = [
        {
            text: 'All Suppliers',
            value: 'all',
            isChecked: false
        },
        {
            text: 'Amazon Web Services',
            value: 'amazon-web-services',
            isChecked: false
        },
        {
            text: 'Braze',
            value: 'braze',
            isChecked: true
        },
        {
            text: 'Ship Station',
            value: 'ship-station',
            isChecked: false
        },
        {
            text: 'Daigen Co.',
            value: 'ship-station',
            isChecked: false
        },
        {
            text: 'Pharmaceuticals',
            value: 'ship-station',
            isChecked: false
        },
        {
            text: 'Truck Pits',
            value: 'ship-station',
            isChecked: false
        },
        {
            text: 'Larry\'s Fuel',
            value: 'ship-station',
            isChecked: false
        }
    ];
    const categoriesFilters :FilterList[] = [
        {
            text: 'All Categories',
            value: 'all',
            isChecked: false
        },
        {
            text: 'Administration',
            value: 'admin',
            isChecked: false
        },
        {
            text: 'Australia',
            value: 'australia',
            isChecked: true
        },
        {
            text: 'Departments',
            value: 'departments',
            isChecked: false
        },
        {
            text: 'Ireland',
            value: 'ireland',
            isChecked: false
        }
    ];
    const accountsFilters :FilterList[] = [
        {
            text: 'All Accounts',
            value: 'all',
            isChecked: false
        },
        {
            text: '400-Advertising',
            value: 'advertising',
            isChecked: false
        },
        {
            text: '#-Dev Vizii',
            value: 'dev',
            isChecked: true
        },
        {
            text: '425-Freight & Courier',
            value: 'freight',
            isChecked: false
        },
        {
            text: '2011-Hardware',
            value: 'hardware',
            isChecked: false
        }
    ];

    const quantityOptions = [10, 20, 25, 50];

    return (
        <div className="flex flex-col gap-2">
            <FiltrationBlock type="radio" label="Categories" filterList={categoriesFilters} />
            <FiltrationBlock type="radio" label="Accounts" filterList={accountsFilters} />
            <FiltrationBlock type="checkbox" label="Suppliers" filterList={suppliersFilters} />
            <div className="flex justify-between items-center mt-5">
                <div className="flex gap-1 text-blue/40">
                    <p className="text-xs">Show Top Suppliers</p>
                    <InfoIcon />
                </div>
                <Menu>
                    <MenuButton className="btn-wrap gap-2 text-sm">
                        <span>3</span>
                        <CaretDownOutlineIcon />
                    </MenuButton>
                    <MenuItems anchor={{ to: 'bottom end', gap: '10px' }} className="w-[47px] menu-items">
                        {quantityOptions.map((val) => (
                            <MenuItem key={val}>
                                <div className="menu-item text-center">
                                    {val}
                                </div>
                            </MenuItem>
                        ))}
                    </MenuItems>
                </Menu>
            </div>
        </div>
    )
}

interface FiltrationBlockProps {
    type: 'checkbox' | 'radio'
    label: string,
    filterList: FilterList[]
}
const FiltrationBlock :React.FC<FiltrationBlockProps> = ({ type, label, filterList }) =>  {
    const [isFilterBlockCollapsed, toggleFilterVisibility] = useState(true);

    const [filters, setFilters] = useState<FilterList[]>(filterList);

    function searchFilterValues(event :React.FormEvent<EventTarget>) {
        let target = event.target as HTMLInputElement;
        setFilters(filterList.filter(filter => {
            return filter.text.toLowerCase().includes(target.value.toLowerCase());
        }))
    }

    return (
        <div>
            <div
                className="flex justify-between items-center cursor-pointer py-2"
                onClick={() => toggleFilterVisibility(!isFilterBlockCollapsed)}
            >
                <p className="text-blue text-xs 2xl:text-sm">{label}</p>
                <CaretUpIcon className="text-blue" />
            </div>

            {isFilterBlockCollapsed && <div className="collapsed-block flex flex-col gap-3 mt-1">
                <div className="relative">
                    <div className="absolute top-1/2 -translate-y-1/2 left-3">
                        <SearchIcon />
                    </div>
                    <input
                        id={`search-${label.toLowerCase()}}`}
                        type="search"
                        placeholder={`Search ${label}`}
                        onInput={searchFilterValues}
                        className="py-1 pr-3 pl-8 w-full rounded-md outline-0 border border-grey-medium placeholder:text-teritary placeholder:font-light text-sm"/>
                </div>

                <div className="flex flex-col gap-1.5">
                    {filters.map((filterItem, index) => {
                        if (type === 'radio') {
                            return <FilterRadioBoxGroup key={index} filterItem={filterItem}/>
                        } else if (type === 'checkbox') {
                            return <FilterCheckboxGroup key={index} filterItem={filterItem}/>
                        }
                    })}
                </div>
            </div>}
        </div>
    )
}

const FilterCheckboxGroup :React.FC<{ filterItem: FilterList }> = ({ filterItem }) => {
    return (
        <div className="flex items-center gap-2">
            <input type="checkbox" defaultChecked={filterItem.isChecked} id={filterItem.text.toLowerCase().split(' ').join('-')} />
            <label className="text-sm" htmlFor={filterItem.text.toLowerCase().split(' ').join('-')}>
                {filterItem.text}
            </label>
            <Tippy theme="light" content={`Unselecting ${filterItem.text}`}>
                <div className="cursor-pointer ml-auto"><HolderIcon/></div>
            </Tippy>
        </div>
    )
}

const FilterRadioBoxGroup :React.FC<{ filterItem: FilterList }> = ({ filterItem }) => {
    return (
        <div className="flex items-center gap-2">
            <input type="radio" defaultChecked={filterItem.isChecked} id={filterItem.text.toLowerCase().split(' ').join('-')} />
            <label className="text-sm" htmlFor={filterItem.text.toLowerCase().split(' ').join('-')}>
                {filterItem.text}
            </label>
        </div>
    )
}


