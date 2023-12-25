import { useContext } from 'react';
import { NotificationContext } from '../notification/notification';

const useNotification = () => {
  const { showNotification } = useContext(NotificationContext);
  return { showNotification };
};

export default useNotification;
