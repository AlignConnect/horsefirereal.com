"use client"
import dynamic from 'next/dynamic'
import { Noto_Serif_Devanagari } from 'next/font/google'
import React from 'react'
import { useEffect } from 'react'
import './components/main.css'

const Newheader = dynamic(() => {
  return import("./components/newComponents/Header")
})


const Section1 = dynamic(() => {
  return import("./components/newComponents/Section1")
})

const Section2 = dynamic(() => {
  return import("./components/newComponents/Section2")
})


const ReviewSection = dynamic(() => {
  return import('@/app/ahf/components/CustomerReview')
})



const BottomPopup = dynamic(() => {
  return import("./components/newComponents/BottomPopup")
})



const Footer = dynamic(() => import('@/app/commonUse/Footer'))

const noto = Noto_Serif_Devanagari({
  subsets: ["devanagari"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
const page = () => {


  useEffect(() => {

    localStorage.setItem("PATH_KEY", "/")
    localStorage.setItem("PATH", "/")

  }, [])


  return (
    <main className={`bg-white fontNoto`}>
      <title>Horse Fire Tablet</title>
      <section className="sm:w-[70%] fontNoto mx-auto  text-black text-[1.1rem] sm:text-xl">

        <Newheader />
        <Section1 />
        <Section2 />
        <ReviewSection />
        <Footer />

        <div className='pb-7'>
          <BottomPopup />
        </div>

      </section>
    </main>
  )
}

export default page
