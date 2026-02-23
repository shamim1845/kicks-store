const HeaderSkeleton = () => (
    <header className="section_container py-8 lg:py-16 animate-pulse">
        <div className="flex flex-col lg:flex-row gap-8 items-center">
            <div className="flex-1 space-y-4 w-full">
                <div className="h-10 lg:h-16 bg-[#d9d9d9] rounded-lg w-2/3" />
                <div className="h-4 lg:h-6 bg-[#d9d9d9] rounded-lg w-full" />
                <div className="h-4 lg:h-6 bg-[#d9d9d9] rounded-lg w-3/4" />
            </div>
            <div className="flex-1 w-full aspect-[4/3] lg:aspect-[16/9] bg-[#d9d9d9] rounded-[24px] lg:rounded-[48px]" />
        </div>
    </header>
)

export default HeaderSkeleton
