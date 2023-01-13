export const SidebarUser = () => {
  return (
    <>
      <aside class=" text-orange-100 border-2 rounded-md border-blue-900 m-2 vy-sm:mt-4 vy-sm:mx-4 vy-sm:w-auto sm:my-6 sm:mx-10 md:h-60 md:mr-2 md:ml-8 md:mt-8 lg:h-60 lg:my-10 lg:mr-4 lg:ml-12">
        <div class="mx-0 px-1 py-1 overflow-y-auto rounded bg-base-300 ">
          <div class=" ml-2 mt-1 mb-1 vy-sm:text-2xl sm:pb-1 md:pb-1 md:text-2xl lg:ml-6 lg:text-4xl font-bold  text-primary-focus ">
            CallCenter
          </div>
          <ul class="pt-2 md:pt-2 space-y-1 md:space-y-4">
            <li>
              <a
                href="#"
                class="text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-sky-500 flex items-center p-2 text-sm md:text-sx    md:px-1 lg:text-base font-normal"
              >
                <svg
                  aria-hidden="true"
                  class="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-gray-500 transition duration-75 dark:text-gray-200 group-hover:text-gray-900 dark:group-hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                  <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                </svg>
                <span class="ml-3 md:ml-1 lg:ml-4 ">Panel de control</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                class="text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-sky-500 flex items-center p-2 text-sm md:text-sx   md:px-1 lg:text-base font-normal"
              >
                <svg
                  aria-hidden="true"
                  class="flex-shrink-0 w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-gray-500 transition duration-75 dark:text-gray-200 group-hover:text-gray-900 dark:group-hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span class="flex-1 ml-3 md:ml-1 lg:ml-4 whitespace-nowrap">Usuario</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                class=" text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-sky-500 flex items-center p-2 text-sm md:text-sx md:px-1 lg:text-base font-normal"
              >
                <svg
                  aria-hidden="true"
                  class="flex-shrink-0 w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-gray-500 transition duration-75 dark:text-gray-200 group-hover:text-gray-900 dark:group-hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"></path>
                  <path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"></path>
                </svg>
                <div class="flex-1 ml-3 md:ml-1 lg:ml-4 whitespace-nowrap">
                  Panel de administración
                </div>
                <div class=" text-blue-600 bg-blue-200 rounded-full dark:bg-blue-900 dark:text-blue-200 inline-flex flex-none items-center justify-center text-sm font-medium w-2 h-3 p-3 ml-1 mr-2 md:mr-6 ">
                  3
                </div>
              </a>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
};
