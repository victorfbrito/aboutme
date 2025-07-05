import { NextApiRequest, NextApiResponse } from 'next';

const username = process.env.GITHUB_USERNAME;
const token = process.env.GITHUB_TOKEN;

export default async function handler(_req: NextApiRequest, res: NextApiResponse) {
  try {
    const headers = {
      Authorization: `token ${token}`,
    };

    let page = 1;
    let totalCommits = 0;
    let hasMore = true;

    while (hasMore) {
      const response = await fetch(
        `https://api.github.com/search/commits?q=author:${username}&per_page=100&page=${page}`,
        {
          headers: {
            ...headers,
            Accept: 'application/vnd.github.cloak-preview',
          },
        }
      );

      const data = await response.json();
      if (!data.items || data.items.length === 0) break;

      totalCommits += data.items.length;
      hasMore = data.total_count > totalCommits;
      page++;
    }

    res.status(200).json({ commits: totalCommits });
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch commits' });
  }
}
