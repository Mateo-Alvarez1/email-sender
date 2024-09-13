import burger from "../../assets/burgerMenu.svg";
import users from "../../assets/users.svg";
import email from "../../assets/email.svg";
import template from "../../assets/template.svg";
import logout from "../../assets/logout.svg";
import x from "../../assets/x.svg";
import { Button } from "../ui/button";
import { useState } from "react";
import { Contacts } from "../contacts/Contacts";
export const SidebarLayout = () => {
  const [enable, setEnable] = useState(false);

  return (
    <div className="block lg:flex">
      <div className="bg-zinc-900 lg:w-1/5 lg:h-screen h-24 flex flex-col justify-center lg:justify-between">
        <div className="flex justify-between lg:justify-normal px-12 lg:px-0 lg:flex-col items-center lg:items-start">
          <h1 className="text-2xl text-center mx-0 lg:mx-auto text-medium font-semibold text-white lg:mt-12">
            EmailSender
          </h1>
          <img
            onClick={() => setEnable(!enable)}
            className="lg:hidden"
            src={burger}
            alt="burger"
          />
          <ul className="hidden pl-8 mt-10 lg:flex items-start flex-col text-white">
            <h2 className="font-medium text-xl">Managment</h2>
            <div className="pl-2 mt-2 flex flex-col">
              <a className="text-gray-200 text-lg pt-4 font-normal cursor-pointer flex hover:text-gray-300">
                <img src={users} alt="users" className="w-6 mr-1" /> Contacts
              </a>
              <a className="text-gray-200 text-lg pt-4 font-normal cursor-pointer flex hover:text-gray-300">
                <img src={email} alt="emails" className="w-6 mr-1" /> Emails
              </a>
              <a className="text-gray-200 text-lg pt-4 font-normal cursor-pointer flex hover:text-gray-300">
                <img src={template} alt="template" className="w-6 mr-1" />{" "}
                Template
              </a>
            </div>
          </ul>
        </div>
        <div>
          <Button className="hidden w-10/12 mx-auto text-normal lg:flex items-center text-gray-200 my-5 outline outline-1 outline-gray-300 hover:bg-zinc-400 hover:bg-opacity-20">
            <img src={logout} className="w-6 mr-2 " alt="logout" />
            Sign Out
          </Button>
        </div>

        <div
          className={`fixed top-0 right-0 h-screen w-72 bg-zinc-900  transform transition-transform duration-300 ${
            enable ? "translate-x-0" : "translate-x-full"
          } lg:hidden`}
        >
          <div
            className="absolute top-4 right-4 text-white cursor-pointer"
            onClick={() => setEnable(false)}
          >
            <img className="w-6" src={x} alt="" />
          </div>
          <div className="pl-8 mt-20 flex items-start justify-between flex-col text-white">
            <h2 className="font-medium text-xl">Managment</h2>
            <div className="pl-2 mt-2 flex flex-col">
              <a className="text-gray-200 text-lg pt-4 font-normal cursor-pointer flex hover:text-gray-300">
                <img src={users} alt="users" className="w-6 mr-1" /> Contacts
              </a>
              <a className="text-gray-200 text-lg pt-4 font-normal cursor-pointer flex hover:text-gray-300">
                <img src={email} alt="emails" className="w-6 mr-1" /> Emails
              </a>
              <a className="text-gray-200 text-lg pt-4 font-normal cursor-pointer flex hover:text-gray-300">
                <img src={template} alt="template" className="w-6 mr-1" />{" "}
                Template
              </a>
            </div>
            <div>
              <Button className="w-10/12 fixed bottom-0 mx-auto text-normal lg:flex items-center text-gray-200 my-5 outline outline-1 outline-gray-300 hover:bg-zinc-400 hover:bg-opacity-20">
                <img src={logout} className="w-6 mr-2 " alt="logout" />
                Sign Out
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Contacts />
    </div>
  );
};
