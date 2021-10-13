import {useEffect, useState} from 'react';
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';

export const useAuthUser = () => {
  const [user, setUser] = useState<
    FirebaseAuthTypes.User | null | boolean | string
  >(null);
  const currentUser = auth().currentUser;

  const handleLoggedInUser = async (authUser: FirebaseAuthTypes.User) => {
    //TO-DO ---- Get the User Data, Set in AsyncStorage, and Complete the Login....
    setUser(authUser);
  };

  useEffect(() => {
    // noinspection UnnecessaryLocalVariableJS
    const unsubscribe = auth().onAuthStateChanged(authUser => {
      console.log(authUser);
      if (authUser) {
        handleLoggedInUser(authUser);
      } else {
        setUser(false);
      }
    });

    return unsubscribe;
  }, [currentUser]);

  return user;
};
