import { useState, useEffect } from 'react';
import { getDataListAsync } from '../store/slices/api.slice';
import { useDispatch, useTypedSelector } from '../store/store';
import DataTable from './DataTable';


const Home = () => {

  const { isLoading, data } = useTypedSelector((state) => state.api);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDataListAsync());
  }, []);

  return (
    <>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div>
          <DataTable
            props={{
              isLoading: isLoading,
              data: data
            }}
          />
        </div>
      )}
    </>
  )
};

export default Home;