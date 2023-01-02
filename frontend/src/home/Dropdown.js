import { Fragment, useContext } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Link } from "react-router-dom";
import { ThemeContext } from "../App";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Dropdown = () => {
  const { user, setUser } = useContext(ThemeContext);
  return (
    <Menu as="div" className="relative inline-block text-left">
        <Menu.Button className="flex items-center">
        <img className="w-8 mx-2 rounded-full" src={user.img || "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"} alt="" />
          {user.name}
        <ChevronDownIcon className="-mr-1 ml-1 h-5 w-5" aria-hidden="true" />
        </Menu.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-[white] shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1 px-2">
            <Menu.Item>
              {({ active }) => (
                <Link
                  to="/profile"
                  className={classNames(
                    active ? "bg-[#acb0a4] rounded-md" : "",
                    "block px-4 py-2 text-sm text-center"
                  )}
                >
                  Profile settings
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link
                  to="/enrollcourses"
                  className={classNames(
                    active ? "bg-[#acb0a4] rounded-md" : "",
                    "block px-4 py-2 text-sm text-center"
                  )}
                >
                  Enrolled Course
                </Link>
              )}
            </Menu.Item>
            {/* <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? "bg-[#acb0a4] rounded-md" : "",
                    "block px-4 py-2 text-sm text-center"
                  )}
                >
                  Change Password
                </a>
              )}
            </Menu.Item> */}
            <div>
              <Menu.Item>
                {({ active }) => (
                  <button
                    type="submit"
                    className={classNames(
                      active ? "bg-[#acb0a4] rounded-md" : "",
                      "block w-full px-4 py-2 text-sm text-center"
                    )}
                    onClick={() => {
                      setUser(null);
                      localStorage.clear("user");
                    }}
                  >
                    Log out
                  </button>
                )}
              </Menu.Item>
            </div>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default Dropdown;
