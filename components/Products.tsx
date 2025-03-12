import { Card } from "./Card";
 
interface ProductsInterface {
    id: string;
    name: string;
    price: string;
    img: string;
}


const PRODUCTS: ProductsInterface[] = [
    {
        id: "1",
        name: "Black Tkk Tee",
        price: "19.99$",
        img: "/black-t.jpg",
    },
    {
        id: "2",
        name: "Cream Tkk Tee",
        price: "19.99$",
        img: "/cream-t.jpg",
    },
    {
        id: "3",
        name: "Grey Tkk Tee",
        price: "19.99$",
        img: "/grey-t.jpg",
    },

]

export default function Products(){
    return (
        <div className="w-full">
            <h1 className="text-center font-bold text-4xl drop-shadow-[0_0_2px_rgba(255,255,255,0.6)] mb-20">Our Products</h1>
            {/* <div className="w-full"></div> */}
            <div className="flex flex-col md:flex-row gap-y-6 items-center flex-wrap w-fit xl:mx-auto gap-x-4 ">
                {PRODUCTS.map((item) => (
                    <Card key={item.name} title={item.name} description={item.price} className="w-fit h-fit" img={item.img}/>
                ))}
            </div>
        </div>
    )
}