import React, { FC } from 'react';
import scss from './AboutMe.module.scss';

const AboutMe: FC = () => {
	return (
		<>
			<section className={scss.AboutMe}>
				<div className="container">
					<div className={scss.content}>AboutMe</div>
				</div>
			</section>
		</>
	);
};

export default AboutMe;
