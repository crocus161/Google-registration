import styles from  './App.module.scss';
import FormRoutersMap from '../components/FormRoutersMap/FormRoutersMap';

const App = () => {
    return (
        <div className={styles.form}>
            <FormRoutersMap />
        </div>
    );
}

export default App;