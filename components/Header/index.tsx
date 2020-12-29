import {useContext} from "react";
import Link from 'next/link';
import Adjustments from "../Icons/Adjustments";
import AdjustmentsOutline from "../Icons/AdjustmentsOutline";
import Search from "../Icons/Search";
import SearchOutline from "../Icons/SearchOutline";
import PlusOutline from "../Icons/PlusOutline";
import Plus from "../Icons/Plus";
import {TaskContext} from "contexts/TaskContext";
import {AuthContext} from "contexts/AuthContext";

const Header = () => {
    const {actions} = useContext(TaskContext)
    const auth = useContext(AuthContext)

    const getUserRepos = async () => {
        const data = await fetch('https://api.github.com/user/repos', {
            headers: {
                Authorization: 'token ' + auth.accessToken
            }
        })
            .then(response => response.json())
            .catch(error => {
                console.log("Couldnt get all repos")
                console.log(error)
            })

        console.log(data);
    }

    return (
        <div className="bg-blue-100 dark:bg-gray-700 max-w-full pb-2 pt-2">
            <div className="container mx-auto">
                <div className="flex justify-between items-center">
                    <div>
                        <h1 className="uppercase">task managment app</h1>
                    </div>
                    <div className="flex">
                        <PlusOutline className="w-6 h-6" onClick={actions.addTask}/>
                        <Plus className="w-6 h-6"/>
                        <Search className="w-6 h-6"/>
                        <SearchOutline className="w-6 h-6"/>
                        <AdjustmentsOutline className="w-6 h-6"/>
                        <Adjustments className="w-6 h-6"/>
                        <button onClick={auth.login}>Login</button>
                        <button onClick={auth.logout}>Logout</button>
                        <Link href="/profile">Profile</Link>
                        <button onClick={getUserRepos}>Get use repos</button>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Header;
