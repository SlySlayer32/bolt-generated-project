import React from 'react';
    import { Platform, ActivityIndicator } from 'react-native';

    const Loader = () => (
      <ActivityIndicator
        size={Platform.OS === 'ios' ? 'small' : 'large'}
        color={Platform.OS === 'ios' ? '#007AFF' : '#3F51B5'}
      />
    );

    export default Loader;
