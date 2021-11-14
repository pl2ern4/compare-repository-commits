import { setSearchKeyword,deleteEntryFromList } from '../../store/globalReducer';
import { useStore } from '../../context/store-context/StoreContext';
import { debounce } from '../../helper/debounce';
import styles from '../../styles/Home.module.css';

const RepositoryInputSection = () => {

    const {searchKeyword, repositoryList, dispatch} = useStore();

    const handleChange = (e) =>
        debounce(dispatch(setSearchKeyword(e.target.value)), 1000);

    const deleteItem = index => () => dispatch(deleteEntryFromList(index, repositoryList));
    return (
        <div className={styles.repositoryInputSection}>
           <section>
           <label className={styles.inputWrapper}>
                <input className={styles.searchInput} placeholder='Search a Github Repository' value={searchKeyword} onChange={handleChange}/>
                <div className={styles.searchIcon}></div>
            </label>
            <div></div>
            
           </section>
           <section className={''}>
                <ul className={styles.repoList}>
                    {
                        repositoryList.map((obj,key)=>(
                            <li key={`item-${key}`} className={styles.repoItem} style={{borderColor:obj.color}}>
                                <div className={styles.repoItemWrapper}>
                                    <div className={styles.repositoryName}>
                                        <span className={styles.ownerName}>{obj.owner} / </span>
                                        <span className={styles.repoName}>{obj.repo}</span>
                                        <div className={styles.deleteIcon} onClick={deleteItem(key)}/>
                                    </div>
                                    <div className={styles.respositoryInfo}>
                                        <div className={`${styles.star} ${obj.star? styles.favorite : styles.nonFavorite}`}></div>
                                        <span className={styles.follower}>{obj.follower}</span>
                                        <span className={styles.timestamp}>{obj.lastupdated}</span>
                                    </div>
                                </div>
                            </li>
                        ))
                    }
                   
                </ul>
           </section>
        </div>
    )
}

export default RepositoryInputSection;