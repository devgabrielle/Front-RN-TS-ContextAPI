interface Response {
    token: string;
    user: {
        name: string;
        email: string;
    };
}

export function signIn(): Promise<Response> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                token: 'hjhfjtfjhvhb767gt6tjgkudfytghvc',
                user: {
                    name: 'Gabi',
                    email: 'gabada@techmae.com.br'
                },
            });

        }, 1500);
    });
}
