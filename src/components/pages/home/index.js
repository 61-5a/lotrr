import Header from '../../common/header';
import AppOuter from '../../small/appOuter';
import styles from './index.module.css';

function Home () {
    return (
    <div className={styles.home_outer}>
        <Header />
        <AppOuter />
    </div>
    )
}
export default Home;