import React from 'react';
    import { Platform, TouchableOpacity, Text } from 'react-native';

    const Button = ({ title, onPress }) => (
      <TouchableOpacity 
        style={Platform.OS === 'ios' ? styles.iosButton : styles.androidButton}
        onPress={onPress}
      >
        <Text style={styles.text}>{title}</Text>
      </TouchableOpacity>
    );

    const styles = {
      iosButton: {
        backgroundColor: '#007AFF',
        padding: 10,
        borderRadius: 5,
      },
      androidButton: {
        backgroundColor: '#3F51B5',
        padding: 10,
        borderRadius: 2,
      },
      text: {
        color: 'white',
        textAlign: 'center',
      },
    };

    export default Button;
