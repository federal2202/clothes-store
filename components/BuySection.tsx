import Products from "./Products";

export default function BuySection(){
    return (
        <section id="buy" className="min-h-[800px] mb-16 max-w-full flex flex-col xl:flex-row justify-between mt-8  py-4 px-4 md:px-16 lg:px-24 gap-8 xl:gap-2">
                <Products />
        </section>
    )
}