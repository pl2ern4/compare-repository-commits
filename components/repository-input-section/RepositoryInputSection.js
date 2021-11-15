import {
  setSearchKeyword,
  deleteEntryFromList,
  addRepoInList,
  fetchItemDetail,
} from "../../store/globalReducer";
import { getCommitDetails } from "../../helper/getResponse";
import { getFormatedDate } from "../../helper/getFormatedTime";
import { useStore } from "../../context/store-context/StoreContext";
import { debounce } from "../../helper/debounce";
import styles from "../../styles/Home.module.css";

const RepositoryInputSection = () => {
  const {
    searchKeyword,
    searchedOptions = [],
    repositoryList = [],
    commitData = [],
    dispatch,
  } = useStore();

  const handleChange = (e) =>
    debounce(dispatch(setSearchKeyword(e.target.value)), 1000);

  const deleteItem = (index) => {
    console.log(index);
    dispatch(deleteEntryFromList(index, repositoryList));
  };

  const handleItemClick = (obj) => {
    dispatch(
      addRepoInList(
        {
          owner: obj?.owner?.login,
          repo: obj?.name,
          star: obj.watchers,
          follower: obj.stargazers_count,
          lastupdated: obj.updated_at,
          id: obj.id,
        },
        repositoryList
      )
    );
    getCommitDetails({
      owner: obj?.owner?.login,
      repo: obj?.name,
    }).then((repositoryList) => {
      const updatedRepositoryList =
        (repositoryList &&
          repositoryList.data.map((obj) => ({
            time: getFormatedDate(obj.week),
            y: new Date(obj.week * 1000),
            commit: `${obj.total} commit${(obj.total > 0 && `s`) || ""}`,
          }))) ||
        [];
      const newCommitData = [
        ...commitData,
        {
          name: "backbone.stickit",
          description: null,
          color: "yellow",
          data: updatedRepositoryList,
        },
      ];
      dispatch(fetchItemDetail([...newCommitData]));
    });
  };

  return (
    <div className={styles.repositoryInputSection}>
      <section>
        <label
          className={`${searchedOptions.length > 0 && styles.searchedOptions} ${
            styles.inputWrapper
          }`}
        >
          <input
            className={styles.searchInput}
            placeholder="Search a Github Repository"
            value={searchKeyword}
            onChange={handleChange}
          />
          <div className={styles.searchIcon}></div>
        </label>
        <div
          className={`${searchedOptions.length == 0 && styles.hide} ${
            styles.searchRepoListWrapper
          }`}
        >
          <ul className={styles.searchRepoList}>
            {searchedOptions.map((obj, key) => (
              <li
                onClick={() => handleItemClick({ ...obj })}
                key={`search-option-${key}`}
                className={styles.searchRepoListItem}
              >
                <span className={styles.ownerName}>{obj?.owner?.login} / </span>
                <span className={styles.repoName}>{obj?.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section>
        <ul className={styles.repoList}>
          {repositoryList.map((obj, key) => (
            <li
              key={`item-${key}`}
              className={styles.repoItem}
              style={{ borderColor: obj.color }}
            >
              <div className={styles.repoItemWrapper}>
                <div className={styles.repositoryName}>
                  <span className={styles.ownerName}>{obj.owner} / </span>
                  <span className={styles.repoName}>{obj.repo}</span>
                  <div
                    className={styles.deleteIcon}
                    onClick={() => deleteItem(obj.id)}
                  />
                </div>
                <div className={styles.respositoryInfo}>
                  <div
                    className={`${styles.star} ${
                      obj.star ? styles.favorite : styles.nonFavorite
                    }`}
                  ></div>
                  <span className={styles.follower}>{obj.follower}</span>
                  <span className={styles.timestamp}>{obj.lastupdated}</span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default RepositoryInputSection;
