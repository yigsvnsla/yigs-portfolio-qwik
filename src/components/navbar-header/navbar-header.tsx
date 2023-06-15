import { component$ } from "@builder.io/qwik";
import { Link, useLocation } from "@builder.io/qwik-city";
// import { HiBars4Solid } from '@qwikest/icons/heroicons'

type route = { title: string, path: string, icon?: string, isActive?: false }
type routes = route[]

export const NavbarHeader = component$(() => {
  const location = useLocation();
  const routeActive = (routeLocation: string) => {
    const routePaths = routeLocation.split('/').filter(p => p != '')
    const activePath = routePaths[routePaths.length - 1]
    return `/${activePath ?? ''}`
  }
  const routes: routes = [
    {
      title: 'home',
      path: '/',
    },
    {
      title: 'proyects',
      path: '/proyects',
    },
    {
      title: 'about',
      path: '/about',
    },
    {
      title: 'contact',
      path: '/contact',
    }
  ]

  return (
    <>
      <header class="w-full z-10 fixed drop-shadow-lg ">
        <nav class="bg-white border-gray-200 dark:bg-gray-900 ">
          <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <Link href="/" class="flex items-center">
              <span class="self-center text-2xl font-semibold font-Ubuntu whitespace-nowrap dark:text-white"><span>&lt;</span>Yigs<span>&gt;</span></span>
            </Link>
            <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
              <span class="sr-only">Open main menu</span>
              <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
            </button>
            <div class="hidden w-full md:block md:w-auto" id="navbar-default">
              <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                {routes.map((p, i) => {
                  const activeClass = p.path === routeActive(location.url.pathname)
                  return (
                    <li key={i}>
                      <Link href={p.path} class={[{ 'underline-offset-8 underline text-white': activeClass, 'no-underline text-gray-200': !activeClass }, "block py-2 pl-3 pr-4 rounded md:bg-transparent md:p-0 "]} aria-current="page">{p.title.toUpperCase()}</Link>
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  )
});

