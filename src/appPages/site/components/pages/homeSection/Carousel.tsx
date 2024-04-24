'use client';
import React, { FC } from 'react';
import scss from './Carousel.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Keyboard, Pagination } from 'swiper/modules';
import Image from 'next/image';
import Link from 'next/link';
import { useGetCarouselQuery } from '@/redux/api/carousel';
import { Skeleton } from 'antd';

const Carousel: FC = () => {
	const { data, isLoading } = useGetCarouselQuery();

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
							loop={false}
							keyboard={{
								enabled: true
							}}
							modules={[Pagination, Autoplay, Keyboard]}
							className="mySwiper"
						>
							{!isLoading ? (
								<>
									{data?.map((item) => (
										<SwiperSlide key={item._id}>
											<div className={scss.swiper_block}>
												<Link href={item.link} className={scss.swiper_content}>
													<img
														className={scss.product}
														src={item.img}
														alt="product"
													/>
												</Link>
											</div>
										</SwiperSlide>
									))}
								</>
							) : (
								<>
									<SwiperSlide>
										<div className={scss.skeleton_block}>
											<Skeleton.Image className={scss.skeleton} active={true} />
										</div>
									</SwiperSlide>
									<SwiperSlide>
										<div className={scss.skeleton_block}>
											<Skeleton.Image className={scss.skeleton} active={true} />
										</div>
									</SwiperSlide>
									<SwiperSlide>
										<div className={scss.skeleton_block}>
											<Skeleton.Image className={scss.skeleton} active={true} />
										</div>
									</SwiperSlide>
								</>
							)}
						</Swiper>
					</div>
				</div>
			</section>
		</>
	);
};
export default Carousel;
