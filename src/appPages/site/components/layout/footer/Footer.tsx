'use client';
import React, { FC } from 'react';
import scss from './Footer.module.scss';
import Link from 'next/link';
import { SubmitHandler, useForm } from 'react-hook-form';
import {
	IconClock,
	IconMail,
	IconMapPin,
	IconPhone
} from '@tabler/icons-react';
import { IconGadgetarium } from '@/assets/icons';

type Inputs = {
	email: string;
};

const Footer: FC = () => {
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm<Inputs>();

	const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

	return (
		<>
			<footer className={scss.Footer}>
				<div className="container">
					<div className={scss.content}>
						<div className={scss.top}>
							<div className={scss.left}>
								<div className={scss.block}>
									<h1 className={scss.title}>Каталог</h1>
									<div className={scss.links}>
										<Link href="#">Смартфоны</Link>
										<Link href="#">Ноутбуки и планшеты</Link>
										<Link href="#">Смарт-часы и браслеты</Link>
										<Link href="#">Аксессуары</Link>
									</div>
								</div>
								<div className={scss.block}>
									<h1 className={scss.title}>Будь с нами</h1>
									<div className={scss.links}>
										<Link href="#">Акции</Link>
										<Link href="#">Новинки</Link>
										<Link href="#">Популярные категории</Link>
									</div>
								</div>
								<div className={scss.block}>
									<h1 className={scss.title}>Помощь и сервисы</h1>
									<div className={scss.links}>
										<Link href="/about">О магазине</Link>
										<Link href="#">Доставка</Link>
										<Link href="#">FAQ</Link>
										<Link href="#">Контакты</Link>
									</div>
								</div>
							</div>
							<div className={scss.right}>
								<h1 className={scss.title}>Расскажем об акциях и скидках</h1>
								<form onSubmit={handleSubmit(onSubmit)}>
									<input placeholder="Email" {...register('email')} />
									<button type="submit">Подписаться</button>
								</form>
								<p className={scss.rules}>
									Нажимая на кнопку «подписаться» Вы соглашаетесь на обработку
									персональных данных
								</p>
								<div className={scss.info}>
									<a target="_blank" href="https://wa.me/996706215289">
										<IconPhone /> +996 (706) 21 52 89
									</a>
									<a
										target="_blank"
										href="https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&to=boss.armsport@gmail.com"
									>
										<IconMail /> boss.armsport@gmail.com
									</a>
									<a target="_blank" href="https://go.2gis.com/ifsp9">
										<IconMapPin /> г.Бишкек, ул. Гражданская 119
									</a>
									<a href="#">
										<IconClock /> С 10:00 до 21:00 (без выходных)
									</a>
								</div>
							</div>
						</div>
						<span className={scss.line}></span>
						<div className={scss.bottom}>
							<Link href="/">
								<IconGadgetarium />
							</Link>
							<p>© 2024 Gadgetarium. Интернет магазин Все права защищены.</p>
						</div>
					</div>
				</div>
			</footer>
		</>
	);
};
export default Footer;
