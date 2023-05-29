
import article1 from '../img/article1.jpg';
import article3 from '../img/article3.jpg';
import article4 from '../img/article4.jpeg';
import article5 from '../img/article5.jpg';
import article6 from '../img/article6.jpg';
import article7 from '../img/article7.jpg';
import article8 from '../img/article8.jpg';

export function fakeBackend() {
    let users = [{ id: 1, username: 'test', password: 'test', firstName: 'Test', lastName: 'User', patronymicName: "users", role: "student"}];
    let courses = [
        {id: 0, src: article1, text: "Чайная церемония", data: '11/07/2022'},
        {id: 2, src: article3, text: "Все о чае", data: '11/03/2022'},
        {id: 3, src: article4, text: "Чай Древнего Китая у вас на даче", data: '03/05/2022'},
        {id: 4, src: article5, text: "Все о чае", data: '11/05/2022'},
        {id: 5, src: article6, text: "Из какой чашки пить чай вкуснее всего: выбираем лучшую посуду по форме, объёму и материалу", data: '05/04/2022'},
        {id: 6, src: article7, text: "Научись заваривать чай", data: '21/02/2022'},
        {id: 7, src: article8, text: "Японское искусство заварки", data: '13/07/2022'},
      ]
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
                    case url.endsWith('api/getCourses') && opts.method === 'POST':
                        return getCourses();
                    case url.endsWith('api/getCourseById') && opts.method === 'POST':
                        const value = JSON.parse(opts.body).body
                        return getCourseById(value);
                    default:
                        return realFetch(url, opts)
                            .then(response => resolve(response))
                            .catch(error => reject(error));
                }
            }

            function authenticate() {
                const { username, password } = body();
                const user = users.find(x => x.username === username && x.password === password);
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

            function getCourseById(id) {
                const result = courses.filter(elem => elem.id === Number(id))
                if(result === []) return error("not found")
                return ok(result)
            }

            function getUsers() {
                if (!isAuthenticated()) return unauthorized();
                return ok(users);
            }

            function  getCourses() {
                return ok(courses)
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
