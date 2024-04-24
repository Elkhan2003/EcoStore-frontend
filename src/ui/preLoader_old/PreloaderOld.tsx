import React from 'react';
import scss from './PreloaderOld.module.scss';

const PreloaderOld = () => {
	return (
		<div className={scss.loader}>
			<div className={scss.infinityChrome}>
				<div></div>
				<div></div>
				<div></div>
			</div>
		</div>
	);
};

export default PreloaderOld;
