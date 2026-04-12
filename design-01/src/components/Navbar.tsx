import React from "react";

const Navbar = () => {
  return (
    <div className="w-full flex items-center justify-center px-8 py-6  ">
      <div className="nav-items flex gap-10 items-center justify-center border rounded-full px-2 py-2  border-black/35">
        <div className="logo rounded-full overflow-hidden size-12">
          <img
            className="w-full grayscale  hover:rotate-180 duration-300 cursor-pointer transition-all  h-full "
            src="https://tse1.mm.bing.net/th/id/OIP.o2F5YXpR3Mb4J84vkOOlnwHaHT?rs=1&pid=ImgDetMain&o=7&rm=3"
            alt="disk"
          />
        </div>
        <li className="text-zinc-900/80 font-semibold list-none text-lg px-2 py-2">Projects</li>
        <li className="text-zinc-900/80 font-semibold list-none text-lg px-2 py-2">Solutions</li>
        <li className="text-zinc-900/80 font-semibold list-none text-lg px-2 py-2">Pricing</li>
        <li className="text-zinc-900/80 font-semibold list-none text-lg px-2 py-2">Company</li>
        <li className="text-zinc-900/80 font-semibold list-none text-lg px-2 py-2">Support</li>
        <button className="bg-neutral-900 rounded-full text-lg text-white px-3 py-1 " >Try For Free</button>
      </div>
    </div>
  );
};

export default Navbar;
