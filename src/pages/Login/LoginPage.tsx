import React, { useRef, useState } from "react";
import { ISigninRequest } from "../../models/Users/Signin/SigninRequest";
import { AxiosError, AxiosResponse } from "axios";
import { UserTokenResponse } from "../../models/Users/UserTokenResponse";
import { AuthService } from "../../services/AuthService";
import UserService from "../../services/UserService";
import FormHelper from "../../helpers/FormHelper";

const LoginPage: React.FC = () => {
    const [credentials, setCredentials] = useState<ISigninRequest>({ email: '', password: '' });
    const formRef = useRef<HTMLFormElement>(null);

    const formHelper = new FormHelper<ISigninRequest>({
        form: formRef,
        formData: credentials,
        setFormData: setCredentials,
    });

    function handleSignIn(event: React.FormEvent) {
        event.preventDefault();

        UserService.signin(credentials)
            .then((response: AxiosResponse) => {
                var authService = new AuthService();

                var userTokenResponse = response.data as UserTokenResponse;
                authService.setAuthorizationToken(userTokenResponse);

                window.location.href = "/home";
            }).catch((error: AxiosError) => {

            })
    }

    return (
        <form ref={formRef} onSubmit={handleSignIn} className='needs-validation was-validated' noValidate>
            <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
                <div className="card p-4" style={{ width: '300px' }}>
                    <h2 className="mb-4">Sign In</h2>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">
                            Email address
                        </label>
                        <input
                            type="email"
                            className="form-control"
                            name="email"
                            onChange={formHelper.handleChangeValues}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">
                            Password
                        </label>
                        <input
                            type="password"
                            className="form-control"
                            name="password"
                            onChange={formHelper.handleChangeValues}
                        />
                    </div>
                    <button className="btn btn-primary" type="submit">
                        Sign In
                    </button>
                </div>
            </div>
        </form>
    );
};

export default LoginPage;