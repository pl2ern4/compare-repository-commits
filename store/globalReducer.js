import { getUniqueColor } from '../helper/getUniqueColor';
import { getFormatedTime, getFormatedDate } from '../helper/getFormatedTime';
import { getFormatedStars } from '../helper/getFormatedStars';

const constant = {
    SET_SEARCHKEYWORD: 'SET_SEARCHKEYWORD',
    ADD_REPO_LIST: 'ADD_REPO_LIST',
    DELETE_REPO_FROM_LIST: 'DELETE_REPO_FROM_LIST',
    SEARCHREPOLIST: 'SEARCHREPOLIST',
    SET_COMMITDATA: 'SET_COMMITDATA'
}

export const initialState = {
    searchKeyword: '',
    searchedOptions: [],
    commitData: [],
    repositoryList: []
}

export const setSearchKeyword = (searchKeyword) => ({
    type: constant.SET_SEARCHKEYWORD,
    searchKeyword
});


export const fetchRepoList = (data) => ({
    type: constant.SEARCHREPOLIST,
    searchedOptions: data
})

export const fetchItemDetail = (commitData) => ({
    type: constant.SET_COMMITDATA,
    commitData,
})

export const deleteEntryFromList = (index, repositoryList) => {
    return ({
        type: constant.DELETE_REPO_FROM_LIST,
        repositoryList: repositoryList.filter(obj=>obj.id !== index)
    });
}


export const addRepoInList = (repoItem, repositoryList=[]) => {
    const updatedRepoList = { ...repoItem, 
                                lastupdated: getFormatedTime(repoItem.lastupdated), 
                                follower: getFormatedStars(repoItem.follower),
                                color: getUniqueColor(repositoryList.map(obj => obj.color)) 
                            }
    const isExist = repositoryList.filter(obj=>obj.id===repoItem.id);
    if(isExist.length){
        return{
            type:''
        };
    }
    const repositoryListTemp = [...repositoryList]
    repositoryListTemp.push(updatedRepoList);
    return ({
        type: constant.ADD_REPO_LIST,
        repositoryList: repositoryListTemp
    });
}


export const globalReducer = (state = initialState, action) => {
    switch (action.type) {
        case constant.SET_SEARCHKEYWORD:
            return {
                ...state,
                searchKeyword: action.searchKeyword
            };
        case constant.SEARCHREPOLIST:
            return {
                ...state,
                searchedOptions: action.searchedOptions
            }
        case constant.DELETE_REPO_FROM_LIST:
            return {
                ...state,
                repositoryList: action.repositoryList
            }
        case constant.ADD_REPO_LIST:
            return {
                ...state,
                repositoryList: action.repositoryList
            }
        case constant.SET_COMMITDATA:
            const newCommitData = [...state.commitData];
            const color = state.repositoryList?.find(obj=>obj.id=== action.commitData.id)?.color;
            newCommitData.push({...action.commitData, color});
            return {
                ...state,
                commitData:newCommitData,
                searchedOptions: [],
                searchKeyword:''
            }
        default: {
            return {
                ...state
            }
        }
    }

}