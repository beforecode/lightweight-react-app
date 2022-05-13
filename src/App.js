import './app.css'
//images
import Icon1 from './images/icon1.png'
import Icon2 from './images/icon2.png'
import Icon3 from './images/icon3.png'

const App = () => {
	return( 
		<div className="app">
			<section>
				<header>
					<b>Lightweight React App</b>
				</header>
				<div className="cards_container">
					<div className="card">
						<img src={Icon1} alt="" />
						<b>Fast app</b>
						<p>
							using least amout of mandatory modules to make the development server running
						</p>
					</div>

					<div className="card">
						<img src={Icon2} alt="" />
						<b>Cusomizale</b>
						<p>
							can be custmized because it contains webpack.config.js
						</p>
					</div>

					<div className="card">
						<img src={Icon3} alt="" />
						<b>Easy & Lovely</b>
						<p>
							lovely and easy to edit and use
						</p>
					</div>
				</div>
				<footer>
					<p>Use this lightweight react app to learn web development using React framework.</p>
					<p>Just open App.js & delete its content & start building your project.</p>
				</footer>
			</section>
		</div>)
}

export default App