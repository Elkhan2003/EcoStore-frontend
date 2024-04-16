'use client';
import React, { FC, useEffect, useState } from 'react';
import scss from './Header.module.scss';
import Image from 'next/image';
import logo from '@/assets/logo.png';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
	IconBrandFacebook,
	IconBrandInstagram,
	IconBrandWhatsapp,
	IconGridDots,
	IconHeart,
	IconScale,
	IconShoppingCart,
	IconUser
} from '@tabler/icons-react';
import { Input } from 'antd';
import { SearchProps } from 'antd/es/input';
import BurgerButton from '@/ui/burgerButton/BurgerButton';

const links = [
	{
		name: 'Главная',
		link: '/'
	},
	{
		name: 'О магазине',
		link: '/about'
	},
	{
		name: 'Доставка',
		link: '/delivery'
	},
	{
		name: 'FAG',
		link: '/fag'
	},
	{
		name: 'Контакты',
		link: '/contacts'
	}
];

const { Search } = Input;

const Header: FC = () => {
	const [headerScroll, setHeaderScroll] = useState<boolean>(false);
	const [isMobile, setIsMobile] = useState<boolean>(true);
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const pathname = usePathname();

	useEffect(() => {
		const changeHeader = () => {
			if (window.scrollY >= 77) {
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
			if (window.innerWidth < 1050) {
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

	const onSearch: SearchProps['onSearch'] = (value, _e, info) =>
		console.log(info?.source, value);

	return (
		<>
			<header className={scss.header}>
				{!isMobile ? (
					<>
						{/*!sup_header*/}
						<div className={scss.sup_header}>
							<div className="container">
								<div className={scss.content}>
									<Link className={scss.logo} href="/">
										<Image src={logo} alt="logo" priority />
									</Link>
									<nav className={scss.nav}>
										<ul>
											{links.map((item, index) => (
												<li key={index}>
													<Link
														className={
															pathname === item.link
																? `${scss.link} ${scss.active}`
																: `${scss.link}`
														}
														href={item.link}
													>
														{item.name}
													</Link>
												</li>
											))}
										</ul>
									</nav>
									<div className={scss.right}>
										<a className={scss.phone} href="#">
											+996 (400) 00-00-00
										</a>
										<button className={scss.profile}>
											<IconUser stroke={2} />
										</button>
									</div>
								</div>
							</div>
						</div>

						{/*!sub_header*/}
						<div
							className={
								headerScroll
									? `${scss.sub_header} ${scss.fixed}`
									: `${scss.sub_header}`
							}
						>
							<div className="container">
								<div className={scss.content}>
									{headerScroll && (
										<Link className={scss.logo} href="/">
											<Image src={logo} alt="logo" priority />
										</Link>
									)}
									<button className={scss.catalog_button}>
										<IconGridDots stroke={2} />
										Каталог
									</button>
									<Search
										className={scss.search}
										placeholder="Поиск по каталогу магазина"
										size="large"
										allowClear
										onSearch={onSearch}
									/>
									{!headerScroll && (
										<div className={scss.contact_icons}>
											<a href="#">
												<IconBrandFacebook stroke={2} />
											</a>
											<a href="#">
												<IconBrandInstagram stroke={2} />
											</a>
											<a href="#">
												<IconBrandWhatsapp stroke={2} />
											</a>
										</div>
									)}
									<nav className={scss.nav_icons}>
										<ul>
											<li>
												<Link href="/comparison">
													<IconScale stroke={2} />
												</Link>
											</li>
											<li>
												<Link href="/favourite">
													<IconHeart stroke={2} />
												</Link>
											</li>
											<li>
												<Link href="/basket">
													<IconShoppingCart stroke={2} />
												</Link>
											</li>
										</ul>
									</nav>
								</div>
							</div>
						</div>
					</>
				) : (
					<>
						<div className={scss.mobile_header}>
							<div className="container">
								<div className={scss.content}>
									<Link className={scss.logo} href="/">
										<Image src={logo} alt="logo" priority />
									</Link>
									<Search
										className={scss.search}
										placeholder="Поиск по каталогу магазина"
										size="middle"
										allowClear
										onSearch={onSearch}
									/>
									<BurgerButton isOpen={isOpen} setIsOpen={setIsOpen} />
								</div>
							</div>
						</div>
					</>
				)}
			</header>
		</>
	);
};
export default Header;
