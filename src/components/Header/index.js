import Container from '../Container';

import { useEffect, useState } from 'react';
import cn from 'classnames';

import s from './Header.module.scss';

import logo from '../../assets/logo.png';

const MENU = ['Menu 1', 'Menu 2', 'Menu 3', 'Menu 4'];

export const Header = () => {

	const [small, setSmall] = useState(false);

	useEffect(() => {
		const onScroll = () => {
			console.log('scroll= ', window.scrollY);
			if (window.scrollY > 60) {
				setSmall(true);
			} else {
				setSmall(false);
			}
		};

		window.addEventListener('scroll', onScroll, { passive: true });

		return () => window.removeEventListener('scroll', onScroll);
	}, [])

	return (
		<header className={s.root}>
			<div className={cn(s.header, {[s.small]: small})}>
				<Container className={s.headerContent}>
					<div className={s.logo}>
						<img src={logo} alt="Logo" />
					</div>
					<ul className={s.nav}>
						{ MENU.map(item => <li key={item}><a href="#">{item}</a></li>)}
					</ul>
				</Container>
			</div>
		</header>
	)
}