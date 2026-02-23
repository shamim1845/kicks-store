import Image from "next/image";
import { useGetCategoryByIdQuery } from "@/redux/hooks";
import HeaderSkeleton from "./HeaderSkeleton";

const CategoryHeader = ({ categoryId }: { categoryId: number }) => {
  const { data: category, isLoading: categoryLoading } =
    useGetCategoryByIdQuery(categoryId);

  return categoryLoading ? (
    <HeaderSkeleton />
  ) : (
    category && (
      <header className="section_container py-8 lg:py-16">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
          {/* Text Content */}
          <div className="flex-1 order-2 lg:order-1 text-center lg:text-left">
            <h1 className="text-[32px] lg:text-[72px] font-bold uppercase tracking-tighter leading-[0.9] text-dark">
              {category?.name || "Category"}{" "}
              <span className="text-blue">Store</span>
            </h1>
            <p className="text-[16px] lg:text-[20px] text-dark/70 mt-4 lg:mt-6 max-w-xl font-open-sans font-medium leading-relaxed">
              Discover the latest and greatest {category?.name.toLowerCase()}{" "}
              sneakers. From classic icons to modern performance, find your
              perfect pair here.
            </p>
          </div>

          {/* Image Side */}
          <div className="flex-1 order-1 lg:order-2 w-full">
            <div className="relative aspect-[4/3] lg:aspect-[16/10] bg-light-gray rounded-[24px] lg:rounded-[48px] overflow-hidden shadow-2xl">
              <Image
                src={category?.image || "https://placehold.co/800x600"}
                alt={category?.name || "Category"}
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
                priority
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/20 to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </header>
    )
  );
};

export default CategoryHeader;
