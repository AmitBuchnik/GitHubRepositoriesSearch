// Data object same as in server side
export class Gitrepoinfo {
    // repository name
    name: string;
    // repository url
    repoUrl: string;
    // owner avatar
    avatar: string;
}

export class Repositories {
    total_count: number;
    incomplete_results: boolean;
    items: Gitrepoinfo[];
}

