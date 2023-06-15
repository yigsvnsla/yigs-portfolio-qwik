import { component$, Slot } from '@builder.io/qwik';
import { NavbarHeader } from '~/components/navbar-header/navbar-header';


export default component$(() => {
  return (
    <>
      <NavbarHeader></NavbarHeader>
      <Slot />
    </>
  );
});
