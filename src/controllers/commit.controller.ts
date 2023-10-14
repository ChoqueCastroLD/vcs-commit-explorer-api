import GitHubService from "../services/github.service"


export async function getCommits(vcs: string, owner: string, repository: string, sha: string) {
    const commits = await GitHubService.getCommits(owner, repository, sha)
    return commits.map(({ sha, node_id, parents, commit }) => {
        return {
            sha,
            node_id,
            message: commit.message,
            author_name: commit.author.name,
            author_email: commit.author.email,
            commiter_name: commit.committer.name,
            commiter_email: commit.committer.email,
            parents: parents.map(({ sha }) => sha)
        }
    })
}