const githubUsername = "michaellui67";
const mediumUsername = "michael.lui67";

const createMediumURL = (username) => `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@${username}`;
const gitRepos = (username) => `https://pinned.berrysauce.dev/get/${username}`;

export const URLs = {
    medium: createMediumURL(mediumUsername),
    gitRepo: gitRepos(githubUsername),
};
