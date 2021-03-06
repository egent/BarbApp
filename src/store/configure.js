import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import { createBlacklistFilter } from 'redux-persist-transform-filter';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import rootReducer from '../reducers';
import rootSaga from '../sagas';

const saveSubsetBlackFilterUser = createBlacklistFilter('user', ['loading']);

const persistConfig = {
    timeout: 2000,
    key: 'appStore',
    storage: AsyncStorage,
    stateReconciler: autoMergeLevel2,
    transforms: [saveSubsetBlackFilterUser],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware));

export default function configureStore(initialState) {
    const store = createStore(
        persistedReducer,
        initialState,
        enhancer,
    );
    const persistor = persistStore(store);
    sagaMiddleware.run(rootSaga);
    return { store, persistor };
}
