import Head from 'next/head'
import { FC, PropsWithChildren } from 'react'
import { Header } from '@/components/layouts/header/Header'
import { Footer } from '@/components/layouts/footer/Footer'

interface LayoutProps {
	title: string
	description?: string
	keywords?: string
}

export const Layout: FC<PropsWithChildren<LayoutProps>> = ({title,description,keywords,children}) => {
	return (
		<>
			<Head>
				<title>{title || 'Магазин любимой еды'}</title>
				<meta name="description" content={`Онлайн магазин. ${description}`}/>
				<meta name="robots" content="index, follow"/>
				<meta name="keywords" content={keywords || 'Магазин, онлайн, покупки'}/>
				<meta name="viewport" content="width=device-width, initial-scale=1"/>
			</Head>

			<Header/>
			<main>{children}</main>
			<Footer/>
		</>
	)
}