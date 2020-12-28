import {useContext} from "react";
import Adjustments from "../Icons/Adjustments";
import AdjustmentsOutline from "../Icons/AdjustmentsOutline";
import Search from "../Icons/Search";
import SearchOutline from "../Icons/SearchOutline";
import PlusOutline from "../Icons/PlusOutline";
import Plus from "../Icons/Plus";
import {TaskContext} from "../../contexts/TaskContext";

const Header = () => {
    const {actions} = useContext(TaskContext)

    return (
        <div className="bg-blue-100 max-w-full pb-2 pt-2">
            <div className="container mx-auto">
                <div className="flex justify-between items-center">
                    <div>
                        <h1 className="uppercase">task managment app</h1>
                    </div>
                    <div className="flex">
                        <PlusOutline className="w-6 h-6" onClick={actions.addTask} />
                        <Plus className="w-6 h-6" />
                        <Search className="w-6 h-6" />
                        <SearchOutline className="w-6 h-6" />
                        <AdjustmentsOutline className="w-6 h-6" />
                        <Adjustments className="w-6 h-6" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;
