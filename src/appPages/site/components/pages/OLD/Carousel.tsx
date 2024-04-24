'use client';
import React, { FC } from 'react';
import scss from './Carousel.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Keyboard, Pagination } from 'swiper/modules';
import { IconPinkTree } from '@/assets/icons';
import Image from 'next/image';
import photo from '@/assets/iphone.png';

const data = [
	{
		title: 'УСПЕЙТИ КУПИТЬ iPHONE 13 PRO',
		text: 'со скидкой до 20%',
		img: photo
	},
	{
		title: 'УСПЕЙТИ КУПИТЬ iPHONE 13 PRO',
		text: 'со скидкой до 20%',
		img: photo
	},
	{
		title: 'УСПЕЙТИ КУПИТЬ iPHONE 13 PRO',
		text: 'со скидкой до 20%',
		img: photo
	},
	{
		title: 'УСПЕЙТИ КУПИТЬ iPHONE 13 PRO',
		text: 'со скидкой до 20%',
		img: photo
	},
	{
		title: 'УСПЕЙТИ КУПИТЬ iPHONE 13 PRO',
		text: 'со скидкой до 20%',
		img: photo
	},
	{
		title: 'УСПЕЙТИ КУПИТЬ iPHONE 13 PRO',
		text: 'со скидкой до 20%',
		img: photo
	},
	{
		title: 'УСПЕЙТИ КУПИТЬ iPHONE 13 PRO',
		text: 'со скидкой до 20%',
		img: photo
	},
	{
		title: 'УСПЕЙТИ КУПИТЬ iPHONE 13 PRO',
		text: 'со скидкой до 20%',
		img: photo
	},
	{
		title: 'УСПЕЙТИ КУПИТЬ iPHONE 13 PRO',
		text: 'со скидкой до 20%',
		img: photo
	},
	{
		title: 'УСПЕЙТИ КУПИТЬ iPHONE 13 PRO',
		text: 'со скидкой до 20%',
		img: photo
	},
	{
		title: 'УСПЕЙТИ КУПИТЬ iPHONE 13 PRO',
		text: 'со скидкой до 20%',
		img: photo
	}
];

const Carousel: FC = () => {
	return (
		<>
			<section className={scss.Carousel}>
				<div className={scss.container}>
					<div className={scss.content}>
						<Swiper
							pagination={{
								clickable: true,
								dynamicBullets: true
							}}
							autoplay={{
								delay: 2000,
								disableOnInteraction: false
							}}
							keyboard={{
								enabled: true
							}}
							modules={[Pagination, Autoplay, Keyboard]}
							className="mySwiper"
						>
							{data.map((item, index) => (
								<SwiperSlide key={index + 1}>
									<div className={scss.swiper_block}>
										<div className={scss.swiper_content}>
											<div className="container">
												<div className={scss.card}>
													<div className={scss.info}>
														<h1>gadgetarium</h1>
														<h2>{item.title}</h2>
														<p>{item.text}</p>
													</div>
													<IconPinkTree />
													<Image
														className={scss.product}
														src={item.img}
														alt="product"
													/>
												</div>
											</div>
										</div>
									</div>
								</SwiperSlide>
							))}
						</Swiper>
					</div>
				</div>
			</section>
		</>
	);
};
export default Carousel;
