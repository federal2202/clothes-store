"use client";

import HeroScene from './HeroScene';
import MagicButton from './ui/MagicButton'
import Squares from './ui/Squares'
import { TypewriterEffectSmooth } from './ui/TyperWriter';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';


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
      const leftTextRef = useRef<HTMLDivElement>(null); // Ссылка на левый блок
      const rightTextRef = useRef<HTMLDivElement>(null); // Ссылка на правый блок
    
      // Анимация появления текстовых блоков
      useEffect(() => {
        if (leftTextRef.current && rightTextRef.current) {
          // Начальное состояние: блоки скрыты за пределами экрана
          gsap.set([leftTextRef.current, rightTextRef.current], {
            opacity: 0,
            x: (i) => (i === 0 ? -100 : 100), // Левый блок смещён влево, правый — вправо
          });
    
          // Анимация появления
          gsap.to([leftTextRef.current, rightTextRef.current], {
            opacity: 1,
            x: 0, // Возвращаем блоки на место
            duration: 1.5,
            delay: 1, // Задержка перед началом анимации
            ease: "power3.out",
          });
        }
      }, []);
    return (
      <div className="relative h-screen w-full flex justify-evenly bg-black py-4 px-4 md:px-16 lg:px-28">
      {/* Левый текстовый блок */}
      <div
        ref={leftTextRef}
        className="text-white z-20 w-[33%] pt-24 hidden 2xl:block"
      >
        <p className="opacity-100 hover:opacity-100 transition-opacity duration-300 font-bold text-5xl leading-snug">
          Discover the latest trends in{" "}
          <span className="text-blue-500 font-bold">fashion</span>. Our collections
          are designed to bring you{" "}
          <span className="text-blue-500 font-bold">comfort</span> and{" "}
          <span className="text-blue-500 font-bold">style</span>.
        </p>
      </div>

      {/* Сцена с майкой */}
      <HeroScene />

      {/* Правый текстовый блок */}
      <div
        ref={rightTextRef}
        className="text-white z-20 text-right w-[33%] font-bold 2xl:text-5xl pt-24 hidden 2xl:block"
      >
        <p className="opacity-100 hover:opacity-100 transition-opacity duration-300 2xl:leading-snug">
          Experience the perfect blend of{" "}
          <span className="text-blue-400 font-bold">quality</span>. Join the
          movement of modern{" "}
          <span className="text-blue-400 font-bold">fashionistas</span>.
        </p>
      </div>
    </div>
    )
}