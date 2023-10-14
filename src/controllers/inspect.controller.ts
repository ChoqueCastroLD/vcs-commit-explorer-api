import GitHubService from "../services/github.service"


export async function inspect(vcs: string, owner: string, repository: string) {
    const repositoryInformation = await GitHubService.getRepositoryInformation(owner, repository)

    return {
        owner: repositoryInformation.owner.login,
        owner_avatar_url: repositoryInformation.owner.avatar_url,
        owner_url: repositoryInformation.owner.url,
        name: repositoryInformation.name,
        description: repositoryInformation.description,
        stars: repositoryInformation.stargazers_count,
        watchers: repositoryInformation.watchers_count,
        forks: repositoryInformation.forks_count,
        language: repositoryInformation.language,
        default_branch: repositoryInformation.default_branch,
        license_name: repositoryInformation.license?.name,
        license_url: repositoryInformation.license?.url,
        fork: repositoryInformation.fork,
        created_at: repositoryInformation.created_at,
        updated_at: repositoryInformation.updated_at
    }
}