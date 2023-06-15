import { component$ } from "@builder.io/qwik";
import { HiBriefcaseSolid, HiUserSolid } from "@qwikest/icons/heroicons"
import { ProyectCards } from "../proyects-cards/proyect-cards";

export const ProyectBanner = component$(() => {
  return (
    <section class="w-full h-full">
      {/* <div class="absolute z-20 bg-black h-full w-full animate-present-curtain"></div> */}
      <div class=" flex flex-col justify-center items-center p-4">
        <div class="flex flex-col items-center ">
          <h1 class="text-white text-center m-2 text-6xl md:text-9xl mt-[30vh] drop-shadow-lg font-Ubuntu  tracking-widest animate-fade animate-delay-1000 animate-ease-linear animate-normal animate-fill-both">Proyects</h1>
          <h2 class="text-white text-center m-2 mb-6 md:text-2xl  font-semibold drop-shadow-lg tracking-widest animate-fade animate-delay-[1250ms] animate-ease-linear animate-normal animate-fill-both">list to my personal and professional proyects</h2>
        </div>
        <div class="grid  grid-cols-2 rounded-md shadow-sm" role="group">
          <button type="button" class="justify-center inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border border-gray-900 rounded-l-lg hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700">
            <HiBriefcaseSolid class="text-white mr-2" />
            <label>Professionals</label>
          </button>
          <button type="button" class="justify-center inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border border-gray-900 rounded-r-md hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700">
            <HiUserSolid class="text-white mr-2" />
            <label>Personals</label>
          </button>
        </div>
        <div class="grid mt-[25vh] sm:grid-cols-2 md:grid-cols-3 gap-4">
          < ProyectCards></ProyectCards>
          < ProyectCards></ProyectCards>
          < ProyectCards></ProyectCards>
          < ProyectCards></ProyectCards>
          < ProyectCards></ProyectCards>
          < ProyectCards></ProyectCards>
          < ProyectCards></ProyectCards>
          < ProyectCards></ProyectCards>
          < ProyectCards></ProyectCards>
          < ProyectCards></ProyectCards>
          < ProyectCards></ProyectCards>
          < ProyectCards></ProyectCards>
          < ProyectCards></ProyectCards>
          < ProyectCards></ProyectCards>
        </div>
      </div>
      {/* <div class="mt-[10%] p-4">
        <h1 class="text-6xl font-extrabold leading-none tracking-tight ">Proyects</h1>
        <div class=" my-4 h-1 w-3/4 bg-primary rounded-full"></div>
        <h2 class="text-2xl font-extrabold leading-none tracking-tight ">list to my personal and professional proyects</h2>
      </div> */}

    </section>
  )
});
