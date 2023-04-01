import PushNotificationIOS from '@react-native-community/push-notification-ios';

const showNotificationiOS = (title, message) => {
  PushNotificationIOS.addNotificationRequest({
    alertAction: title,
    alertBody: message,
  });
};

// const getCorrectDate = () => {
//   const date = new Date();
//   date.setDate(date.getDate() + 1);
//   date.setHours(23);
//   date.setMinutes(54);
//   return date;
// };

const handleScheduleNotificationiOS = (title, message, date, data) => {
  console.log('dataa ', date);
  //   const date = new Date();
  //   date.setSeconds(date.getSeconds() * 5);
  //   console.log('data ', date.toISOString());
  PushNotificationIOS.scheduleLocalNotification({
    alertTitle: title,
    alertBody: message,
    fireDate: date,
    userInfo: data,
  });
};

const handleCancelNotificationiOS = () => {
  PushNotificationIOS.removeAllDeliveredNotifications();
};

export {
  showNotificationiOS,
  handleScheduleNotificationiOS,
  handleCancelNotificationiOS,
};
