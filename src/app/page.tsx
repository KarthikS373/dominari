"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

import Balloons from "~/assets/balloon.png";
import Cloud1 from "~/assets/cloud-1.png";
import Cloud2 from "~/assets/cloud-2.png";
import Cloud3 from "~/assets/cloud-3.png";

const MESSAGES = [
  "Lead Your Clan to Victory!",
  "Join Millions of Players Worldwide",
  "Raise a Clan and Build Your Village",
  "Compete in Epic Clan Wars!",
];

const HomePage = () => {
  // const [currentSlide, setCurrentSlide] = useState(0);
  // const totalSlides = 4;

  // const nextSlide = useCallback(() => {
  //   setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  // }, [totalSlides]);

  // const prevSlide = () => {
  //   setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  // };

  // // Auto-advance slides
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     nextSlide();
  //   }, 5000);
  //   return () => clearTimeout(timer);
  // }, [nextSlide]);

  // return (
  //   <main className="relative min-h-screen w-screen overflow-hidden bg-gradient-to-b from-blue-400 to-blue-600">
  //     {/* Sun */}
  //     <motion.div
  //       className="absolute right-10 top-20 z-10 hidden md:block"
  //       initial={{ opacity: 0.5 }}
  //       animate={{
  //         opacity: [0.5, 1, 0.5],
  //         scale: [1, 1.05, 1],
  //       }}
  //       transition={{
  //         repeat: Number.POSITIVE_INFINITY,
  //         duration: 5,
  //         ease: "easeInOut",
  //       }}
  //     >
  //       <Sun className="h-32 w-32 text-yellow-300 drop-shadow-[0_0_15px_rgba(253,224,71,0.7)]" />
  //     </motion.div>

  //     {/* Moving Clouds */}
  //     <motion.div
  //       className="absolute left-[-100px] top-20 z-10"
  //       animate={{
  //         x: [0, 1000],
  //       }}
  //       transition={{
  //         repeat: Number.POSITIVE_INFINITY,
  //         duration: 120,
  //         ease: "linear",
  //       }}
  //     >
  //       <Image
  //         src={Cloud1 || "/placeholder.svg"}
  //         alt="Cloud 1"
  //         width={300}
  //         height={150}
  //         className="w-64 opacity-80"
  //       />
  //     </motion.div>

  //     <motion.div
  //       className="absolute left-[-300px] top-40 z-10"
  //       animate={{
  //         x: [0, 1200],
  //       }}
  //       transition={{
  //         repeat: Number.POSITIVE_INFINITY,
  //         duration: 180,
  //         ease: "linear",
  //         delay: 10,
  //       }}
  //     >
  //       <Image
  //         src={Cloud2 || "/placeholder.svg"}
  //         alt="Cloud 2"
  //         width={300}
  //         height={150}
  //         className="w-48 opacity-90"
  //       />
  //     </motion.div>

  //     <motion.div
  //       className="absolute left-[-200px] top-60 z-10"
  //       animate={{
  //         x: [0, 1100],
  //       }}
  //       transition={{
  //         repeat: Number.POSITIVE_INFINITY,
  //         duration: 150,
  //         ease: "linear",
  //         delay: 5,
  //       }}
  //     >
  //       <Image
  //         src={Cloud3 || "/placeholder.svg"}
  //         alt="Cloud 3"
  //         width={300}
  //         height={150}
  //         className="w-56 opacity-85"
  //       />
  //     </motion.div>

  //     {/* Content Container */}
  //     <div className="relative z-20 mx-auto flex min-h-screen max-w-7xl flex-col px-4">
  //       {/* Navigation */}
  //       <nav className="flex items-center justify-between py-6">
  //         <div className="flex items-center gap-8">
  //           <Link href="/" className="text-lg font-bold text-white">
  //             Home
  //           </Link>
  //           <Link
  //             href="/about"
  //             className="text-lg text-white/80 transition hover:text-white"
  //           >
  //             About
  //           </Link>
  //         </div>
  //         {/* <button className="rounded-full bg-white/20 px-6 py-2 text-white backdrop-blur-sm transition hover:bg-white/30">
  //           Sign in
  //         </button> */}
  //       </nav>

  //       {/* Main Content */}
  //       <div className="flex flex-1 flex-col items-center justify-center">
  //         <div className="relative flex w-full max-w-2xl flex-col items-center">
  //           {/* Resource UI */}
  //           <div className="absolute -left-10 top-10 z-30 flex items-center gap-2 rounded-full bg-black/30 px-2 py-1 backdrop-blur-sm">
  //             {/* <div className="h-8 w-8 rounded-full bg-purple-500"></div> */}
  //             <svg
  //               width="32"
  //               height="40"
  //               viewBox="0 0 66 71"
  //               fill="none"
  //               xmlns="http://www.w3.org/2000/svg"
  //             >
  //               <g filter="url(#filter0_di_526_211)">
  //                 <path
  //                   d="M55.1445 43.5531C53.5962 55.6783 42.1265 64.3989 29.5262 63.031C16.9259 61.6631 7.96644 50.7247 9.51472 38.5994C9.51472 24.3706 21.9721 7.97537 47.8186 9.88815C48.6494 9.94964 49.0189 10.9704 48.5678 11.6774C43.3675 19.8264 56.8868 29.9083 55.1445 43.5531Z"
  //                   fill="url(#paint0_linear_526_211)"
  //                 />
  //                 <path
  //                   d="M55.1445 43.5531C53.5962 55.6783 42.1265 64.3989 29.5262 63.031C16.9259 61.6631 7.96644 50.7247 9.51472 38.5994C9.51472 24.3706 21.9721 7.97537 47.8186 9.88815C48.6494 9.94964 49.0189 10.9704 48.5678 11.6774C43.3675 19.8264 56.8868 29.9083 55.1445 43.5531Z"
  //                   fill="url(#paint1_radial_526_211)"
  //                 />
  //                 <path
  //                   d="M55.1445 43.5531C53.5962 55.6783 42.1265 64.3989 29.5262 63.031C16.9259 61.6631 7.96644 50.7247 9.51472 38.5994C9.51472 24.3706 21.9721 7.97537 47.8186 9.88815C48.6494 9.94964 49.0189 10.9704 48.5678 11.6774C43.3675 19.8264 56.8868 29.9083 55.1445 43.5531Z"
  //                   fill="url(#paint2_radial_526_211)"
  //                 />
  //                 <path
  //                   d="M10.2603 38.6803L10.2664 38.6331L10.2664 38.5857C10.2664 31.6832 13.29 24.2355 19.469 18.7449C25.6371 13.2639 35.0001 9.69095 47.7492 10.6344C47.8333 10.6407 47.9193 10.6888 47.9745 10.8274C48.0334 10.9754 48.0197 11.1523 47.9355 11.2843C46.4962 13.5398 46.3748 15.917 46.9123 18.3505C47.4427 20.7523 48.6317 23.2805 49.8798 25.8865C49.9292 25.9896 49.9787 26.0928 50.0283 26.1963C52.5197 31.3947 55.2213 37.0317 54.3989 43.4721C52.9063 55.1614 41.8354 63.613 29.6212 62.287C17.407 60.961 8.76773 50.3696 10.2603 38.6803Z"
  //                   stroke="black"
  //                   stroke-width="1.5"
  //                 />
  //               </g>
  //               <mask
  //                 id="mask0_526_211"
  //                 // style="mask-type:alpha"
  //                 style={{ maskType: "alpha" }}
  //                 maskUnits="userSpaceOnUse"
  //                 x="9"
  //                 y="9"
  //                 width="47"
  //                 height="55"
  //               >
  //                 <path
  //                   d="M54.3989 43.4721C52.9063 55.1614 41.8354 63.613 29.6212 62.287C17.407 60.961 8.76773 50.3696 10.2603 38.6803C10.9965 32.915 14.0699 25.4353 20.1246 19.6382C26.1565 13.8629 35.1822 9.72282 47.9186 10.651C47.9965 10.6567 48.0864 10.7019 48.1519 10.8459C48.2213 10.9984 48.2215 11.1875 48.1505 11.3344C47.1062 13.4951 47.1529 15.9465 47.6974 18.4887C48.2418 21.0302 49.3091 23.771 50.4201 26.556C50.4967 26.748 50.5735 26.9402 50.6504 27.1327C51.6982 29.7552 52.7649 32.4247 53.515 35.0975C54.3193 37.9636 54.7427 40.7795 54.3989 43.4721Z"
  //                   fill="url(#paint3_linear_526_211)"
  //                 />
  //                 <path
  //                   d="M54.3989 43.4721C52.9063 55.1614 41.8354 63.613 29.6212 62.287C17.407 60.961 8.76773 50.3696 10.2603 38.6803C10.9965 32.915 14.0699 25.4353 20.1246 19.6382C26.1565 13.8629 35.1822 9.72282 47.9186 10.651C47.9965 10.6567 48.0864 10.7019 48.1519 10.8459C48.2213 10.9984 48.2215 11.1875 48.1505 11.3344C47.1062 13.4951 47.1529 15.9465 47.6974 18.4887C48.2418 21.0302 49.3091 23.771 50.4201 26.556C50.4967 26.748 50.5735 26.9402 50.6504 27.1327C51.6982 29.7552 52.7649 32.4247 53.515 35.0975C54.3193 37.9636 54.7427 40.7795 54.3989 43.4721Z"
  //                   fill="url(#paint4_radial_526_211)"
  //                 />
  //                 <path
  //                   d="M54.3989 43.4721C52.9063 55.1614 41.8354 63.613 29.6212 62.287C17.407 60.961 8.76773 50.3696 10.2603 38.6803C10.9965 32.915 14.0699 25.4353 20.1246 19.6382C26.1565 13.8629 35.1822 9.72282 47.9186 10.651C47.9965 10.6567 48.0864 10.7019 48.1519 10.8459C48.2213 10.9984 48.2215 11.1875 48.1505 11.3344C47.1062 13.4951 47.1529 15.9465 47.6974 18.4887C48.2418 21.0302 49.3091 23.771 50.4201 26.556C50.4967 26.748 50.5735 26.9402 50.6504 27.1327C51.6982 29.7552 52.7649 32.4247 53.515 35.0975C54.3193 37.9636 54.7427 40.7795 54.3989 43.4721Z"
  //                   fill="url(#paint5_radial_526_211)"
  //                 />
  //                 <path
  //                   d="M54.3989 43.4721C52.9063 55.1614 41.8354 63.613 29.6212 62.287C17.407 60.961 8.76773 50.3696 10.2603 38.6803C10.9965 32.915 14.0699 25.4353 20.1246 19.6382C26.1565 13.8629 35.1822 9.72282 47.9186 10.651C47.9965 10.6567 48.0864 10.7019 48.1519 10.8459C48.2213 10.9984 48.2215 11.1875 48.1505 11.3344C47.1062 13.4951 47.1529 15.9465 47.6974 18.4887C48.2418 21.0302 49.3091 23.771 50.4201 26.556C50.4967 26.748 50.5735 26.9402 50.6504 27.1327C51.6982 29.7552 52.7649 32.4247 53.515 35.0975C54.3193 37.9636 54.7427 40.7795 54.3989 43.4721Z"
  //                   stroke="black"
  //                   stroke-width="1.5"
  //                 />
  //               </mask>
  //               <g mask="url(#mask0_526_211)">
  //                 <path
  //                   d="M23.4095 39.443C24.0901 36.6954 25.5981 30.8351 26.7338 28.0782C27.051 27.3083 27.0587 26.3863 26.551 25.7263C25.6999 24.6199 24.2725 22.9721 22.7422 22.0988C20.8145 20.9986 17.8302 21.5396 16.6641 21.8146C16.3393 21.8912 16.0454 22.0693 15.8135 22.3093C6.02546 32.4401 6.82361 43.4366 9.11143 49.5528C9.60097 50.8615 11.2795 51.0165 12.2012 49.9664C14.596 47.2379 18.7725 42.7719 21.6048 41.3623C22.4109 40.9611 23.193 40.317 23.4095 39.443Z"
  //                   fill="url(#paint6_linear_526_211)"
  //                   fill-opacity="0.4"
  //                   // style="mix-blend-mode:overlay"
  //                   style={{ mixBlendMode: "overlay" }}
  //                 />
  //               </g>
  //               <defs>
  //                 <filter
  //                   id="filter0_di_526_211"
  //                   x="9.34077"
  //                   y="7.73521"
  //                   width="45.9599"
  //                   height="59.437"
  //                   filterUnits="userSpaceOnUse"
  //                   color-interpolation-filters="sRGB"
  //                 >
  //                   <feFlood flood-opacity="0" result="BackgroundImageFix" />
  //                   <feColorMatrix
  //                     in="SourceAlpha"
  //                     type="matrix"
  //                     values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
  //                     result="hardAlpha"
  //                   />
  //                   <feOffset dy="4" />
  //                   <feComposite in2="hardAlpha" operator="out" />
  //                   <feColorMatrix
  //                     type="matrix"
  //                     values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"
  //                   />
  //                   <feBlend
  //                     mode="normal"
  //                     in2="BackgroundImageFix"
  //                     result="effect1_dropShadow_526_211"
  //                   />
  //                   <feBlend
  //                     mode="normal"
  //                     in="SourceGraphic"
  //                     in2="effect1_dropShadow_526_211"
  //                     result="shape"
  //                   />
  //                   <feColorMatrix
  //                     in="SourceAlpha"
  //                     type="matrix"
  //                     values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
  //                     result="hardAlpha"
  //                   />
  //                   <feOffset dy="-4" />
  //                   <feGaussianBlur stdDeviation="1" />
  //                   <feComposite
  //                     in2="hardAlpha"
  //                     operator="arithmetic"
  //                     k2="-1"
  //                     k3="1"
  //                   />
  //                   <feColorMatrix
  //                     type="matrix"
  //                     values="0 0 0 0 1 0 0 0 0 0.354167 0 0 0 0 0.509167 0 0 0 0.6 0"
  //                   />
  //                   <feBlend
  //                     mode="overlay"
  //                     in2="shape"
  //                     result="effect2_innerShadow_526_211"
  //                   />
  //                 </filter>
  //                 <linearGradient
  //                   id="paint0_linear_526_211"
  //                   x1="36.4738"
  //                   y1="8.6214"
  //                   x2="30.5548"
  //                   y2="63.1426"
  //                   gradientUnits="userSpaceOnUse"
  //                 >
  //                   <stop stop-color="#FB4FFF" />
  //                   <stop offset="1" stop-color="#6F1F68" />
  //                 </linearGradient>
  //                 <radialGradient
  //                   id="paint1_radial_526_211"
  //                   cx="0"
  //                   cy="0"
  //                   r="1"
  //                   gradientUnits="userSpaceOnUse"
  //                   gradientTransform="translate(37.6555 16.3901) rotate(101.138) scale(36.8788 29.596)"
  //                 >
  //                   <stop offset="0.259923" stop-color="#F721FA" />
  //                   <stop offset="1" stop-color="#5D0089" stop-opacity="0.75" />
  //                 </radialGradient>
  //                 <radialGradient
  //                   id="paint2_radial_526_211"
  //                   cx="0"
  //                   cy="0"
  //                   r="1"
  //                   gradientUnits="userSpaceOnUse"
  //                   gradientTransform="translate(35.7946 25.8087) rotate(101.403) scale(12.6491 14.989)"
  //                 >
  //                   <stop
  //                     offset="0.101999"
  //                     stop-color="white"
  //                     stop-opacity="0.9"
  //                   />
  //                   <stop
  //                     offset="0.322761"
  //                     stop-color="white"
  //                     stop-opacity="0"
  //                   />
  //                 </radialGradient>
  //                 <linearGradient
  //                   id="paint3_linear_526_211"
  //                   x1="36.4738"
  //                   y1="8.62141"
  //                   x2="30.5548"
  //                   y2="63.1426"
  //                   gradientUnits="userSpaceOnUse"
  //                 >
  //                   <stop stop-color="#FB4FFF" />
  //                   <stop offset="1" stop-color="#6F1F68" />
  //                 </linearGradient>
  //                 <radialGradient
  //                   id="paint4_radial_526_211"
  //                   cx="0"
  //                   cy="0"
  //                   r="1"
  //                   gradientUnits="userSpaceOnUse"
  //                   gradientTransform="translate(37.6555 16.3901) rotate(101.138) scale(36.8788 29.596)"
  //                 >
  //                   <stop offset="0.259923" stop-color="#F721FA" />
  //                   <stop offset="1" stop-color="#5D0089" stop-opacity="0.75" />
  //                 </radialGradient>
  //                 <radialGradient
  //                   id="paint5_radial_526_211"
  //                   cx="0"
  //                   cy="0"
  //                   r="1"
  //                   gradientUnits="userSpaceOnUse"
  //                   gradientTransform="translate(35.7946 25.8087) rotate(101.403) scale(12.6491 14.989)"
  //                 >
  //                   <stop
  //                     offset="0.101999"
  //                     stop-color="white"
  //                     stop-opacity="0.9"
  //                   />
  //                   <stop
  //                     offset="0.322761"
  //                     stop-color="white"
  //                     stop-opacity="0"
  //                   />
  //                 </radialGradient>
  //                 <linearGradient
  //                   id="paint6_linear_526_211"
  //                   x1="15.9197"
  //                   y1="21.9731"
  //                   x2="19.5043"
  //                   y2="51.0328"
  //                   gradientUnits="userSpaceOnUse"
  //                 >
  //                   <stop stop-color="white" />
  //                   <stop offset="1" stop-color="white" stop-opacity="0" />
  //                 </linearGradient>
  //               </defs>
  //             </svg>

  //             <div className="h-2 w-24 rounded-full bg-purple-300">
  //               <div className="h-2 w-16 rounded-full bg-purple-600"></div>
  //             </div>
  //           </div>

  //           <div className="absolute -right-10 top-40 z-30 flex items-center gap-2 rounded-full bg-black/30 px-4 py-2 backdrop-blur-sm">
  //             <div className="h-8 w-8 rounded-full bg-yellow-500"></div>
  //             <span className="font-game text-lg text-yellow-300">
  //               2,450,623
  //             </span>
  //           </div>

  //           {/* Balloon Image */}
  //           <motion.div
  //             className="relative z-20 mb-8"
  //             animate={{
  //               y: [0, -15, 0],
  //             }}
  //             transition={{
  //               repeat: Number.POSITIVE_INFINITY,
  //               duration: 4,
  //               ease: "easeInOut",
  //             }}
  //           >
  //             <Image
  //               src={Balloons || "/placeholder.svg"}
  //               alt="Balloon"
  //               width={400}
  //               height={400}
  //               className="h-auto w-64 md:w-80"
  //               priority
  //             />

  //             {/* Baby Dragon in Balloon */}
  //             <div className="absolute bottom-2 left-1/2 -translate-x-[200%]">
  //               <Image
  //                 src={BabyDragon || "/placeholder.svg"}
  //                 alt="Baby Dragon"
  //                 width={100}
  //                 height={100}
  //                 className="h-auto w-20"
  //               />
  //             </div>
  //           </motion.div>

  //           {/* Text Content */}
  //           <div className="text-center -translate-y-10">
  //             {/* <h2 className="font-game text-2xl text-white md:text-3xl">
  //               Download NOW
  //             </h2>
  //             <h1 className="font-game text-4xl text-white drop-shadow-[0_2px_8px_rgba(255,255,255,0.5)] md:text-6xl">
  //               Clash of Clans
  //             </h1> */}

  //             <motion.button
  //               className="relative mt-10 flex items-center mx-auto h-[62px] w-[118px] justify-center font-bold text-white transition"
  //               whileHover={{ scale: 1.05 }}
  //               whileTap={{ scale: 0.95 }}
  //             >
  //               <svg
  //                 className="absolute top-0 left-0 -z-10"
  //                 width="120"
  //                 height="62"
  //                 viewBox="0 0 449 212"
  //                 fill="none"
  //                 xmlns="http://www.w3.org/2000/svg"
  //               >
  //                 <g filter="url(#filter0_d_2002_2)">
  //                   <rect
  //                     x="4"
  //                     y="4"
  //                     width="440.358"
  //                     height="198.471"
  //                     rx="19.8471"
  //                     fill="url(#paint0_linear_2002_2)"
  //                   />
  //                   <rect
  //                     x="2.13933"
  //                     y="2.13933"
  //                     width="444.079"
  //                     height="202.192"
  //                     rx="21.7078"
  //                     stroke="#030303"
  //                     stroke-width="3.72133"
  //                   />
  //                 </g>
  //                 <rect
  //                   x="15"
  //                   y="15"
  //                   width="416"
  //                   height="111"
  //                   rx="11.164"
  //                   fill="url(#paint1_linear_2002_2)"
  //                 />
  //                 <defs>
  //                   <filter
  //                     id="filter0_d_2002_2"
  //                     x="0.278687"
  //                     y="0.278656"
  //                     width="447.8"
  //                     height="210.876"
  //                     filterUnits="userSpaceOnUse"
  //                     color-interpolation-filters="sRGB"
  //                   >
  //                     <feFlood flood-opacity="0" result="BackgroundImageFix" />
  //                     <feColorMatrix
  //                       in="SourceAlpha"
  //                       type="matrix"
  //                       values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
  //                       result="hardAlpha"
  //                     />
  //                     <feOffset dy="4.96178" />
  //                     <feComposite in2="hardAlpha" operator="out" />
  //                     <feColorMatrix
  //                       type="matrix"
  //                       values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.46 0"
  //                     />
  //                     <feBlend
  //                       mode="normal"
  //                       in2="BackgroundImageFix"
  //                       result="effect1_dropShadow_2002_2"
  //                     />
  //                     <feBlend
  //                       mode="normal"
  //                       in="SourceGraphic"
  //                       in2="effect1_dropShadow_2002_2"
  //                       result="shape"
  //                     />
  //                   </filter>
  //                   <filter
  //                     id="filter1_d_2002_2"
  //                     x="110.525"
  //                     y="73.6307"
  //                     width="232.751"
  //                     height="54.5381"
  //                     filterUnits="userSpaceOnUse"
  //                     color-interpolation-filters="sRGB"
  //                   >
  //                     <feFlood flood-opacity="0" result="BackgroundImageFix" />
  //                     <feColorMatrix
  //                       in="SourceAlpha"
  //                       type="matrix"
  //                       values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
  //                       result="hardAlpha"
  //                     />
  //                     <feOffset dy="4.96178" />
  //                     <feComposite in2="hardAlpha" operator="out" />
  //                     <feColorMatrix
  //                       type="matrix"
  //                       values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"
  //                     />
  //                     <feBlend
  //                       mode="normal"
  //                       in2="BackgroundImageFix"
  //                       result="effect1_dropShadow_2002_2"
  //                     />
  //                     <feBlend
  //                       mode="normal"
  //                       in="SourceGraphic"
  //                       in2="effect1_dropShadow_2002_2"
  //                       result="shape"
  //                     />
  //                   </filter>
  //                   <linearGradient
  //                     id="paint0_linear_2002_2"
  //                     x1="224.179"
  //                     y1="4"
  //                     x2="224.179"
  //                     y2="202.471"
  //                     gradientUnits="userSpaceOnUse"
  //                   >
  //                     <stop stop-color="#F56D1A" />
  //                     <stop offset="0.524696" stop-color="#C95A18" />
  //                     <stop offset="0.921875" stop-color="#E76518" />
  //                   </linearGradient>
  //                   <linearGradient
  //                     id="paint1_linear_2002_2"
  //                     x1="223"
  //                     y1="15"
  //                     x2="223"
  //                     y2="126"
  //                     gradientUnits="userSpaceOnUse"
  //                   >
  //                     <stop stop-color="#FECD52" />
  //                     <stop
  //                       offset="1"
  //                       stop-color="#FDD052"
  //                       stop-opacity="0.06"
  //                     />
  //                   </linearGradient>
  //                 </defs>
  //               </svg>

  //               <h2 className="text-xl text-white drop-shadow-xl shadow-black">
  //                 Download
  //               </h2>
  //             </motion.button>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   </main>
  // );

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % MESSAGES.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <motion.div
        className="absolute left-[-100px] top-20 z-10"
        animate={{
          x: [0, 1000],
        }}
        transition={{
          repeat: Number.POSITIVE_INFINITY,
          duration: 120,
          ease: "linear",
        }}
      >
        <Image
          src={Cloud1 || "/placeholder.svg"}
          alt="Cloud 1"
          width={300}
          height={150}
          className="w-64 opacity-80"
        />
      </motion.div>

      <motion.div
        className="absolute left-[-300px] top-40 z-10"
        animate={{
          x: [0, 1200],
        }}
        transition={{
          repeat: Number.POSITIVE_INFINITY,
          duration: 180,
          ease: "linear",
          delay: 10,
        }}
      >
        <Image
          src={Cloud2 || "/placeholder.svg"}
          alt="Cloud 2"
          width={300}
          height={150}
          className="w-48 opacity-90"
        />
      </motion.div>

      <motion.div
        className="absolute left-[-200px] top-60 z-10"
        animate={{
          x: [0, 1100],
        }}
        transition={{
          repeat: Number.POSITIVE_INFINITY,
          duration: 150,
          ease: "linear",
          delay: 5,
        }}
      >
        <Image
          src={Cloud3 || "/placeholder.svg"}
          alt="Cloud 3"
          width={300}
          height={150}
          className="w-56 opacity-85"
        />
      </motion.div>

      <motion.div
        className="absolute right-10 top-20 z-10 hidden md:block"
        initial={{ opacity: 0.5 }}
        animate={{
          opacity: [0.5, 1, 0.5],
          scale: [1, 1.05, 1],
        }}
        transition={{
          repeat: Number.POSITIVE_INFINITY,
          duration: 5,
          ease: "easeInOut",
        }}
      >
        <span className="h-32 w-32 text-yellow-300 drop-shadow-[0_0_15px_rgba(253,224,71,0.7)]" />
      </motion.div>

      <div className="min-h-screen relative overflow-x-hidden bg-gradient-to-b from-green-100 to-green-200 flex flex-col">
        {/* Main Hero Section */}
        <main className="flex-1 flex items-center justify-center p-8">
          {/* Left side index */}
          <div className="mr-8 flex flex-col space-y-4 font-bold">
            {MESSAGES.map((_, i) => (
              <motion.div
                key={i}
                onClick={() => setCurrentIndex(i)}
                // We'll animate the scale/color based on whether this index is active
                animate={{
                  scale: i === currentIndex ? 1.3 : 1,
                  color:
                    i === currentIndex
                      ? "#16a34a" /* text-green-600 */
                      : "#6b7280" /* text-gray-500 */,
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                }}
                className="cursor-pointer"
              >
                {i + 1 < 10 ? `0${i + 1}` : i + 1}
              </motion.div>
            ))}
          </div>

          {/* Animated Text and Image */}
          <div className="relative w-full max-w-3xl flex flex-col md:flex-row items-center justify-between p-6 md:p-12">
            {/* Animated Text Area */}
            <div className="flex-1 mb-4 md:mb-0 md:mr-4">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/30 backdrop-blur-sm mb-6">
                <span className="w-2 h-2 rounded-full bg-green-500 mr-2"></span>
                <span className="text-green-800 font-medium">
                  Terminally Onchain on Eclipse
                </span>
              </div>
              <AnimatePresence mode="wait">
                <motion.h1
                  key={currentIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="text-2xl md:text-4xl font-extrabold text-gray-800"
                >
                  {MESSAGES[currentIndex]}
                </motion.h1>
              </AnimatePresence>
              <p className="mt-4 text-gray-600">
                Build your village, raise a clan, and clash in epic clan wars!
                Join millions of players worldwide in this iconic strategy game.
              </p>
              <div className="space-x-4 w-min">
                {/* Download */}
                <motion.button
                  onClick={() => {
                    window.open("/download", "_blank");
                  }}
                  className="relative mt-10 flex items-center mx-auto h-[62px] w-[118px] justify-center font-bold text-white transition"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg
                    className="absolute top-0 left-0"
                    width="120"
                    height="62"
                    viewBox="0 0 449 212"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g filter="url(#filter0_d_2002_2)">
                      <rect
                        x="4"
                        y="4"
                        width="440.358"
                        height="198.471"
                        rx="19.8471"
                        fill="url(#paint0_linear_2002_2)"
                      />
                      <rect
                        x="2.13933"
                        y="2.13933"
                        width="444.079"
                        height="202.192"
                        rx="21.7078"
                        stroke="#030303"
                        stroke-width="3.72133"
                      />
                    </g>
                    <rect
                      x="15"
                      y="15"
                      width="416"
                      height="111"
                      rx="11.164"
                      fill="url(#paint1_linear_2002_2)"
                    />
                    <defs>
                      <filter
                        id="filter0_d_2002_2"
                        x="0.278687"
                        y="0.278656"
                        width="447.8"
                        height="210.876"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                      >
                        <feFlood
                          flood-opacity="0"
                          result="BackgroundImageFix"
                        />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset dy="4.96178" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.46 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="BackgroundImageFix"
                          result="effect1_dropShadow_2002_2"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_dropShadow_2002_2"
                          result="shape"
                        />
                      </filter>
                      <filter
                        id="filter1_d_2002_2"
                        x="110.525"
                        y="73.6307"
                        width="232.751"
                        height="54.5381"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                      >
                        <feFlood
                          flood-opacity="0"
                          result="BackgroundImageFix"
                        />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset dy="4.96178" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="BackgroundImageFix"
                          result="effect1_dropShadow_2002_2"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_dropShadow_2002_2"
                          result="shape"
                        />
                      </filter>
                      <linearGradient
                        id="paint0_linear_2002_2"
                        x1="224.179"
                        y1="4"
                        x2="224.179"
                        y2="202.471"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#F56D1A" />
                        <stop offset="0.524696" stop-color="#C95A18" />
                        <stop offset="0.921875" stop-color="#E76518" />
                      </linearGradient>
                      <linearGradient
                        id="paint1_linear_2002_2"
                        x1="223"
                        y1="15"
                        x2="223"
                        y2="126"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#FECD52" />
                        <stop
                          offset="1"
                          stop-color="#FDD052"
                          stop-opacity="0.06"
                        />
                      </linearGradient>
                    </defs>
                  </svg>

                  <h2 className="text-xl text-white drop-shadow-xl shadow-black">
                    Download
                  </h2>
                </motion.button>
              </div>

              <span className="text-xs text-black font-bold">
                18 Downloads and Counting...
              </span>
            </div>

            {/* Baby Dragon or placeholder image */}
            <motion.div
              className="flex-1 flex items-center justify-center"
              initial={{ scale: 0.8, rotate: -10, opacity: 0 }}
              animate={{
                scale: [1, 1, 1],
                rotate: 0,
                opacity: [1, 1, 1],
                y: [0, -12, 0],
                rotateZ: [0, 0.5, -0.5, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
            >
              <Image
                src={Balloons}
                alt="Baby Dragon"
                className="w-64 h-auto object-contain"
                width={400}
                height={400}
              />
            </motion.div>
          </div>
        </main>
      </div>
    </>
  );
};

export default HomePage;
