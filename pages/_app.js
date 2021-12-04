import '../public/assets/css/bootstrap.css';
import '../public/assets/css/style.css';
import '../public/assets/css/slider.css';
import configureStore from '../reducers/configureStore';
import {Provider} from 'react-redux';
const store = configureStore()

export default function App({ Component, pageProps }) {
    return(
        <Provider store={store}>
            <Component {...pageProps} />
        </Provider>
    )
}