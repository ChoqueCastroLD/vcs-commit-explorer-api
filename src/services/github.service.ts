import { GitHubRepository, GitHubBranch, GitHubCommit } from "../types/github.types";

const BASE_URL: string = Bun.env.GITHUB_API_URL || "";

async function fetchJSON(url: string) {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Failed to fetch data. Status: ${response.status}`);
  }

  const contentType = response.headers.get('content-type');
  if (contentType?.includes('application/json')) {
    return response.json();
  } else {
    throw new Error('Invalid response format: Expected JSON');
  }
}

export default {
  async getRepositoryInformation(owner: string, repo: string): Promise<GitHubRepository> {
    const apiUrl = `${BASE_URL}/repos/${owner}/${repo}`;
    return fetchJSON(apiUrl);
  },

  async getBranches(owner: string, repo: string): Promise<GitHubBranch[]> {
    const apiUrl = `${BASE_URL}/repos/${owner}/${repo}/branches`;
    return fetchJSON(apiUrl);
  },

  async getCommits(owner: string, repo: string, sha: string): Promise<GitHubCommit[]> {
    const apiUrl = `${BASE_URL}/repos/${owner}/${repo}/commits?sha=${encodeURIComponent(sha)}`;
    return fetchJSON(apiUrl);
  },
}
