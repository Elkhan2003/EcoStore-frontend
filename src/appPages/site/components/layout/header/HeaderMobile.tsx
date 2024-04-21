import { FC } from 'react';
import scss from './HeaderMobile.module.scss';
import { Input } from 'antd';
import { SearchProps } from 'antd/es/input';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import {
	IconBrandFacebook,
	IconBrandInstagram,
	IconBrandWhatsapp,
	IconHeart,
	IconScale,
	IconShoppingCart
} from '@tabler/icons-react';
import { IconGadgetarium } from '@/assets/icons';
import BurgerButton from '@/ui/burgerButton/BurgerButton';
import AuthDropdown from '@/ui/authDropdown/AuthDropdown';
import { userLinks } from '@/utils/links/user-links';
import mini_logo from '@/assets/mini-logo.png';

interface HeaderMobileProps {
	isOpenMobileMenu: boolean;
	setIsOpenMobileMenu: (isOpenMobileMenu: boolean) => void;
}

const HeaderMobile: FC<HeaderMobileProps> = ({
	isOpenMobileMenu,
	setIsOpenMobileMenu
}) => {
	const pathname = usePathname();

	const onSearch: SearchProps['onSearch'] = (value, _e, info) =>
		console.log(info?.source, value);

	return (
		<>
			<header className={scss.HeaderMobile}>
				<div className="container">
					<div className={scss.content}>
						<Link className={scss.logo} href="/">
							<Image src={mini_logo} alt="mini-logo" />
						</Link>
						<Input.Search
							className={scss.search}
							placeholder="Поиск по каталогу магазина"
							allowClear
							onSearch={onSearch}
						/>
						<BurgerButton
							checked={isOpenMobileMenu}
							onChange={() => {
								setIsOpenMobileMenu(!isOpenMobileMenu);
							}}
						/>
					</div>
				</div>
				<div
					className={
						isOpenMobileMenu
							? `${scss.burger_menu} ${scss.active}`
							: `${scss.burger_menu}`
					}
				>
					<div className={scss.mobile_logo_menu}>
						<Link className={scss.logo} href="/">
							<IconGadgetarium />
						</Link>
						<div className={scss.profile}>
							<AuthDropdown />
						</div>
					</div>

					<nav className={scss.nav}>
						<ul>
							{userLinks.map((item, index) => (
								<li key={index}>
									<Link
										style={{
											transform: isOpenMobileMenu ? 'scale(1)' : 'scale(0)'
										}}
										className={
											pathname === item.link
												? `${scss.link} ${scss.active}`
												: `${scss.link}`
										}
										href={item.link}
									>
										<span className={scss.icon}>{item.icon}</span>
										<span className={scss.label}>{item.label}</span>
									</Link>
								</li>
							))}
						</ul>
					</nav>

					<div className={scss.icons}>
						<div className={scss.contact_icons}>
							<a
								className={scss.icon}
								target="_blank"
								href="https://www.facebook.com/Elcho911"
							>
								<IconBrandFacebook />
							</a>
							<a
								className={scss.icon}
								target="_blank"
								href="https://www.instagram.com/elcho911"
							>
								<IconBrandInstagram />
							</a>
							<a
								className={scss.icon}
								target="_blank"
								href="https://wa.me/996990385056"
							>
								<IconBrandWhatsapp />
							</a>
						</div>
						<hr />
						<div className={scss.page_icons}>
							<div className={scss.icon}>
								<span>0</span>
								<IconScale />
							</div>
							<div className={scss.icon}>
								<span>0</span>
								<IconHeart />
							</div>
							<div className={scss.icon}>
								<span>0</span>
								<IconShoppingCart />
							</div>
						</div>
					</div>
				</div>
			</header>
		</>
	);
};
export default HeaderMobile;
