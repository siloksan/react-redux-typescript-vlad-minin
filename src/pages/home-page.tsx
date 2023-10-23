import React from 'react';
import {useSearchUsersQuery} from "../store/github/github.api";

const HomePage = () => {

    const {isLoading, isError, data} = useSearchUsersQuery('siloksan')

  return (
    <div>
      Home Page
    </div>
  );
};

export default HomePage;