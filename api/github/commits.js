export default async function handler(req, res) {
  const GITHUB_USERNAME = 'victorfbrito';
  const GITHUB_REPO = 'your-repo-name';
  const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

  const headers = {
    Authorization: `token ${GITHUB_TOKEN}`,
    Accept: 'application/vnd.github.v3+json',
  };

  try {
    const response = await fetch(
      `https://api.github.com/repos/${GITHUB_USERNAME}/${GITHUB_REPO}/commits?per_page=100`,
      { headers }
    );
    const commits = await response.json();
    res.status(200).json({ count: commits.length });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch commits' });
  }
}
