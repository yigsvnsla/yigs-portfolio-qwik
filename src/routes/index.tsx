import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { Banner } from '~/components/banner/banner';
import { NavbarHeader } from '~/components/navbar-header/navbar-header';
import { About } from '~/components/about/about';

export default component$(() => {


  return (
    <>
      <NavbarHeader></NavbarHeader>
      <Banner></Banner>
      {/* <About></About> */}
    </>
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
