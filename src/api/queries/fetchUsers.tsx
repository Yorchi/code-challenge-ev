import axios from "axios";

export type User = {
  id: number;
  avatar_url: string;
  events_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  gravatar_id: string;
  html_url: string;
  login: string;
  node_id: string;
  organizations_url: string;
  received_events_url: string;
  repos_url: string;
  score: number;
  site_admin: boolean;
  starred_url: string;
  subscriptions_url: string;
  type: string;
  url: string;
};

export interface GithubProfile extends User {
  name: string;
  company: string;
  location: string;
  email?: string;
  bio?: string;
  blog?: string;
  twitter_username?: string;
  followers: number;
  following: number;
  public_repos: number;
};

export type Users = ReadonlyArray<User>;

export type Response = {
  total_count: number;
  items: Users;
  incomplete_results: boolean;
};

export const fetchUsers = async (query: string | null, page: number, perPage: number): Promise<Response> => {
  if (!query) {
    return Promise.reject(new Error('Invalid query value'));
  }

  return axios.get(`${process.env.REACT_APP_GITHUB_API}search/users`, {
    params: {
      q: query,
      page,
      per_page: perPage,
    }
  })
    .then((response) => response.data);
};


export const fetchUser = async (login?: string): Promise<GithubProfile> => {
  if (!login) {
    return Promise.reject(new Error('Invalid username value'));
  }

  return axios.get(`${process.env.REACT_APP_GITHUB_API}users/${login}`)
    .then((response) => response.data);
};
