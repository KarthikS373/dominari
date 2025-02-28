"use client";

import { motion } from "framer-motion";
import { Apple, ArrowRight, Monitor, Smartphone } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

import BabyDragon from "~/assets/baby-dragon.png";
import { Button } from "~/components/button";

export default function DownloadPage() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-100 to-green-200 relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-green-300 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute top-1/3 -right-40 w-80 h-80 bg-emerald-300 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute -bottom-40 left-1/3 w-80 h-80 bg-teal-300 rounded-full opacity-20 blur-3xl"></div>

      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        {/* Hero Section */}
        <motion.div
          className="text-center mb-16 md:mb-24"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center mb-2"
          >
            <Image
              src={BabyDragon}
              alt="Baby Dragon"
              width={48}
              height={48}
              className="w-20 mr-2 text-green-800"
            />
          </motion.div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-green-900">
            Download Now
          </h1>
          <p className="text-lg md:text-xl text-green-800 max-w-2xl mx-auto">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Consequuntur eos odit error.
          </p>
        </motion.div>

        {/* Download Options */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {/* Desktop Option */}
          <motion.div
            variants={item}
            className="relative"
            onMouseEnter={() => setHoveredCard("desktop")}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="h-full rounded-2xl border border-white/20 bg-white/20 backdrop-blur-lg p-8 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-green-400/10 to-emerald-400/10 opacity-50 z-0 group-hover:opacity-70 transition-opacity"></div>
              <div className="relative z-10">
                <div className="bg-white/30 backdrop-blur-md w-16 h-16 rounded-xl flex items-center justify-center mb-6 shadow-sm">
                  <Monitor className="w-8 h-8 text-green-800" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-green-900">
                  Desktop
                </h3>
                <p className="text-green-800 mb-6">
                  Get the full experience on your computer. <br />
                  Available for windows
                </p>
                <motion.div
                  initial={{ opacity: 0.8 }}
                  animate={{
                    opacity: hoveredCard === "desktop" ? 1 : 0.8,
                    y: hoveredCard === "desktop" ? -5 : 0,
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <Button className="w-full group rounded-md bg-green-700 hover:bg-green-800 text-white">
                    Download for Desktop
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Android Option */}
          <motion.div
            variants={item}
            className="relative"
            onMouseEnter={() => setHoveredCard("android")}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="h-full rounded-2xl border border-white/20 bg-white/20 backdrop-blur-lg p-8 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-400/10 to-green-400/10 opacity-50 z-0 group-hover:opacity-70 transition-opacity"></div>
              <div className="relative z-10">
                <div className="bg-white/30 backdrop-blur-md w-16 h-16 rounded-xl flex items-center justify-center mb-6 shadow-sm">
                  <Smartphone className="w-8 h-8 text-teal-800" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-green-900">
                  Android
                </h3>
                <p className="text-green-800 mb-6">
                  Take your experience on the go with our Android app
                </p>
                <motion.div
                  initial={{ opacity: 0.8 }}
                  animate={{
                    opacity: hoveredCard === "android" ? 1 : 0.8,
                    y: hoveredCard === "android" ? -5 : 0,
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <Button
                    onClick={() => {
                      window.open(
                        `https://github.com/KarthikS373/ai-coc/releases/download/apk/ai-coc.apk`,
                        "_blank"
                      );
                    }}
                    className="w-full group rounded-md bg-teal-700 hover:bg-teal-800 text-white"
                  >
                    Download for Android
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* iOS Option (Coming Soon) */}
          <motion.div
            variants={item}
            className="relative"
            onMouseEnter={() => setHoveredCard("ios")}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="h-full rounded-2xl border border-white/20 bg-white/20 backdrop-blur-lg p-8 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/10 to-teal-400/10 opacity-50 z-0 group-hover:opacity-70 transition-opacity"></div>
              <div className="relative z-10">
                <div className="bg-white/30 backdrop-blur-md w-16 h-16 rounded-xl flex items-center justify-center mb-6 shadow-sm">
                  <Apple className="w-8 h-8 text-emerald-800" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-green-900">iOS</h3>
                <p className="text-green-800 mb-6">
                  iOS version is currently in development. Sign up to be
                  notified when it launches.
                </p>
                <motion.div
                  initial={{ opacity: 0.8 }}
                  animate={{
                    opacity: hoveredCard === "ios" ? 1 : 0.8,
                    y: hoveredCard === "ios" ? -5 : 0,
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <Button className="w-full group rounded-md border-2 border-emerald-700 text-black bg-emerald-700/10 hover:bg-emerald-700/50">
                    Coming Soon
                    <span className="ml-2 inline-flex items-center rounded-full bg-white/40 backdrop-blur-sm px-2.5 py-0.5 text-xs font-medium text-emerald-800">
                      Notify Me
                    </span>
                  </Button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Additional Info */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <div className="inline-block px-6 py-4 rounded-xl bg-white/30 backdrop-blur-sm">
            <p className="text-green-800">
              All downloads include automatic updates and 24/7 support.
              <br />
              By downloading, you agree to our{" "}
              <a
                href="#"
                className="text-green-700 font-medium hover:underline"
              >
                Terms of Service
              </a>{" "}
              and{" "}
              <a
                href="#"
                className="text-green-700 font-medium hover:underline"
              >
                Privacy Policy
              </a>
              .
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
