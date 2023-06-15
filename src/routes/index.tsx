import { component$, } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
// import { Banner } from '~/components/banner/banner';

export default component$(() => {

  return (
    <section>
      <div class="absolute z-20 bg-black h-full w-full animate-present-curtain"></div>
      <div class="fixed h-full w-full flex flex-col justify-center items-center p-4">
        <div class="flex flex-col items-center">
          <h1 class="text-white m-4 text-6xl md:text-9xl drop-shadow-lg font-Ubuntu  tracking-widest animate-fade animate-delay-1000 animate-ease-linear animate-normal animate-fill-both"><span>&lt;</span>Yigs<span>&gt;</span></h1>
          {/* <div class=" my-4 h-1 w-3/4 bg-white rounded-full animate-fade-up animate-once animate-delay-[1150ms] animate-ease-out"></div> */}
          <h2 class="text-white m-1 text-xl md:text-2xl line-clamp-1 font-semibold drop-shadow-lg  tracking-widest animate-fade animate-delay-[1250ms] animate-ease-linear animate-normal animate-fill-both">Fullstack Developer</h2>
        </div>
        <div class="grid grid-cols-3 place-items-center m-2 w-1/3">
          <img class=" aspect-square place-self-end w-1/2 drop-shadow-2xl animate-fade-up animate-once animate-delay-[1500ms] animate-ease-out" src="/svg/angular-seeklogo.com.svg" alt="Angular logo" width={150} height={150} />
          <img class=" aspect-square place-self-center w-1/2 drop-shadow-2xl animate-fade-up animate-once animate-delay-[1750ms] animate-ease-out" src="/svg/ionic-seeklogo.com.svg " alt="Ionic logo" width={150} height={150} />
          <img class=" aspect-square place-self-start w-1/2 drop-shadow-2xl animate-fade-up animate-once animate-delay-[2000ms] animate-ease-out" src="/svg/nestjs-seeklogo.com.svg" alt="Nest logo" width={150} height={150} />
        </div>
      </div>
    </section>

    // <div class="h-screen flex flex-col">
    //   <Banner></Banner>
    // </div>
  );
});

export const head: DocumentHead = {
  title: 'Yigs Portfolio',
  meta: [
    {
      name: 'description',
      content: 'Portfolio of Yigs builded whith Qwik',
    },
  ],
};


