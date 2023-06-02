import { useEffect } from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { useSelector, useDispatch } from 'react-redux';
import { history } from '../_helpers';
import { authActions } from '../_store';
import { Table } from 'react-bootstrap';
import "./Login.scss"
export { Login };

function Login() {
    const dispatch = useDispatch();
    const authUser = useSelector(x => x.auth.user);
    const authError = useSelector(x => x.auth.error);

    useEffect(() => {
        if (authUser) history.navigate(`/${authUser.role}`);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const validationSchema = Yup.object().shape({
        username: Yup.string().required('Username is required'),
        password: Yup.string().required('Password is required')
    });
    const formOptions = {resolver: yupResolver(validationSchema) };

    const { register, handleSubmit, formState } = useForm(formOptions);
    const { errors, isSubmitting } = formState;

    function onSubmit({ username, password }) {
        return dispatch(authActions.login({ username, password }));
    }

    return (
        <div className="admin-access">
            <div className="admin-access__main">
                <div className="admin-access--info">
                    <Table>
                        <thead>
                            <th>Тип учетной записи</th>
                            <th>Имя пользователя</th>
                            <th>Пароль</th>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Преподаватель</td>
                                <td>test</td>
                                <td>test</td>
                            </tr>
                            <tr>
                                <td>Студент</td>
                                <td>ahrilis</td>
                                <td>ahrilis</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
                <h4 className="admin-access__title">Вход</h4>
                <div className="admin-access__form">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="admin-access__form__field">
                        <div className='admin-access__form__field-name'>Имя пользователя</div>
                            <input name="username" type="text" {...register('username')} className={`admin-access__form__field-input ${errors.username ? 'is-invalid' : ''} `} />
                            <div className="invalid-feedback">{errors.username?.message}</div>
                        </div>
                        <div className="admin-access__form__field">
                            <div className='admin-access__form__field-name'>Пароль</div>
                            <input name="password" type="password" {...register('password')} className={`admin-access__form__field-input ${errors.password ? 'is-invalid' : ''}`} />
                            <div className="invalid-feedback">{errors.password?.message}</div>
                        </div>
                        <button disabled={isSubmitting} className="admin-access__form__button">
                            {isSubmitting && <span className="spinner-border spinner-border-sm mr-1"></span>}
                            Войти
                        </button>
                        {authError &&
                            <div className="alert alert-danger mt-3 mb-0">{authError.message}</div>
                        }
                    </form>
                </div>
            </div>
        </div>
    )
}
