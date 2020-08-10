import createDataContext from './createDataContext';
import trackerAPI from '../api/tracker';
import AsyncStorage from '@react-native-community/async-storage';

const authReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_ERROR':
            return {
                ...state, errorMessage: action.payload,
            };
        case 'SIGN_UP':
            return {
                errorMessage: '', token: action.payload,
            }
        default:
            return state;
    }
};

/**
 * Sign Up Action Function
 * @param dispatch
 * @returns {function(...[*]=)}
 */
const signup = dispatch => {
    return async ({ email, password }) => {
        try {
            const response = await trackerAPI.post('/signup', { email, password });
            await AsyncStorage.setItem('token', response.data.token);
            dispatch({ type: 'SIGN_UP', payload: response.data.token });
            console.log(response.data);
        } catch (err) {
            console.log(err.response.data);
            dispatch({ type: 'ADD_ERROR', payload: 'Something went wrong when signing up. Please try again later.' });
        }
    };
};

/**
 * Sign In Action Function
 * @param dispatch
 * @returns {function(...[*]=)}
 */
const signin = dispatch => {
    return ({ email, password }) => {
        // Make API request to signIn with email and password.

        // Handle Success by updating state

        // Handle Failure by showing Error Message
    };
};

/**
 * Sign Out Action Function
 * @param dispatch
 * @returns {function(...[*]=)}
 */
const signout = dispatch => {
    return () => {
        // SignOut the authenticated user
    };
};

export const { Provider, Context } = createDataContext(
    authReducer,
    {
        signup,
        signin,
        signout,
    },
    {
        token: null,
        errorMessage: '',
    },
);
