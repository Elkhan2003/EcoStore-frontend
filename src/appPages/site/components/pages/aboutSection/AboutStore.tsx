import React, { FC } from 'react';
import scss from './AboutStore.module.scss';

const AboutStore: FC = () => {
	return (
		<>
			<section className={scss.AboutStore}>
				<div className="container">
					<div className={scss.content}>AboutStore</div>
				</div>
			</section>
		</>
	);
};

export default AboutStore;
