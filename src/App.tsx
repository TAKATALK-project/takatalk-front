import './App.css';
import { useEffect, useState } from 'react';
import { userApi } from './api/UserApi';
import type { MessageDto } from './types/user';


function App() {
  const [data, setData] = useState<MessageDto | null>(null);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const fetchTestData = async () => {
      try {
        const result = await userApi.test();
        setData(result);
      } catch(err:any) {
        setError(err.message || '에러가 발생했습니다.')
      }
    };

    fetchTestData();
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">API 통신 테스트</h1>

      {data ? 
      (
        <div className='p-4 bg-green-100 text-green-800 rounded'>
          성공메시지 : {data.message}
        </div>
      ) : error ? 
      (
        <div className='p-4 bg-red-100 text-red-800 rounded'>
          실패 사유 : {error}
        </div>
      ) : 
      (
        <p>로딩중...</p>
      )}
    </div>
  );
}

export default App;
