import HamburgerSVG from '@/assets/svgs/icon-hamburger.svg'
import ShareSVG from '@/assets/svgs/share.svg';
import Image from "next/image";
import { Button } from "@/components/Button";

export default function TopBar() {
    return (
        <div className="py-3 px-4 border border-b-grey-medium">
            <div className="flex justify-between">
                <div className="flex items-center gap-3">
                    <div className="flex justify-center items-center size-10 border border-grey-light rounded cursor-pointer transition hover:bg-grey-light">
                        <HamburgerSVG />
                    </div>
                    <h1 className="font-bold text-lg">
                        Dashboard
                    </h1>
                </div>

                <div className="flex items-center gap-3">
                    <Button
                        type="button"
                        label="Share"
                        hasIcon={true}
                        icon={<ShareSVG />}
                        isPrimary={true}
                    />
                </div>
            </div>
        </div>
    )
}
