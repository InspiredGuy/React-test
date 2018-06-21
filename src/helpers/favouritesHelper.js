export function getKey(repo) {
    return `${repo.owner.login}/${repo.name}`;
}
