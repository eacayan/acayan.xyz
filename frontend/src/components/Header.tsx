import { useState } from "react";
import Sidebar from "./Sidebar";

import { MENU_ITEMS } from "../constants";

const Header = () => {
	const [open, setOpen] = useState<boolean>(false);

	const handleOpen = () => setOpen(!open);

	return (
		<header className="flex h-[8vh] w-full items-center justify-between py-5 px-6 md:justify-end md:py-8 md:px-9 md:pb-0">
			<a href="/" className="md:hidden">
				<img src="icons/logo.svg" className="w-8 " />
			</a>
			<div className="flex items-center">
				<button className="md:hidden" onClick={() => setOpen(!open)}>
					<img src="icons/menu.svg" alt="Navigation Menu" />
				</button>
				<Sidebar open={open} onHandleOpen={handleOpen} />
				<ul className="hidden divide-x divide-gray-600 text-white md:flex md:items-center">
					{MENU_ITEMS?.map(({ title, href }, i) => (
						<li key={title} className={i === 0 ? "pr-6" : i === MENU_ITEMS.length - 1 ? "pl-6" : "px-6"}>
							<a className="group transition-all duration-300 ease-in-out hover:text-rose-500" href={href}>
								<span className="bg-gradient-to-r from-rose-600 to-yellow-600 bg-[length:0%_2px] bg-left-bottom bg-no-repeat transition-all duration-500 ease-out group-hover:bg-[length:100%_2px] md:text-xl lg:text-2xl">
									{title}
								</span>
							</a>
						</li>
					))}
				</ul>
			</div>
		</header>
	);
};

export default Header;
