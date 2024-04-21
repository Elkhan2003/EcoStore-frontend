import { Zoom, toast } from 'react-toastify';
import mini_logo from '@/src/assets/mini-logo.png';
import Link from 'next/link';
import Image from 'next/image';

export const notify = (message: string, linkText: string, link: string) => {
	toast(
		<div>
			<Image src={mini_logo} alt="logo" style={{ width: 20, marginRight: 5 }} />
			{message}
			<Link href={link} style={{ color: '#cb11ab' }}>
				{linkText}
			</Link>
		</div>,
		{
			position: 'bottom-center',
			autoClose: 3000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: 'dark',
			transition: Zoom
		}
	);
};
