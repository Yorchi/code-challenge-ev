import React from 'react';
import Card from '../../../../components/Card';
import {User} from '../../../../api/queries/fetchUsers';
import github from '../../../../assets/images/github.png'
import { Link } from 'react-router-dom';

interface Props {
  user: User;
};

function GithubUserCard({user}: Props) {
  return (
    <Card>
      <div className="flex flex-col">
        <div className="flex items-center mb-6">
          <div className="flex flex-shrink-0 items-center justify-center rounded-full bg-red-100 h-12 w-12">
            <img src={user.avatar_url} alt={user.login} className="rounded-full" />
          </div>
          <h4 className="ml-3">{user.login}</h4>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <a href={user.html_url} target="_blank" rel="noreferrer">
              <img src={github} alt="Github user profile link" className="h-6 w-6"/>
            </a>
          </div>
          <div>
            <Link to={`user-profile/${user.login}`}>
              View Profile
            </Link>
          </div>
        </div>
      </div>
    </Card>
  );  
}

export default GithubUserCard;
