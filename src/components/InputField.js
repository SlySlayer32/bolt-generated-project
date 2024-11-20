import React from 'react';
    import { Platform, TextInput } from 'react-native';

    const InputField = ({ placeholder, onChangeText, value }) => (
      <TextInput
        style={Platform.OS === 'ios' ? styles.iosInput : styles.androidInput}
        placeholder={placeholder}
        onChangeText={onChangeText}
        value={value}
      />
    );

    const styles = {
      iosInput: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        borderRadius: 5,
        marginBottom: 10,
      },
      androidInput: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        borderRadius: 2,
        marginBottom: 10,
      },
    };

    export default InputField;