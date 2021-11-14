import { getRepository } from '../helper/getResponse';

const constant = {
    SET_SEARCHKEYWORD:'SET_SEARCHKEYWORD',
    Add_REPO_IN_LIST: 'Add_REPO_IN_LIST',
    DELETE_REPO_FROM_LIST:'DELETE_REPO_FROM_LIST'
}

export const initialState = {
    searchKeyword:'',
    repositoryList:[{
        owner: 'test',
        repo: 'testing',
        color: 'green',
        star: false,
        follower: '98.8k',
        lastupdated: 'Updated 2 hours ago'
    },
    {
        owner: 'test',
        repo: 'testing',
        color: 'red',
        star: true,
        follower: '98.8k',
        lastupdated: 'Updated 2 hours ago'
    },
    {
        owner: 'test',
        repo: 'testing',
        color: 'yellow',
        star: false,
        follower: '98.8k',
        lastupdated: 'Updated 2 hours ago'
    }
    ]
}

export const setSearchKeyword = (searchKeyword) => {
    const respo = getRepository(searchKeyword);
   return {
        type: constant.SET_SEARCHKEYWORD,
        searchKeyword
    };
};

export const AddEntryInList = (searchKeyword) => ({
    type: constant.Add_REPO_IN_LIST,
    searchKeyword,
});


export const deleteEntryFromList = (index, repositoryList) => {
    const repositoryListTemp = repositoryList.splice(index, 1);
    return ({
    type: constant.DELETE_REPO_FROM_LIST,
    repositoryList: repositoryListTemp
});}


export const globalReducer = (state = initialState, action) => {
    switch(action.type){
        case constant.SET_SEARCHKEYWORD: 
            return {
                ...state,
                searchKeyword:action.searchKeyword
        };
        case constant.Add_REPO_IN_LIST:
            return {
                ...state
            }
        case constant.DELETE_REPO_FROM_LIST:
            return {
                ...state
            }
            
    }

}