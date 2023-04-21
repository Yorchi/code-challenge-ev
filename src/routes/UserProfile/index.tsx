import React from 'react';
import {useQuery} from '@tanstack/react-query';
import {useParams} from 'react-router-dom';
import {fetchUser, GithubProfile} from '../../api/queries/fetchUsers';
import Card from '../../components/Card';

import github from '../../assets/images/github.png'
import link from '../../assets/images/link.png'
import location from '../../assets/images/location.png'
import mail from '../../assets/images/mail.png'
import twitter from '../../assets/images/twitter.png'

function UserProfile() {
  let { userLogin } = useParams();

  const {data, isLoading, error} = useQuery<GithubProfile>(
    ['response', userLogin],
    (): Promise<GithubProfile> => {
      return fetchUser(userLogin);
    },
  );

  if (isLoading) {
    <div className="min-h-full">
      Loading..
    </div>
  }
  
  if (error) {
    <div className="min-h-full">
      An error Has been ocurred loading a user.
    </div>
  }

  return (
    <div className="min-h-full w-full md:w-2/3 md:max-w-1/2 mx-auto">
      <Card>
        <div className="flex">
          <div className="w-auto">
            <div className="flex flex-shrink-0 items-center justify-center rounded-full bg-red-100 h-12 w-12">
              <img src={data?.avatar_url} alt={data?.login} className="rounded-full" />
            </div>
          </div>
          <div className="w-full">
            <div className="w-full flex-col md:flex-row flex mb-6">
              <div className="w-full md:w-2/5 px-3">
                <h3 className="text-xl font-bold mb-3">{data?.name}</h3>

                <p className="text-sm mb-6">{data?.bio}</p>
              </div>
              <div className="w-full md:w-2/5 px-3">
                <a href={data?.html_url} target="_blank" rel="noreferrer" className="hidden md:flex items-center mb-3">
                  <img src={github} alt="Github user profile link" className="h-6 w-6 mr-3"/>
                  <span>{data?.login}</span>
                </a>

                <div className="flex items-center justify-between bg-gray-100 rounded-xl p-3 mb-2">
                  <div className="text-center flex-1">
                    <span className="text-xs text-gray-400">Repos</span>
                    <p className="text-xl font-bold text-gray-700">{data?.public_repos}</p>
                  </div>
                  <div className="text-center flex-1">
                    <span className="text-xs text-gray-400">Followers</span>
                    <p className="text-xl font-bold text-gray-700">{data?.followers}</p>
                  </div>
                  <div className="text-center flex-1">
                    <span className="text-xs text-gray-400">Following</span>
                    <p className="text-xl font-bold text-gray-700">{data?.following}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full flex-col md:flex-row flex mb-6">
              <div className="w-full md:w-2/5 px-3">
                <a href={data?.html_url} target="_blank" rel="noreferrer" className="flex items-center mb-3 md:hidden">
                  <img src={github} alt="Github user profile link" className="h-6 w-6 mr-3"/>
                  <span>{data?.login}</span>
                </a>

                {data?.location && (
                  <p className="flex items-center mb-2">
                    <img src={location} alt="User's location" className="h-6 w-6 mr-3"/>
                    <span>{data?.location}</span>
                  </p>
                )}

                {data?.email && (
                  <p className="flex items-center mb-2">
                    <img src={mail} alt="User's email" className="h-6 w-6 mr-3"/>
                    <span>{data?.email}</span>
                  </p>
                )}
              </div>
              <div className="w-full md:w-2/5 px-3">
                {data?.twitter_username && (
                  <p className="flex items-center mb-2">
                    <img src={twitter} alt="Twitter user profile link" className="h-6 w-6 mr-3"/>
                    <span>{data?.twitter_username}</span>
                  </p>
                )}
                {data?.blog && (
                  <a href={data?.blog} target="_blank" rel="noreferrer" className="flex items-center mb-2">
                    <img src={link} alt="User's blog" className="h-6 w-6 mr-3"/>
                    <span>{data?.login}</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );  
}

export default UserProfile;
