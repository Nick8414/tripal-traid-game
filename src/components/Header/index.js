import Container from '../Container';

import s from './Header.module.css';

import logo from '../../assets/logo.png';

const MENU = ['Menu 1', 'Menu 2', 'Menu 3', 'Menu 4'];

export const Header = () => {
	console.log(s);
	
	return (
		<header className={s.root}>
			<div className={s.header}>
				<Container className={s.headerContent}>
					<div className={s.logo}>
						<img src={logo} alt="Logo" />
					</div>
					<ul className={s.nav}>
						{ MENU.map(item => <li><a href="#">{item}</a></li>)}
					</ul>
				</Container>
			</div>
		</header>
	)
}