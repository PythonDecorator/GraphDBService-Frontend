import {redirect} from 'react-router-dom';

export function action({request}) {
    const searchParams = new URL(request.url).searchParams;
    const mode = searchParams.get('mode')

    if (mode === "logout") {

        localStorage.removeItem('token');
        localStorage.removeItem('expiration');
        return redirect('../auth/login');
    }

    return null

}