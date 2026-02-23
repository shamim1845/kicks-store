import Link from 'next/link'

const Banner = () => {
    return (
        <section className="section_container">
            <div className="">
                <h1 className="text-[24px] lg:text-[32px] font-semibold text-dark mb-2">
                    Saving to celebrate
                </h1>
                <p className="text-[12px] lg:text-[14px] font-open-sans font-semibold mb-4 max-w-2xl text-dark/80">
                    Enjoy up to 60% off thousands of styles during the End of Year sale - while supplies last. No code needed.
                </p>
                <div className="flex gap-1 text-[14px] lg:text-[16px] font-open-sans font-semibold text-dark/80">
                    <Link href="/auth/login" className="underline underline-offset-4">Join us</Link>
                    <span className="text-dark">or</span>
                    <Link href="/auth/login" className="underline underline-offset-4">Sign-in</Link>
                </div>
            </div>
        </section>
    )
}

export default Banner   