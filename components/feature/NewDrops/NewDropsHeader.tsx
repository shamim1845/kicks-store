import Image from "next/image";

const NewDropsHeader = () => {
  return (
    <header className="section_container py-8 lg:py-16">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
        {/* Text Content */}
        <div className="flex-1 order-2 lg:order-1 text-center lg:text-left">
          <h1 className="text-[32px] lg:text-[72px] font-bold uppercase tracking-tighter leading-[0.9] text-dark">
            New <span className="text-blue">Drops</span>
          </h1>
          <p className="text-[16px] lg:text-[20px] text-dark/70 mt-4 lg:mt-6 max-w-xl font-open-sans font-medium leading-relaxed">
            Stay ahead of the game with our latest arrivals. Fresh styles, 
            exclusive releases, and the hottest trends in streetwear and performance.
          </p>
        </div>

        {/* Image Side */}
        <div className="flex-1 order-1 lg:order-2 w-full">
          <div className="relative aspect-4/3 lg:aspect-16/10 bg-light-gray rounded-[24px] lg:rounded-[48px] overflow-hidden shadow-2xl">
            <Image
              src="/hero/banner_1.jpg"
              alt="New Drops"
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
              priority
            />
            <div className="absolute inset-0 bg-linear-to-t from-dark/20 to-transparent pointer-events-none" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default NewDropsHeader;
