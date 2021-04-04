import Footer from './components/footer/footer.component';
import Header from './components/header/header.component';
import Looper from './components/looper/looper.component';

import { InstrumentsProvider } from './InstrumentsContext';

function App() {
	return (
		<InstrumentsProvider>
			<div className='App'>
				<Header />
				<Looper />
				<Footer />
			</div>
		</InstrumentsProvider>
	);
}

export default App;
