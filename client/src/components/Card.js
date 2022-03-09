import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Card() {
  AOS.init({
    duration: 1500
  })
  return (
  <>
      <section data-aos="fade-down" class="hero py-12">
        <div class="container flex items-center justify-between ">
          <div class="w-5/2 mx-100">
            <h6 class="text-2xl "><em>Are you hungry?</em></h6>
            <h1 class="text-3xl md:text-6xl font-bold">Don't wait !</h1>
            <a href="/menu"><button class="px-6 py-2 rounded-full text-white font-bold mt-4 btn-primary">Order Now</button></a>
          </div>
          <div class="w-1/2">
            <img src="/img/hero-pizza.png" alt="" />
          </div>
        </div>
      </section>    
  </>);
}
