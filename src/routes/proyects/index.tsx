import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { ProyectBanner } from "~/components/proyects-banner/proyect-banner";

export default component$(() => {
  return (
    <div class="h-screen">
      <ProyectBanner></ProyectBanner>
    </div>
  )
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
