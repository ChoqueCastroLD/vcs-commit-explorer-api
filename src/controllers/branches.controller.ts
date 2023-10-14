import GitHubService from "../services/github.service"


export async function getBranches(vcs: string, owner: string, repository: string) {
    const branches = await GitHubService.getBranches(owner, repository)

    return branches.map(branch => {
        return {
            name: branch.name,
            sha: branch.commit.sha
        }
    })
}
