// YourContextFile.jsx
import React, { createContext, useContext, useState } from 'react';

const YourContext = createContext();

const YourContextProvider = ({ children }) => {
    const [data, setData] = useState(null); // Example state

    const deletePost = (id) => {
        // Logic to delete a post by id
    };

    return (
        <YourContext.Provider value={{ data, deletePost }}>
            {children}
        </YourContext.Provider>
    );
};

export { YourContext, YourContextProvider };
