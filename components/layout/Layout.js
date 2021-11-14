import RepositoryInputSection from '../repository-input-section';
import GridBox from '../../components/grid-box';
import styles from '../../styles/Home.module.css';

const Layout = () => {
    return (
        <div className={styles.container}>
            <GridBox/>
            <RepositoryInputSection/>
        </div>
    )
}

export default Layout;