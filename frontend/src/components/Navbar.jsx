function Navbar({ activeView, onNavigate }) {
	return (
		<header className="navbar">
			<div className="brand">Task Manager</div>
			<nav className="nav-links" aria-label="Main Navigation">
				<button
					type="button"
					className={activeView === 'home' ? 'active' : ''}
					onClick={() => onNavigate('home')}
				>
					Home
				</button>
				<button
					type="button"
					className={activeView === 'add' ? 'active' : ''}
					onClick={() => onNavigate('add')}
				>
					Add Task
				</button>
				<button
					type="button"
					className={activeView === 'tasks' ? 'active' : ''}
					onClick={() => onNavigate('tasks')}
				>
					All Tasks
				</button>
			</nav>
		</header>
	)
}

export default Navbar
