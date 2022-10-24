import { Transition } from "@headlessui/react";

import { MENU_ITEMS } from "../constants";

interface ISidebarProps {
	open: boolean;
	onHandleOpen: (e: React.UIEvent<HTMLButtonElement | HTMLDivElement>) => void;
}

const Sidebar = ({ open = false, onHandleOpen }: ISidebarProps) => (
	<>
		<Transition show={open}>
			<Transition.Child
				className="fixed right-0 top-0 z-30 h-screen w-[60vw]"
				enter="transition ease-in-out duration-300 transform"
				enterFrom="translate-x-full"
				enterTo="translate-x-0"
				leave="transition ease-in-out duration-300 transform"
				leaveFrom="translate-x-0"
				leaveTo="translate-x-full"
			>
				<div
					id="sidebar"
					className="fixed right-0 top-0 z-50 flex h-screen w-[60vw] flex-col items-center bg-zinc-900 p-8"
				>
					<button className="self-end" onClick={onHandleOpen} aria-expanded={open} aria-controls="sidebar">
						<img src="images/close.svg" className="w-8 sm:w-12" alt="Close Sidebar" />
					</button>
					<ul className="mt-60 flex flex-col items-center space-y-8 sm:mt-44 sm:space-y-14">
						{MENU_ITEMS?.map(({ title, href }) => (
							<li key={title}>
								<a
									className="group text-[1.75rem] text-white transition-all duration-300 ease-in-out hover:text-rose-500 sm:text-5xl"
									href={href}
								>
									<span className="bg-gradient-to-r from-rose-600 to-yellow-600 bg-[length:0%_2px] bg-left-bottom bg-no-repeat transition-all duration-500 ease-out group-hover:bg-[length:100%_2px] md:text-xl">
										{title}
									</span>
								</a>
							</li>
						))}
					</ul>
				</div>
			</Transition.Child>
			<Transition.Child
				enter="transition-opacity ease-linear duration-100"
				enterFrom="opacity-0"
				enterTo="opacity-100"
				leave="transition-opacity ease-linear duration-100"
				leaveFrom="opacity-100"
				leaveTo="opacity-0"
			>
				<div onClick={onHandleOpen} className="fixed inset-0 z-10 h-full w-full bg-main opacity-80"></div>
			</Transition.Child>
		</Transition>
	</>
);

export default Sidebar;
