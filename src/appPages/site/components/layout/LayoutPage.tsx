'use client';
import React, { FC, ReactNode, useEffect, useState } from 'react';
import scss from './LayoutPage.module.scss';
import SupHeader from '@/appPages/site/components/layout/header/SupHeader';
import SubHeader from '@/appPages/site/components/layout/header/SubHeader';
import HeaderMobile from '@/appPages/site/components/layout/header/HeaderMobile';
import Footer from '@/appPages/site/components/layout/footer/Footer';
import { useGetCarouselQuery } from '@/redux/api/carousel';
import Preloader from '@/ui/preLoader/Preloader';

interface LayoutPageType {
	children: ReactNode;
}

const LayoutPage: FC<LayoutPageType> = ({ children }) => {
	const [isScrolled, setIsScrolled] = useState(false);
	const [isMobile, setIsMobile] = useState(true);
	const [isOpenMobileMenu, setIsOpenMobileMenu] = useState(false);

	const { status } = useGetCarouselQuery();
	const [isPreLoader, setIsPreloader] = useState(true);

	useEffect(() => {
		if (status === 'fulfilled' || status === 'rejected') {
			setIsPreloader(false);
		}
	}, [status]);

	useEffect(() => {
		const changeIsMobile = () => {
			if (window.innerWidth < 1100) {
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

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 75);
		};
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<>
			{!isPreLoader ? (
				<>
					<div className={scss.layout}>
						{!isMobile ? (
							<>
								<SupHeader />
								<SubHeader isMobile={isMobile} isScrolled={isScrolled} />
							</>
						) : (
							<>
								<HeaderMobile
									isOpenMobileMenu={isOpenMobileMenu}
									setIsOpenMobileMenu={setIsOpenMobileMenu}
								/>
							</>
						)}
						<main>{children}</main>
						<Footer />
					</div>
				</>
			) : (
				<>
					<Preloader />
				</>
			)}
		</>
	);
};
export default LayoutPage;

// 'use client';
// import React, { FC, ReactNode, useEffect, useState } from 'react';
// import scss from './LayoutPage.module.scss';
// import SupHeader from '@/appPages/site/components/layout/header/SupHeader';
// import Footer from '@/appPages/site/components/layout/footer/Footer';
// import Preloader from '@/appPages/site/components/ui/preLoader_old/Preloader';
// import { useGetMeQuery } from '@/redux/api/me';

// interface LayoutPageType {
// 	children: ReactNode;
// }

// const LayoutPage: FC<LayoutPageType> = ({ children }) => {
// 	const { status } = useGetMeQuery();
// 	const [isPreLoader, setIsPreloader] = useState(true);

// 	useEffect(() => {
// 		if (status === 'fulfilled' || status === 'rejected') {
// 			setIsPreloader(false);
// 		}
// 	}, [status]);

// 	return (
// 		<>
// 			{isPreLoader ? (
// 				<Preloader />
// 			) : (
// 				<div className={scss.layout}>
// 					<SupHeader />
// 					<main>{children}</main>
// 					<Footer />
// 				</div>
// 			)}
// 		</>
// 	);
// };
// export default LayoutPage;
