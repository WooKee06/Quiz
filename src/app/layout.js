import { Providers } from '@/store/provider'
import { Montserrat } from 'next/font/google'
import './globals.css'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata = {
	title: 'Wookee Quiz',
	description: 'Подготовка к аккредитации от Wookee',
}

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body className={montserrat.className}>
				<Providers>{children}</Providers>
			</body>
		</html>
	)
}
