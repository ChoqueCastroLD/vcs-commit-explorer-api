import { RepositoryInfo } from "../types/github.types";


const BASE_URL: string = Bun.env.GITHUB_API_URL ?? "";

export default {
  async getRepositoryInformation(owner: string, repo: string): Promise<RepositoryInfo> {
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
  
  async getCommits(owner: string, repo: string) {
    const apiUrl = `${BASE_URL}/repos/${owner}/${repo}`;
  
    const commitsUrl = `${apiUrl}/commits`;
  
    try {
      const response = await fetch(commitsUrl);
      if (response.ok) {
        const data = await response.json();
        return data;
      } else {
        throw new Error('Unable to retrieve commit history');
      }
    } catch (error) {
      throw new Error('Unable to retrieve commit history');
    }
  } 
}
