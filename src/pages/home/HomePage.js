import {Box} from "@mui/material";
import {useQuery} from "@tanstack/react-query";
import {getUsersUrl} from "../../utils/apiUrls/auth.js";
import {unAuthorizedRequest} from "../../utils/helpers/http.js";
import Loading from "../../components/Loading";
import ErrorMessage from "../../components/ErrorMessage";
import UsersTable from "../../components/UsersTable.js";


const HomePage = () => {
    const url = getUsersUrl
    const {data, isPending, isError, error} =
        useQuery({
            queryKey: ['users'],
            queryFn: ({signal, queryKey}) =>
                unAuthorizedRequest({url, signal, ...queryKey[1]}),
            staleTime: 5000,
            // gcTime: 60 * 60
        });

    let content;

    if (isPending) {
        content = <Loading size={70}/>
    }

    if (isError) {
        content = <ErrorMessage message={error.detail?.message || 'Failed to fetch users.'}/>

    }

    if (data) {
        content = <UsersTable resData={data}/>
    }

    return (
        <>
            <Box>
                {content}
            </Box>
        </>

    )
}
export default HomePage;
