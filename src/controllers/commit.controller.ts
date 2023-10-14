import GitHubService from "../services/github.service"


export async function getCommits(vcs: string, owner: string, repository: string, sha: string) {
    return GitHubService.getCommits(owner, repository, sha)
}