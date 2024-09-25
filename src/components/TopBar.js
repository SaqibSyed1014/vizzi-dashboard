import HamburgerIcon from '@/assets/svgs/icon-hamburger.svg'
import ShareIcon from '@/assets/svgs/icon-share.svg';
import { Button } from "@/components/Button";

export default function TopBar() {
    return (
        <div className="fixed top-0 w-full py-3 px-4 border border-b-grey-medium">
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
