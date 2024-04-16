'use client';
import React, { FC, ReactNode } from 'react';
import { ReduxProvider } from '@/providers/ReduxProvider';
import { SessionProvider } from '@/providers/SessionProvider';
import { ConfigProvider, theme } from 'antd';

interface LayoutRootType {
	children: ReactNode;
}

const LayoutRoot: FC<LayoutRootType> = ({ children }) => {
	const antdThemeConfig = {
		algorithm: theme.darkAlgorithm,
		token: {
			colorPrimary: '#cb11ab',
			// borderRadius: 2,
			colorBgContainer: '#1a1a25'
		}
	};

	return (
		<>
			<ConfigProvider theme={antdThemeConfig}>
				<ReduxProvider>
					<SessionProvider>{children}</SessionProvider>
				</ReduxProvider>
			</ConfigProvider>
		</>
	);
};
export default LayoutRoot;
