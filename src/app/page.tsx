'use client'

import React from 'react'
import { RawImg } from '@/components'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#224175] text-white">
      {/* Top navigation is rendered in layout */}

      <section tabIndex={-1} className="relative w-full min-w-[980px]">
        <div className="absolute inset-0 overflow-hidden">
          {/* Decorative layers (kept for layout parity) */}
        </div>

        <div className="pointer-events-none relative w-full">
          <div className="grid grid-cols-1 grid-rows-1 pointer-events-none w-full">
            <div className="relative h-[363px] w-[375px] mt-[33px] ml-[calc(50%_-_490px)] left-[301px] cursor-pointer">
              <a href="https://www.theoverhear.app/about" target="_self" className="block h-full w-full">
                <RawImg
                  fetchpriority="high"
                  alt="low res overhear icon.png"
                  width={375}
                  height={363}
                  image="https://static.wixstatic.com/media/948c86_0292b7e48fc24fe89f9bba9ecdd6eb60~mv2.png/v1/fill/w_750,h_726,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/low%20res%20overhear%20icon.png"
                  className="object-cover h-full w-full"
                />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section tabIndex={-1} className="relative w-full min-w-[980px]">
        <div className="absolute inset-0 bg-[#234176]" />
        <div className="pointer-events-none relative w-full">
          <div className="grid grid-cols-1 grid-rows-[min-content_1fr] pointer-events-none w-full">
            <div className="relative w-[978px] mx-[calc(50%_-_490px)] mt-6 text-center">
              <h5 className="text-[114px] leading-[159.6px] font-light text-[#b2bde6]">
                <span className="text-white">OVERHEAR</span>
              </h5>
            </div>

            <div className="relative w-[455px] mx-[calc(50%_-_490px)] mt-0 mb-8 pointer-events-none">
              <div className="relative w-[455px]">
                <div className="grid grid-cols-1 grid-rows-1 w-full">
                  <div className="relative h-[60px] w-[195px] cursor-pointer">
                    <a
                      href="https://itunes.apple.com/us/app/overhear/id1279424977?mt=8"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="block h-full w-full"
                    >
                      <RawImg
                        fetchpriority="high"
                        alt="Apple-Store-Logo"
                        width={195}
                        height={60}
                        image="https://static.wixstatic.com/media/948c86_921596082c98461fafc61aa9a7c9f10c~mv2.png/v1/fill/w_390,h_120,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Apple-Store-Logo.png"
                        className="object-cover h-full w-full"
                      />
                    </a>
                  </div>

                  <div className="relative h-[60px] w-[204px] cursor-pointer left-[251px] top-0">
                    <a
                      href="https://play.google.com/store/apps/details?id=com.birmingham.overhear"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="block h-full w-full"
                    >
                      <RawImg
                        fetchpriority="high"
                        alt="download-google-play-store-logo.png"
                        width={204}
                        height={60}
                        image="https://static.wixstatic.com/media/948c86_eda9e0096944455c830e8d0ccb12a996~mv2.png/v1/fill/w_408,h_120,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/download-google-play-store-logo.png"
                        className="object-cover h-full w-full"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  )
}
