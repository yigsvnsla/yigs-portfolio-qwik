import { component$ } from "@builder.io/qwik";



export const Banner = component$(() => {
  return (
    <>
      <section class=" h-full flex flex-col md:flex-row items-center justify-end md:justify-center p-4">
        <div class="drop-shadow-lg flex flex-col items-center animate-fade-up animate-ease-in-out animate-fill-forwards">
          <h1 class=" text-6xl font-extrabold leading-none tracking-tight text-gray-900 ">Hi, I'm <span class="font-bold text-primary font-hubotSans">&lt;Yigs/&gt;</span></h1>
          <div class=" my-4 h-1 w-3/4 bg-primary rounded-full"></div>
          <h2 class="text-2xl font-semibold leading-none tracking-tight">FullStack Developer</h2>
          <div class=" max-w-xs grid items-center grid-cols-3 p-4 justify-items-center animate-fade animate-delay-[400ms]">
            <img class=" w-1/2 drop-shadow-2xl" src="/svg/angular-seeklogo.com.svg" alt="Angular logo" width={256} height={272}/>
            <img class=" w-1/2 drop-shadow-2xl" src="/svg/ionic-seeklogo.com.svg" alt="Ionic logo" width={512} height={512}/>
            <img class=" w-1/2 drop-shadow-2xl" src="/svg/nestjs-seeklogo.com.svg" alt="Nest logo" width={256} height={255}/>
          </div>
        </div>
        <div>
          <img class="drop-shadow-2xl" src="/gif/dev3.webp" alt="gif to developer coding" width={680} height={428}/>
        </div>
      </section>
    </>
  )
});
