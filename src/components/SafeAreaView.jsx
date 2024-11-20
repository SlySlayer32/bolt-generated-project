import React from 'react';
    import { SafeAreaView as RNSafeAreaView, StyleSheet, Platform } from 'react-native';

    const SafeAreaView = ({ children }) => (
      <RNSafeAreaView
        style={Platform.OS === 'ios' ? styles.iosSafeArea : styles.androidSafeArea}
      >
        {children}
      </RNSafeAreaView>
    );

    const styles = StyleSheet.create({
      iosSafeArea: {
        flex: 1,
        paddingTop: Platform.OS === 'ios' ? 20 : 0,
      },
      androidSafeArea: {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? 10 : 0,
      },
    });

    export default SafeAreaView;
