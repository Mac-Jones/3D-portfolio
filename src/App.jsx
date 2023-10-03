import { BrowserRouter } from 'react-router-dom';
import {
	About,
	Hero,
	Navbar,
	Tech,
	Projects,
	Feedbacks,
	Contact,
	StarsCanvas,
} from './components';

const App = () => {
	return (
		<BrowserRouter>
			<div className='relative z-0 bg-primary'>
				<Navbar />
				<div className='relative bg-hero-pattern bg-cover bg-no-repeat bg-center z-10'>
					<Hero />
				</div>
				<About />
				<Tech />
				<Projects />
				<Feedbacks />
				<div className='relative z-0'>
					<Contact />
					<StarsCanvas />
				</div>
			</div>
		</BrowserRouter>
	);
};

export default App;
