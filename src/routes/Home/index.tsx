import React, {useMemo, useState} from 'react';
import {useQuery} from '@tanstack/react-query';
import debounce from 'lodash.debounce';
import Card from '../../components/Card';
import {fetchUsers, Response, User} from '../../api/queries/fetchUsers';
import Heading from '../../components/Heading';
import Input from '../../components/Form/Input';
import GithubUserCard from './components/GithubUserCard';
import Select from '../../components/Form/Select';

function Home() {
  const [query, setQuery] = useState<string| null>(null);
  const [page, setPage] = useState<number>(1);
  const [perPage, setPerPage] = useState<number>(10);

  const setQueryValue = debounce(value => {
    if (!value) {
      return setQuery(null)
    }
  
    setQuery(value)
    setPage(1)
  }, 500);


  const setPerPageValue = debounce(value => {
    if (!value) {
      return setQuery(null)
    }

    setPage(1)
    setPerPage(value)
  }, 500)

  const {data, isLoading} = useQuery<Response>(
    ['response', query, page, perPage],
    (): Promise<Response> => {
      return fetchUsers(query, page, perPage);
    },
  );

  const loadMore = () => {
    setPage(page + 1);
  }

  const showLoadMoreButton = useMemo<boolean>((): boolean => {
    if (!data) {
      return false;
    }

    const currentItems = data.items.length;
    
    if (currentItems < perPage) {
      return false;
    }
    
    const totalCurrentItems = perPage * page - (perPage - currentItems);
    if (totalCurrentItems >= data.total_count) {
      return false;
    }

    return true;
  }, [data, page, perPage]);


  return (
    <div className="min-h-full">
      <Heading label="GitHub Users">
        <div className="flex justify-end items-center">
          <div className="flex justify-end items-center">
            <span className="mr-3">Users per page:</span>

            <Select
              value={perPage}
              onChange={(event) => setPerPageValue(event.target.value)}
              options={[10, 20, 50, 100]}
              containerClassName="mr-3" />
          </div>
          <Input
            type="text"
            name="search"
            onChange={(event) => setQueryValue(event.target.value)}
            placeholder="Enter username or email" />
        </div>
      </Heading>

      {data ? (
        <div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            {data?.items.map((user: User) => (
              <GithubUserCard user={user} />
            ))}
          </div>

          <div className="flex justify-end">
            {showLoadMoreButton && (
              <button onClick={loadMore} className=" rounded-lg bg-white text-left transition-all px-3 py-2 border border-gray-200">
                {isLoading ? 'Loading': 'Load more'}
              </button>
            )}
          </div>
        </div>
      ): (
        <Card>
          <p>No users found</p>
        </Card>
      )}
    </div>
  );  
}

export default Home;
