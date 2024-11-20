import PushNotification from 'react-native-push-notification';

    export const configureNotifications = () => {
      PushNotification.configure({
        onRegister: function(token) {
          console.log('TOKEN:', token);
        },
        onNotification: function(notification) {
          console.log('NOTIFICATION:', notification);
        },
        permissions: {
          alert: true,
          badge: true,
          sound: true,
        },
        popInitialNotification: true,
        requestPermissions: true,
      });
    };

    export const sendNotification = (title, message) => {
      PushNotification.localNotification({
        title: title,
        message: message,
      });
    };
