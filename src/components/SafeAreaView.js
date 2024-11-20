import React from 'react';
    import { Platform, SafeAreaView as RNSafeAreaView } from 'react-native';

    const SafeAreaView = ({ children, ...props }) => (
      <RNSafeAreaView
        style={Platform.OS === 'ios' ? styles.iosSafeArea : styles.androidSafeArea}
        {...props}
      >
        {children}
      </RNSafeAreaView>
    );

    const styles = {
      iosSafeArea: {
        flex: 1,
        paddingTop: Platform.OS === 'ios' ? 20 : 0,
      },
      androidSafeArea: {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? 10 : 0,
      },
    };

    export default SafeAreaView;
