'use client';
import React, { FC } from 'react';
import scss from './BurgerButton.module.scss';

interface BurgerButtonType {
	isOpen: boolean;
	setIsOpen: (isOpen: boolean) => void;
}
const BurgerButton: FC<BurgerButtonType> = ({ isOpen, setIsOpen }) => {
	return (
		<>
			<div className={scss.BurgerButton}>
				<div
					className={
						isOpen ? `${scss.nav_icon_1} ${scss.open}` : `${scss.nav_icon_1}`
					}
					onClick={() => {
						setIsOpen(!isOpen);
					}}
				>
					<span></span>
					<span></span>
					<span></span>
					<span></span>
					<span></span>
					<span></span>
					<span></span>
					<span></span>
					<span></span>
				</div>
			</div>
		</>
	);
};
export default BurgerButton;
