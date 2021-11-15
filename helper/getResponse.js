
import { Octokit } from "@octokit/core";
import { replacStringithValue } from './replaceStringWithValue';

const octokit = new Octokit({
    type: 'token',
    username: 'pl2ern4',
    auth: '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'
});

const API_URL = {
    FETCH_REPO: '/search/repositories',
    FETCH_COMMIT: '/repos/{owner}/{repo}/stats/commit_activity'
}

export const getRepository = async (query) => {
    const payload = {
        q: query,
        per_page: 5,
        sort: 'stars'
    }
    return getOctokitResult(API_URL.FETCH_REPO, payload)
}


export const getCommitDetails = async ({ owner, repo }) => {
    const payload = { owner, repo };
    const url = replacStringithValue(API_URL.FETCH_COMMIT, { ...payload });
    const resp = await getOctokitResult(url, { ...payload });
    return resp;
}

const getOctokitResult = async (url, payload) => {
    const resp = await octokit.request(`GET ${url}`, {
        ...payload
    });
    return resp;
}