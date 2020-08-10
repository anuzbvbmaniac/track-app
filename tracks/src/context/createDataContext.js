/**
 * Create Data Context
 * Setup Context Stuffs Automatically, Reduce Same Code Use for Different Context.
 */
import React, { useReducer } from 'react';

/**
 * @param reducer => functions
 * @param actions => objects
 * @param defaultValue => default State
 */
export default (reducer, actions, defaultValue) => {
    const Context = React.createContext();

    const Provider = ({ children }) => {
        const [state, dispatch] = useReducer(reducer, defaultValue);

        const boundActions = {};
        for (let key in actions) {
            boundActions[key] = actions[key](dispatch);
        }

        return (
            <Context.Provider value={{ state, ...boundActions }}>
                {children}
            </Context.Provider>
        );
    };

    return { Context, Provider };
}
