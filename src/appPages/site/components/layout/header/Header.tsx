'use client';
import React, { FC, useEffect, useState } from 'react';
import scss from './Header.module.scss';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
	{
		label: 'Home',
		href: '/'
	},
	{
		label: 'About',
		href: '/about'
	}
];

const Header: FC = () => {
	const [headerScroll, setHeaderScroll] = useState<boolean>(false);
	const [isMobile, setIsMobile] = useState(true);
	const pathname = usePathname();

	useEffect(() => {
		const changeHeader = () => {
			if (window.scrollY >= 10) {
				setHeaderScroll(true);
			} else {
				setHeaderScroll(false);
			}
		};

		changeHeader();
		window.addEventListener('scroll', changeHeader);

		return () => {
			window.removeEventListener('scroll', changeHeader);
		};
	}, []);

	useEffect(() => {
		const changeIsMobile = () => {
			if (window.innerWidth < 1000) {
				setIsMobile(true);
			} else {
				setIsMobile(false);
			}
		};

		changeIsMobile();
		window.addEventListener('resize', changeIsMobile);

		return () => {
			window.removeEventListener('resize', changeIsMobile);
		};
	}, []);

	// const logout = () => {
	// 	window.open(
	// 		`${process.env.NEXT_PUBLIC_API_URL}/api/v1/auth/logout`,
	// 		'_self'
	// 	);
	// };

	return (
		<>
			<header className={scss.header}>
				<div
					className={
						headerScroll ? `${scss.scroll} ${scss.active}` : `${scss.scroll}`
					}
				>
					<div className="container">
						<div className={scss.content}>
							<div className={scss.left}>
								<div className={scss.logo}>
									<a
										href={process.env.NEXT_PUBLIC_API_URL}
										className={`${scss.logo_link}`}
									>
										Elcho<span>Crud</span>
									</a>
								</div>
								{!isMobile && (
									<nav className={scss.nav}>
										<ul>
											{links.map((item, index) => (
												<li key={index}>
													<Link
														className={
															pathname === item.href
																? `${scss.link} ${scss.active}`
																: `${scss.link}`
														}
														href={item.href}
													>
														{item.label}
													</Link>
												</li>
											))}
										</ul>
									</nav>
								)}
							</div>
							<div className={scss.right}>
								<button>Login</button>
							</div>
						</div>
					</div>
				</div>
			</header>
		</>
	);
};
export default Header;
