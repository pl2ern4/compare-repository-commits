import { getRepository } from '../../helper/getResponse';
import { fetchRepoList } from '../../store/globalReducer'

const { useReducer, useContext, createContext, useEffect } = require("react");

const Store = createContext();
Store.displayName = 'Store';

export const useStore = () => useContext(Store);

const StoreProvider = ({ children, initialState, reducer}) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    
    useEffect(()=>{
      if(!!state?.searchKeyword?.length){
          getRepository(state?.searchKeyword)
          .then(res=>{
            dispatch(fetchRepoList(res?.data?.items))
          })
          
      }
    },[state?.searchKeyword]);

    return (
        <Store.Provider value={{...state, dispatch}}>{children}</Store.Provider>
      );
};

export default StoreProvider;