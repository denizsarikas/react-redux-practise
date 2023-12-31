import {MdLibraryAdd} from "react-icons/md"
import { useDispatch } from "react-redux";
import { modalFunc } from "../redux/modalSlice";

const Header = () => {

    const dispatch = useDispatch();

  return (
    <div className="flex items-center justify-between bg-indigo-600 text-white px-4 py-3">
      <div className="text-3xl">React Redux Uygulama</div>
      <div className="flex items-center gap-5 text-black">
          <select className="h-10 rounded-lg" name="" id="">
            <option value="asc">Artan</option>
            <option value="desc">Azalan</option>
          </select>
          <input className="h-10 rounded-lg" type="text" placeholder="arama" />
          <div onClick={() => dispatch(modalFunc())} className="bg-indigo-800 w-10 h-10 rounded-full flex items-center justify-center cursor-pointer">
          <MdLibraryAdd />
          </div>
      </div>
    </div>
  );
};

export default Header;
