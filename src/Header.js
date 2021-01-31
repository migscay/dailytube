import React, {useState} from 'react';
// import ReactDOM from 'react-dom';
import { BrowserRouter, Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';
import './Header.css';
import MenuSharpIcon from '@material-ui/icons/MenuSharp';
import SearchIcon from '@material-ui/icons/Search';
import MicIcon from '@material-ui/icons/Mic';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Avatar from '@material-ui/core/Avatar';


function Header() {
    const [inputSearch,setInputSearch] = useState('');

    return (
        <div className="header">
            <div className="header__left">    
                <MenuSharpIcon/>
                {/* <BrowserRouter> */}
                {/* <Link to="/"> */}
                <a href="/">
                <img 
                    className="header__logo"
                    src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg" alt="you tube logo" />
                {/* </Link> */}
                </a>
                {/* </BrowserRouter> */}
            </div>
            <div className="header__center">
                <div className="header__searchInput">
                    <div className="header__input">
                        <input 
                            onChange={e => setInputSearch(e.target.value)} 
                            placeHolder="Search" value={inputSearch} type="text">
                        </input>
                    </div>
                    <div className="header__search">
                    <BrowserRouter>
                        <Link to={`/search/${inputSearch}`}>
                            <SearchIcon />
                        </Link>
                    </BrowserRouter>
                    </div>
                </div>
                <div className="header__mic">
                    <MicIcon />
                </div>
            </div>
            <div className="header__icons">
                <VideoCallIcon />
                <AppsIcon />
                <NotificationsIcon />
                <Avatar
                    alt="Miguel Santiago"
                    src="https://yt3.ggpht.com/yti/ANoDKi6AVZ_F33V2WtPqtZggGwdNZ_LKBNJf7iBHXMgJIw=s88-c-k-c0x00ffffff-no-rj-mo"
                />
            </div>
        </div>
    )
}

export default Header
