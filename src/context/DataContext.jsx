import { createContext, useContext, useState } from 'react';

export const DataContext = createContext();

export const useData = () => useContext(DataContext);

const DataProvider = ({children}) => {

    const [data, setData] = useState();

    const setValues = (values) => {
        setData(prevData => ({
            ...prevData,
            ...values
        }));
    }

    return (
        <DataContext.Provider value={{data, setValues}}>
            {children}
        </DataContext.Provider>
    );
}

export default DataProvider;