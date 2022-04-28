import { Link, useNavigate } from 'react-router-dom';
import Container from '../Container';

import { useEffect, useState } from 'react';
import cn from 'classnames';

import s from './Header.module.scss';

import logo from '../../assets/logo.png';

const MENU = [
  { name: "Main", path: "/" },
  { name: "Characters", path: "/characters" },
  { name: "About", path: "/about" },
	{ name: "Contacts", path: "/contacts" },
];

export const Header = () => {

	const [small, setSmall] = useState(false);
	const navigate = useNavigate();

	useEffect(() => {
		const onScroll = () => {
			if (window.scrollY > 60) {
				setSmall(true);
			} else {
				setSmall(false);
			}
		};

		window.addEventListener('scroll', onScroll, { passive: true });

		return () => window.removeEventListener('scroll', onScroll);
	}, [])

	const handleLogoClick = () => {
		navigate('/');
	}
	return (
		<header className={s.root}>
			<div className={cn(s.header, {[s.small]: small})}>
				<Container className={s.headerContent}>
					<div className={s.logo} onClick={handleLogoClick}>
						<img src={logo} alt="Logo" />
					</div>
					<ul className={s.nav}>
						{ MENU.map(item => <li key={item.name}><Link to={item.path}>{item.name}</Link></li>)}
					</ul>
				</Container>
			</div>
		</header>
	)
}