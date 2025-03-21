export function getRepoName() {
  const repoName = import.meta.env.VITE_REPO_NAME;
  if (!repoName) {
    return "";
  }

  return repoName;
}
