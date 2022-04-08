import s from './Header.module.css';

const MENU = ['Menu 1', 'Menu 2', 'Menu 3', 'Menu 4'];

export const Header = () => {
	return (
		<header className={s.root}>
			<div class={s.header}>
				<div className={s.container}>
					<div className={s.logo}></div>
					<ul className={s.nav}>
						{ MENU.map(item => <li><a href="#">{item}</a></li>)}
					</ul>
				</div>
			</div>
		</header>
	)
}