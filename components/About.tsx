"use client";

import { Bento } from "./Bento";

export default function About(){
    return (
        <section id="about" className="flex flex-col xl:flex-row justify-between mt-8  py-4 px-4 md:px-16 lg:px-24 gap-8 xl:gap-2">
            <Bento />
        </section>
    )
}