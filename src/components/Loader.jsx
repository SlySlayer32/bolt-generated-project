import React from 'react';
    import { ActivityIndicator, StyleSheet, Platform } from 'react-native';

    const Loader = () => (
      <ActivityIndicator
        size={Platform.OS === 'ios' ? 'small' : 'large'}
        color={Platform.OS === 'ios' ? '#007AFF' : '#3F51B5'}
      />
    );

    const styles = StyleSheet.create({
      loader: {
        marginTop: 20,
      },
    });

    export default Loader;
