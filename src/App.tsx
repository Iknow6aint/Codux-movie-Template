import logo from './assets/logo.svg';
import styles from './App.module.scss';
import { Menu } from './components/menu/menu';
import { Container } from './components/container/container';
import { Favourites } from './components/favourites/favourites';

function App() {
    return (
        <div className={styles.App}>
            <Menu />
            <Container />
            <Favourites />
        </div>
    );
}

export default App;
