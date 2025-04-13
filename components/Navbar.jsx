import {
  Button,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
// import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { IoMenu } from "react-icons/io5";
import { IoIosClose } from "react-icons/io";
import { useState } from "react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const [navigation, setNavigation] = useState([
    { name: "Home", href: "/", current: true },
    { name: "Services", href: "#services", current: false },
    { name: "About Me", href: "#about", current: false },
    { name: "My Stack", href: "#stack", current: false },
    { name: "Projects", href: "#projects", current: false },
    { name: "Contact", href: "#contact", current: false },
  ]);

  const changeSection = (e) => {
    const clickedHref = new URL(e.target.href).hash || "/";

    setNavigation((prevNav) =>
      prevNav.map((item) =>
        item.href === clickedHref
          ? { ...item, current: true }
          : { ...item, current: false }
      )
    );
  };
  return (
    <Disclosure
      as="nav"
      className="bg-[#5a31a6] sticky top-0 z-20 rounded-b-4xl"
    >
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative  flex h-20 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-black hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <IoMenu
                aria-hidden="true"
                className="block size-6 group-data-open:hidden"
              />
              <IoIosClose
                aria-hidden="true"
                className="hidden size-6 group-data-open:block"
              />
            </DisclosureButton>
          </div>
          <div className="flex flex-1  items-center justify-center sm:items-stretch md:justify-start">
            <div className="flex shrink-0 items-center">
              <img alt="Portfolio Logo" src="logo.png" className="h-8 w-auto" />
            </div>
            <div className="hidden  w-full sm:ml-6 md:block">
              <div className="flex justify-center space-x-4">
                {navigation.map((item) => (
                  <a
                    onClick={(e) => changeSection(e)}
                    key={item.name}
                    href={item.href}
                    aria-current={item.current ? "page" : undefined}
                    className={classNames(
                      item.current
                        ? "bg-white text-black"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white",
                      "rounded-md px-3 py-2 text-sm font-medium"
                    )}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <Button className="inline-flex items-center gap-2 rounded-md bg-black py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white">
              <a
                href="https://www.linkedin.com/in/muhammad-rehab-167b90216/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white no-underline"
              >
                Let's Connect
              </a>
            </Button>
          </div>
        </div>
      </div>

      <DisclosurePanel className="sticky top-0 md:hidden">
        <div className="space-y-1 px-2 pt-2 pb-3">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              aria-current={item.current ? "page" : undefined}
              className={classNames(
                item.current
                  ? "bg-white text-black"
                  : "text-gray-300 hover:bg-gray-700 hover:text-white",
                "block rounded-md px-3 py-2 text-base font-medium"
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}
