import { combineReducers } from '@reduxjs/toolkit';
    import authReducer from './slices/authSlice';
    import bookingReducer from './slices/bookingSlice';
    import profileReducer from './slices/profileSlice';
    import mapReducer from './slices/mapSlice';

    const rootReducer = combineReducers({
      auth: authReducer,
      booking: bookingReducer,
      profile: profileReducer,
      map: mapReducer,
    });

    export default rootReducer;
