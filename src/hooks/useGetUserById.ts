import React, {useEffect} from 'react';

import {User} from 'components/UserInfo/types';

import {getUserByIdRequest} from 'network';

interface IRequestState<T> {
  isLoading: boolean;
  error: Error | null;
  data: T | null;
}

const initialState: IRequestState<null> = {
  isLoading: false,
  error: null,
  data: null,
};

const userCash: Record<string, User> = {};

const useGetUserById = (userId: number): IRequestState<User | null> => {
  const [requestState, setRequestState] =
    React.useState<IRequestState<User | null>>(initialState);

  useEffect(() => {
    if (userCash[userId]) {
      setRequestState({
        ...initialState,
        data: userCash[userId],
      });
      return;
    }

    setRequestState(state => ({...state, isLoading: true}));
    getUserByIdRequest(userId)
      .then(res => res.json())
      .then(data => {
        userCash[userId] = data;
        setRequestState({
          ...initialState,
          data: data,
        });
      })
      .catch(error => {
        setRequestState({
          ...initialState,
          error: error,
        });
      });
  }, [userId]);

  return requestState;
};

export default useGetUserById;
