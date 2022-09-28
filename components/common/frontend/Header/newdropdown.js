<div x-data="{ open: false }" @mouseleave="open = false" className="relative">
            <!-- Dropdown toggle button -->
            <button @mouseover="open = true" className="flex items-center block p-2 bg-white bg-gray-100 rounded-md ">
                <span className="mr-4">Dropdown Hover</span>
                <svg className="w-6 h-6 text-white text-gray-800" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                    fill="currentColor">
                    <path fill-rule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clip-rule="evenodd" />
                </svg>
            </button>

            <!-- Dropdown menu -->
            <div x-show="open"
            x-transition:enter.duration.500ms
            x-transition:leave.duration.800ms
            className="absolute right-0 w-48 py-2 mt-2 bg-white bg-gray-100 rounded-md shadow-xl">
                <a href="#"
                    className="block px-4 py-2 text-sm text-gray-300 text-gray-700 hover:bg-gray-400 hover:text-white">
                    Dropdown List 1
                </a>
                <a href="#"
                    className="block px-4 py-2 text-sm text-gray-300 text-gray-700 hover:bg-gray-400 hover:text-white">
                    Dropdown List 2
                </a>
                <a href="#"
                    className="block px-4 py-2 text-sm text-gray-300 text-gray-700 hover:bg-gray-400 hover:text-white">
                    Dropdown List 3
                </a>
                <a href="#"
                    className="block px-4 py-2 text-sm text-gray-300 text-gray-700 hover:bg-gray-400 hover:text-white">
                    Dropdown List 4
                </a>
            </div>
        </div>