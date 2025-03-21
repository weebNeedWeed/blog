import { getRepoName } from "./getRepoName";

export const fetchPostContentFromFile = async (fileName) => {
  try {
    const repoName = getRepoName() ? `/${repoName}` : "";
    const response = await fetch(`${repoName}/posts-in-html/${fileName}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch post content: ${response.statusText}`);
    }
    const content = await response.text();
    return content;
  } catch (error) {
    console.error("Error fetching post content:", error);
    throw error;
  }
};
