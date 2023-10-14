import { GitHubRepository, GitHubBranch, GitHubCommit } from "../types/github.types";


const BASE_URL: string = Bun.env.GITHUB_API_URL ?? "";

export default {
  async getRepositoryInformation(owner: string, repo: string): Promise<GitHubRepository> {
    const apiUrl = `${BASE_URL}/repos/${owner}/${repo}`;
  
    try {
      const response = await fetch(apiUrl);
      if (response.ok) {
        const data = await response.json();
        return data;
      } else {
        throw new Error('Unable to retrieve repository information');
      }
    } catch (error) {
      throw new Error('Unable to retrieve repository information');
    }
  },

  async getBranches(owner: string, repo: string): Promise<GitHubBranch[]> {
    const apiUrl = `${BASE_URL}/repos/${owner}/${repo}/branches`;
  
    try {
      const response = await fetch(apiUrl);
      if (response.ok) {
        const data = await response.json();
        return data;
      } else {
        throw new Error('Unable to retrieve branches');
      }
    } catch (error) {
      throw new Error('Unable to retrieve branches');
    }
  },

  async getCommits(owner: string, repo: string, sha: string): Promise<GitHubCommit[]> {
    const apiUrl = `${BASE_URL}/repos/${owner}/${repo}/commits?sha=${encodeURIComponent(sha)}`;

    try {
      const response = await fetch(apiUrl);
      
      if (response.ok) {
        const data = await response.json();
        return data;
      } else {
        throw new Error('Unable to retrieve commit history');
      }
    } catch (error) {
      throw new Error('Unable to retrieve commit history');
    }
  },
}
