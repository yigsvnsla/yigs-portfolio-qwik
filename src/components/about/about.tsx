import { component$ } from "@builder.io/qwik";

export const About = component$(() => {
  return (
    <>
      <section class="bg-primary text-white">
        <div class="w-full text-center">
          <h2 class="text-6xl font-hubotSans font-bold drop-shadow-lg">About Me 💻</h2>
          <h4 class="text-2xl font-hubotSans font-bold">My name is Jesús Guzmán🦦, give 24 years and am from Venezuela </h4>
        </div>

        <div class="max-w-2xl mx-auto my-10">
          <div class="w-full h-11 rounded-t-lg bg-gray-200 flex justify-start items-center space-x-1.5 px-3">
            <span class="w-3 h-3 rounded-full bg-red-400"></span>
            <span class="w-3 h-3 rounded-full bg-yellow-400"></span>
            <span class="w-3 h-3 rounded-full bg-green-400"></span>
          </div>
          <div class="bg-gray-100 border-t-0 w-full h-80 p-4">
            <span class="font-bold font-roboto text-[#37B289]">
              /*
              <div class="ml-4">
                <span>I'm a senior frontend developer with notable experience in Angular, Ionic, and Nest. worked with others tools such as Strapi, React and Qwik.</span>
                <br />
                <br />
                <span class="">My approach is based on creating solid and efficient web solutions, applying the fundamental concepts of development.</span>
                <br />
                <br />
                <span>With technical skills and a results-oriented approach, I can face challenging projects and contribute to the success of the team.</span>
              </div>
              */
            </span>
            <br />
            <span>
              <label class="drop-shadow-lg text-green-600 font-bold">yigs@DESKTOP-HE8L823:</label>
              <label class="drop-shadow-lg text-blue-700">/mnt/c/Users/Admin$</label>
            </span>
          </div>
        </div>
      </section>
    </>
  )
});
