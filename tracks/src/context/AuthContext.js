import createDataContext from './createDataContext';
import trackerAPI from '../api/tracker';
import AsyncStorage from '@react-native-community/async-storage';
import { navigate } from '../navigation/navigationRef';

const authReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_ERROR':
            return {
                ...state, errorMessage: action.payload,
            };
        case 'SIGN_IN':
            return {
                errorMessage: '', token: action.payload,
            };
        case 'CLEAR_ERROR_MESSAGE':
            return {
                ...state, errorMessage: '',
            }
        case 'SIGN_OUT':
            return {
                token: null, errorMessage: ''
            }
        default:
            return state;
    }
};

/**
 * Try Local Sign In Action Function
 * @param dispatch
 * @returns {function(...[*]=)}
 */
const tryLocalSignIn = dispatch => {
    return async () => {
        const token = await AsyncStorage.getItem('token');
        if (token) {
            console.log('Has Token');
            dispatch({type: 'SIGN_IN', payload: token});
            navigate('TrackList');
        } else {
            navigate('Signup');
        }
    }
}

/**
 * Clear Error Message Action Function
 * @param dispatch
 */
const clearErrorMessage = dispatch => {
    return () => {
        dispatch({type: 'CLEAR_ERROR_MESSAGE'});
    }
}

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
            dispatch({ type: 'SIGN_IN', payload: response.data.token });
            navigate('TrackList');
            console.log('Signed Up');
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
    return async ({ email, password }) => {
        try {
            const response = await trackerAPI.post('/signin', {email, password});
            await AsyncStorage.setItem('token', response.data.token);
            dispatch({ type: 'SIGN_IN', payload: response.data.token });
            navigate('TrackList');
            console.log('Signed In');
        } catch (err) {
            console.log(err.response.data);
            dispatch({ type: 'ADD_ERROR', payload: 'Something went wrong when signing up. Please try again later.' });
        }
    };
};

/**
 * Sign Out Action Function
 * @param dispatch
 * @returns {function(...[*]=)}
 */
const signout = dispatch => {
    return async () => {
        await AsyncStorage.removeItem('token');
        dispatch({type: 'SIGN_OUT'})
        navigate('Signin');
        console.log('Signed Out');
    };
};

export const { Provider, Context } = createDataContext(
    authReducer,
    {
        signup,
        signin,
        signout,
        clearErrorMessage,
        tryLocalSignIn
    },
    {
        token: null,
        errorMessage: '',
    },
);
