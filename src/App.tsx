// Мы ожидаем, что Вы исправите синтаксические ошибки, сделаете перехват возможных исключений и улучшите читаемость кода.
// А так же, напишите кастомный хук useThrottle и используете его там где это нужно.
// Желательно использование React.memo и React.useCallback там где это имеет смысл.
// Будет большим плюсом, если Вы сможете закэшировать получение случайного пользователя.
// Укажите правильные типы.

import React, {useState} from 'react';

import UserInfo from 'components/UserInfo';
import Button from 'components/Button';

import WithFetchData from 'hoc/WithFetchData';

import useGetUserById from 'hooks/useGetUserById';
import useThrottle from 'hooks/useThrottle';

import randomInt from "helpers/randomInt";

const initialUserId = randomInt(1, 10);

function App(): JSX.Element {
  const [userId, setUserId] = useState<number>(initialUserId);
  const {isLoading, data: userInfo, error} = useGetUserById(userId);

  const handleNewUserId = () => {
    setUserId(randomInt(1,10));
  };

  const throttledHandleNewUserId = useThrottle(handleNewUserId, 300);

  return (
    <div>
      <header>
        <h1>Get a random user</h1>
      </header>
      <Button onClick={throttledHandleNewUserId} />
      <WithFetchData error={error} isLoading={isLoading}>
        <UserInfo user={userInfo} />
      </WithFetchData>
    </div>
  );
}

export default App;
