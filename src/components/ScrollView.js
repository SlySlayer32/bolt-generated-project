import React from 'react';
    import { Platform, ScrollView as RNScrollView } from 'react-native';

    const ScrollView = ({ children, ...props }) => (
      <RNScrollView
        contentContainerStyle={Platform.OS === 'ios' ? styles.iosContentContainer : styles.androidContentContainer}
        {...props}
      >
        {children}
      </RNScrollView>
    );

    const styles = {
      iosContentContainer: {
        paddingBottom: 20,
      },
      androidContentContainer: {
        paddingBottom: 10,
      },
    };

    export default ScrollView;
