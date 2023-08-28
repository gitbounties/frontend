export interface Issue {
  issue_id: number;
  owner: string;
  repo: string;
}

export interface GithubIssue {
  author: string;
  description: string;
  title: string;
  issue: Issue;
}

export interface Bounty {
  user: string;
  reward: number;
  issue: Issue;
  status: string; // TODO make this an enum
  title: string;
  description: string;
  lables: string[];
  created: string;
  token_id: number;
}
