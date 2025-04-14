export const getUsers = (limit) => {
    const data = [];
    for (let i = 0; i < limit; i++) {
        data.push({
            id: i,
            name: `Alice Corp ${i}`,
            email: `alice@corp.com ${i}`
        });
    }
    return data;
}
