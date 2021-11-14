
import { Octokit } from "@octokit/core";

const octokit = new Octokit({     
    type: 'token',
    username: 'pl2ern4',
    auth: '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'
});

export const getRepository = async (query) =>{
    const resp = await octokit.request('GET /search/code', {
        q: query,
        type:'Repositories',
        is:'public',
        in:'name',  
        org:'github'
    });

    return resp;
}