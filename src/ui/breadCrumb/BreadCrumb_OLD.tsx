'use client';
import React from 'react';
import scss from './BreadCrumb.module.scss';
import { usePathname } from 'next/navigation';
import { Breadcrumb } from 'antd';
import Link from 'next/link';

const BreadCrumb = () => {
	const pathname = usePathname();
	const breadCrumbView = () => {
		const pathnames = pathname.split('/').filter((item) => item);
		const capatilize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);
		return (
			<div>
				<Breadcrumb>
					{pathnames.length > 0 ? (
						<Breadcrumb.Item>
							<Link href="/">Home</Link>
						</Breadcrumb.Item>
					) : (
						<Breadcrumb.Item>Home</Breadcrumb.Item>
					)}
					{pathnames.map((item, index) => {
						const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
						const isLast = index === pathnames.length - 1;
						return isLast ? (
							<Breadcrumb.Item>{capatilize(item)}</Breadcrumb.Item>
						) : (
							<Breadcrumb.Item>
								<Link href={`${routeTo}`}>{capatilize(item)}</Link>
							</Breadcrumb.Item>
						);
					})}
				</Breadcrumb>
			</div>
		);
	};

	return (
		<>
			<div className={scss.BreadCrumb}>
				<div className="container">
					<div className={scss.content}>{breadCrumbView()}</div>
				</div>
			</div>
		</>
	);
};

export default BreadCrumb;
