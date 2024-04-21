import { FC } from 'react';
import scss from './SubHeader.module.scss';
import { Input } from 'antd';
import { SearchProps } from 'antd/es/input';
import Link from 'next/link';
import {
	IconBrandFacebook,
	IconBrandInstagram,
	IconBrandWhatsapp,
	IconGridDots,
	IconHeart,
	IconScale,
	IconShoppingCart
} from '@tabler/icons-react';
import { IconGadgetarium } from '@/assets/icons';

interface SubHeaderProps {
	isMobile: boolean;
	isScrolled: boolean;
}

const onSearch: SearchProps['onSearch'] = (value, _e, info) =>
	console.log(info?.source, value);
const SubHeader: FC<SubHeaderProps> = ({ isScrolled }) => {
	return (
		<header
			className={
				isScrolled ? `${scss.Header} ${scss.active}` : `${scss.Header}`
			}
		>
			<div className="container">
				<div className={scss.content}>
					<div className={scss.button_catalog_search}>
						{isScrolled && (
							<>
								<Link className={scss.logo} href="/">
									<IconGadgetarium />
								</Link>
							</>
						)}
						<button className={scss.catalog}>
							<IconGridDots />
							Каталог
						</button>
						<span className={scss.hr_line}></span>
						<Input.Search
							className={scss.search}
							size="large"
							placeholder="Поиск по каталогу магазина"
							allowClear
							onSearch={onSearch}
						/>
					</div>
					<div className={scss.contact_icons}>
						{!isScrolled && (
							<>
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
							</>
						)}
					</div>
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
	);
};

export default SubHeader;
