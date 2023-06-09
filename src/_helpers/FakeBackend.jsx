export function fakeBackend() {
    let users = [{ id: 1, username: 'test', password: 'test', firstName: 'Test', lastName: 'User', patronymicName: "users", role: "test"}];
    let menuPoints = [{id: 1, link: "/auth", title: "Войти"}, {id: 2, link: "/subscribe", title: "Регистрация"}]
    let realFetch = window.fetch;
    
    window.fetch = function (url, opts) {
        return new Promise((resolve, reject) => {
            // wrap in timeout to simulate server api call
            setTimeout(handleRoute, 1000);

            function handleRoute() {
                switch (true) {
                    case url.endsWith('api/parseUserLogin') && opts.method === 'POST':
                        return authenticate();
                    case url.endsWith('api/users') && opts.method === 'GET':
                        return getUsers();
                    case url.endsWith('api/getMenuPoints') && opts.method === 'POST':
                            return getMenuPoints();
                    default:
                        return realFetch(url, opts)
                            .then(response => resolve(response))
                            .catch(error => reject(error));
                }
            }

            function authenticate() {
                const { username, password } = body();
                const user = users.find(x => x.username === username && x.password === password);
                console.log({user})
                if (!user) return error('Username or password is incorrect');

                return ok({
                    id: user.id,
                    username: user.login,
                    firstName: user.firstName,
                    lastName: user.lastName,
                    role: user.role,
                    token: 'fake-jwt-token'
                });
            }

            function getUsers() {
                if (!isAuthenticated()) return unauthorized();
                return ok(users);
            }

            function  getMenuPoints() {
                return ok(menuPoints)
            }

            function ok(body) {
                resolve({ ok: true, text: () => Promise.resolve(JSON.stringify(body)) })
            }

            function unauthorized() {
                resolve({ status: 401, text: () => Promise.resolve(JSON.stringify({ message: 'Unauthorized' })) })
            }

            function error(message) {
                resolve({ status: 400, text: () => Promise.resolve(JSON.stringify({ message })) })
            }

            function isAuthenticated() {
                return opts.headers['Authorization'] === 'Bearer fake-jwt-token';
            }

            function body() {
                return opts.body && JSON.parse(opts.body);    
            }
        });
    }
}
