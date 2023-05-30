import { component$ } from "@builder.io/qwik";

export const Banner = component$(() => {
  return (
    <>
      <section class=" flex flex-col justify-end ">
        <div class="flex flex-col items-center animate-fade-up animate-ease-in-out animate-fill-forwards">
          <h1 class="text-[13vw] drop-shadow-lg text-center font-semibold font-hubotSans">Hi, i'm <span class="font-bold text-primary">&lt;Yigs/&gt;</span></h1>
          <div class="h-1 w-3/4 bg-primary rounded-full"></div>
          <h2 class="text-[6vw] drop-shadow-2xl text-center">FullStack Developer</h2>
          <div class="grid grid-cols-3 p-4 justify-items-center animate-fade animate-delay-[400ms]">
            <img class="w-1/2 drop-shadow-lg" src="/svg/angular-seeklogo.com.svg" alt="Angular logo" />
            <img class="w-1/2 drop-shadow-lg" src="/svg/ionic-seeklogo.com.svg" alt="Ionic logo" />
            <img class="w-1/2 drop-shadow-lg" src="/svg/nestjs-seeklogo.com.svg" alt="Nest logo" />
          </div>
        </div>
        <div>
          <img class="w-screen sm:hidden" src="/gif/person-dev.gif" alt="development gif" />
        </div>
      </section>



      {/* <section class="flex justify-between flex-col md:flex-row">
        <div class="text-center p-4 flex w-full justify-end">
          <div class="self-center hidden sm:block">
            <h1 class="text-6xl drop-shadow-lg">Hi i'm <span class="font-bold text-primary">&lt;Yigs/&gt;</span>👋</h1>
            <div class="inline-flex items-center justify-center w-full">
              <hr class="w-64 h-px  bg-primary border-0 drop-shadow-2xl" />
            </div>
            <h2 class="text-3xl drop-shadow-2xl">Angular Dev | Frontend Developer</h2>
            <div class="grid grid-cols-3 p-4 justify-items-center">
              <img class="w-1/2 drop-shadow-lg" src="/svg/angular-seeklogo.com.svg" alt="Angular logo" />
              <img class="w-1/2 drop-shadow-lg" src="/svg/ionic-seeklogo.com.svg" alt="Ionic logo" />
              <img class="w-1/2 drop-shadow-lg" src="/svg/nestjs-seeklogo.com.svg" alt="Nest logo" />
            </div>
          </div>
        </div>
        <img class="w-screen" src="/gif/person-dev.gif" alt="development gif" />
      </section>
      <div class=" -mt-[4.5rem]  h-20 w-full bg-primary hidden sm:block"></div> */}
    </>
  )
});
