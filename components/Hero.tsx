"use client";

import MagicButton from './ui/MagicButton'
import Squares from './ui/Squares'
import { TypewriterEffectSmooth } from './ui/TyperWriter';


export default function Hero(){
    const words = [
        {
          text: "A",
        },
        {
          text: "Brand",
        },
        {
          text: "That’s",
        },
        {
          text: "Redefining",
        },
        {
          text: "Style",
        },
        {
            text: "with",
        },
        {
            text: "Care",
            className: "text-blue-500 dark:text-blue-500",
        },
        {
            text: "and",
        },
        {
          text: "Innovation.",
          className: "text-blue-500 dark:text-blue-500",
        },
      ];
    return (
        <div className="relative h-screen w-full flex justify-center">
            
                <Squares 
                    speed={0.4} 
                    squareSize={40}
                    direction='diagonal' // up, down, left, right, diagonal
                    borderColor='#222'
                    hoverFillColor='#222'
                    />
                <div className='max-h-16 flex flex-col gap-4 justify-center items-center mt-64 z-10'>
                    <h2 className='text-center text-xl sm:text-2xl text-[#fafafa99]'>Done by Fiodar and Nikita</h2>
                    <TypewriterEffectSmooth words={words}/>
                    <MagicButton text="Take a look" to="about"/>
                </div>
        </div>
    )
}