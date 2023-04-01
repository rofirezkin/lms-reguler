import {createNavigationContainerRef} from '@react-navigation/native';

export const navigationRef = createNavigationContainerRef();

export function navigate(name, params) {
  if (params.type === 'quiz') {
    if (navigationRef.isReady()) {
      navigationRef.navigate('TaskNavigator', {
        screen: name,
        params: params,
      });
    }
  } else {
    if (navigationRef.isReady()) {
      navigationRef.navigate(name, params);
    }
  }
}
