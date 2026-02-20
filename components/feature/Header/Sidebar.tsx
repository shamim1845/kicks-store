import React from 'react'
import Image from 'next/image'

const Sidebar = ({ openMobileMenu, setOpenMobileMenu }: { openMobileMenu: boolean, setOpenMobileMenu: (value: boolean) => void }) => {
    return (
        <div className="fixed top-0 left-0 w-full h-full bg-white z-50">
            <div className="flex items-center justify-between">
                <Image src="/logo/logo_dark.svg" alt="Logo" width={128} height={128} />
                {/* <Image src="/icons/x.svg" alt="Close" width={20} height={20} onClick={() => setOpenMobileMenu(false)} /> */}
            </div>
        </div>
    )
}

export default Sidebar