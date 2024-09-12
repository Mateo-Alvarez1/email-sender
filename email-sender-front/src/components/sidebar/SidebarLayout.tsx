import burger from "../../assets/burgerMenu.svg";
import users from "../../assets/users.svg";
import email from "../../assets/email.svg";
import template from "../../assets/template.svg";
import logout from "../../assets/logout.svg";

import { Button } from "../ui/button";
export const SidebarLayout = () => {
  return (
    <div className="bg-zinc-900 lg:w-1/5 lg:h-screen h-24 flex flex-col justify-center lg:justify-between">
      <div className="  flex justify-between lg:justify-normal px-12 lg:px-0 lg:flex-col items-center lg:items-start">
        <h1 className="text-2xl text-center mx-0 lg:mx-auto text-medium font-semibold text-white lg:mt-12">
          EmailSender
        </h1>
        <img className="lg:hidden" src={burger} alt="burger" />
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
    </div>
  );
};
