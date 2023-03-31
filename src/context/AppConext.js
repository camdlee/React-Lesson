import { createContext, useState, setState } from 'react';

//Initializing context
export const AppContext = createContext();

//we're wrapping our app in this context and so everything gets put under this umbrella
const AppContextProvider = ({children}) => {


    // will check my local storage to see if we saved anything and return
    const getFavChampFromLS = () => {
        let champ = localStorage.getItem('favorite')
        if (champ){
            // anything stored locally is a json
            return JSON.parse(champ)
        }
    }

    // double ?? is like a ternery operator, so if preceding function doesn't run, then do second thing
    const [favChamp, _setFavChamp] = useState(getFavChampFromLS()?? '')

    // function to set
    const setFavChamp=(champ)=>{
        localStorage.setItem('favorite', JSON.stringify(champ))
        _setFavChamp(champ)
    }

    const values = {
        favChamp,
        setFavChamp
    }

    return(
        <AppContext.Provider values={values}>
            {children}
        </AppContext.Provider>
    )

}

export default AppContextProvider()