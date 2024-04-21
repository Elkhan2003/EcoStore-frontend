import scss from './SupHeader.module.scss';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import AuthDropdown from '@/ui/authDropdown/AuthDropdown';
import { userLinks } from '@/utils/links/user-links';
import { IconGadgetarium } from '@/assets/icons';

const SupHeader = () => {
	const pathname = usePathname();

	return (
		<header className={scss.Header}>
			<div className="container">
				<div className={scss.content}>
					<Link className={scss.logo} href="/">
						<IconGadgetarium />
					</Link>
					<nav className={scss.nav}>
						<ul>
							{userLinks.map((item, index) => (
								<li key={index}>
									<Link
										className={
											pathname === item.link
												? `${scss.link} ${scss.active}`
												: `${scss.link}`
										}
										href={item.link}
									>
										{item.label}
									</Link>
								</li>
							))}
						</ul>
					</nav>
					<div className={scss.profile}>
						<a className={scss.mobile_number} href="tel:+996990385056">
							+996 (990) 38 50 56
						</a>
						<AuthDropdown />
					</div>
				</div>
			</div>
		</header>
	);
};

export default SupHeader;
