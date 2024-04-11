import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.scss';
import LayoutRoot from '@/app/layout.c';

const font = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'EcoStore - Instant CRUD REST API Endpoints',
	description: 'Generated by Elcho911'
};

export default function RootLayout({
	children
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={font.className}>
				<LayoutRoot>{children}</LayoutRoot>
			</body>
		</html>
	);
}
