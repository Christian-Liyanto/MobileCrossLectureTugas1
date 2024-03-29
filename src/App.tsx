import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { useEffect, useState } from 'react';
import { Menu } from './components/Menu';
import Home from './pages/Home';
import Search from './pages/Search';
import Splash from './components/Splash';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

setupIonicReact();

const App: React.FC = () => {
	const [doneSplash, setDoneSplash] = useState(false);

	useEffect(() => {
		setDoneSplash(true);
		setTimeout(() => {
			setDoneSplash(false);
		}, 3000);
	}, []);

	return (
		<IonApp>
			<IonReactRouter>
				<Menu/>
				{doneSplash ? <Splash /> : null}
				<IonRouterOutlet id='main'>
					<Route path='/home' component={Home} exact={true} />
					<Redirect exact from='/' to='/home' />

					<Route path='/search' component={Search} exact={true}>
						<Search />
					</Route>
				</IonRouterOutlet>
			</IonReactRouter>
		</IonApp>
	);
};

// const App: React.FC = () => (
//   <IonApp>
//     <IonReactRouter>
//       <IonRouterOutlet>
//         <Route exact path="/home">
//           <Home />
//         </Route>
//         <Route exact path="/search">
//           <Search />
//         </Route>
//         <Route exact path="/">
//           <Redirect to="/home" />
//         </Route>
//       </IonRouterOutlet>
//     </IonReactRouter>
//   </IonApp>
// );

export default App;
