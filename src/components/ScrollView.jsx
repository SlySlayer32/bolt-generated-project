import React from 'react';
    import { ScrollView as RNScrollView, StyleSheet, Platform } from 'react-native';

    const ScrollView = ({ children }) => (
      <RNScrollView
        contentContainerStyle={Platform.OS === 'ios' ? styles.iosContentContainer : styles.androidContentContainer}
      >
        {children}
      </RNScrollView>
    );

    const styles = StyleSheet.create({
      iosContentContainer: {
        paddingBottom: 20,
      },
      androidContentContainer: {
        paddingBottom: 10,
      },
    });

    export default ScrollView;
