import React, { FC } from 'react';
import Welcome from '@/appPages/site/components/pages/homeSection/Welcome';
import Carousel from '@/appPages/site/components/pages/homeSection/Carousel';

const HomePage: FC = () => {
	return (
		<>
			<Carousel />
			<Welcome />
		</>
	);
};
export default HomePage;
