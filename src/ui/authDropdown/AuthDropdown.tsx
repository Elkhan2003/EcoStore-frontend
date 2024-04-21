import scss from './AuthDropdown.module.scss';
import { Dropdown, MenuProps } from 'antd';
import { IconUser } from '@tabler/icons-react';
import Link from 'next/link';

const items: MenuProps['items'] = [
	{
		key: '1',
		label: (
			<Link rel="noopener noreferrer" href="/auth/login">
				Вход
			</Link>
		)
	},
	{
		key: '2',
		label: (
			<Link rel="noopener noreferrer" href="/auth/register">
				Регистрация
			</Link>
		)
	}
];

const AuthDropdown = () => {
	return (
		<Dropdown menu={{ items }} placement="bottomRight">
			<button className={scss.button}>
				<IconUser />
			</button>
		</Dropdown>
	);
};

export default AuthDropdown;
