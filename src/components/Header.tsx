import { useState } from "react";
import { MENU_ITEMS } from "../constants";

const Header = () => {
	const [open, setOpen] = useState<boolean>(false);
	console.log(MENU_ITEMS);

	return (
		<header className="flex items-center justify-end py-5 px-6">
			{/* <div className="text-white">
				<a href="/">Logo</a>
			</div> */}
			<div className="flex items-center">
				<button className="md:hidden" onClick={() => setOpen(!open)}>
					<img src="images/menu.svg" alt="Navigation Menu" />
				</button>
				<ul className="hidden divide-x divide-gray-600 text-white md:flex md:items-center">
					{MENU_ITEMS?.map(({ title, href }, i) => (
						<li key={title} class={i === 0 ? "pr-6" : i === MENU_ITEMS.length - 1 ? "pl-6" : "pl-6 pr-6"}>
							<a className="group transition-all duration-300 ease-in-out hover:text-rose-500" href={href}>
								<span className="bg-gradient-to-r from-rose-600 to-yellow-600 bg-[length:0%_2px] bg-left-bottom bg-no-repeat transition-all duration-500 ease-out group-hover:bg-[length:100%_2px]">
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
