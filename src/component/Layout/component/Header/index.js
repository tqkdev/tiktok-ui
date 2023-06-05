import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import {
    faCircleQuestion,
    faCircleXmark,
    faEarthAsia,
    faEllipsisVertical,
    faKeyboard,
    faMagnifyingGlass,
    faMoon,
    faPlus,
    faSpinner,
    faGear,
    faRightFromBracket,
} from '@fortawesome/free-solid-svg-icons';
import { faPaperPlane, faMessage, faUser, faBookmark } from '@fortawesome/free-regular-svg-icons';
import { faTiktok } from '@fortawesome/free-brands-svg-icons';

import { Wrapper as PopperWrapper } from '~/component/Popper';
import Tippyheadless from '@tippyjs/react/headless';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import Button from '~/component/Button';
import className from 'classnames/bind';
import styles from './Header.module.scss';
import AccountItem from '../../AccountItem';
import Menu from '~/component/Popper/Menu';
import Darklight from '~/component/Popper/Menu/Darklight';

const cx = className.bind(styles);

const currentUser = true;

const MENU_ITEM = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    title: 'Tiếng Việt',
                    code: 'vi',
                },
                {
                    title: 'English',
                    code: 'en',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: 'feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard and shortcuts',
    },
    {
        icon: <FontAwesomeIcon icon={faMoon} />,
        title: 'Dark light',
        light: <Darklight />,
    },
];

const MENU_USER = [
    {
        icon: <FontAwesomeIcon icon={faUser} />,
        title: 'View profile',
        to: 'profile',
    },
    {
        icon: <FontAwesomeIcon icon={faBookmark} />,
        title: 'Favorites',
        to: 'favorites',
    },
    {
        icon: <FontAwesomeIcon icon={faTiktok} />,
        title: 'Get coins',
        to: 'coin',
    },
    {
        icon: <FontAwesomeIcon icon={faGear} />,
        title: 'Settings',
        to: 'setting',
    },
    ...MENU_ITEM,
    {
        icon: <FontAwesomeIcon icon={faRightFromBracket} />,
        title: 'Log out',
        to: 'logout',
        saparate: true,
    },
];
function Header() {
    const [searchResult, setsearchResult] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setsearchResult([1, 2, 3]);
        }, 0);
    }, []);

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src="https://upload.wikimedia.org/wikipedia/en/a/a9/TikTok_logo.svg" alt="logo" />
                </div>
                <span>
                    <Tippyheadless
                        interactive
                        visible={searchResult.length > 0}
                        render={(attrs) => (
                            <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                                <PopperWrapper>
                                    <h4 className={cx('search-title')}>Account</h4>
                                    <AccountItem />
                                    <AccountItem />
                                    <AccountItem />
                                    <AccountItem />
                                </PopperWrapper>
                            </div>
                        )}
                    >
                        <div className={cx('search')}>
                            <input className={cx('input')} placeholder="Search account and video" spellCheck={false} />
                            <button className={cx('btn-delete')}>
                                <FontAwesomeIcon icon={faCircleXmark} />
                            </button>
                            <button className={cx('btn-loading')}>
                                <FontAwesomeIcon icon={faSpinner} />
                            </button>
                            <button className={cx('btn-search')}>
                                <FontAwesomeIcon icon={faMagnifyingGlass} />
                            </button>
                        </div>
                    </Tippyheadless>
                </span>

                <div className={cx('action')}>
                    <Button outline leftIcon={<FontAwesomeIcon className={cx('icon')} icon={faPlus} />}>
                        Upload
                    </Button>
                    {currentUser ? (
                        <>
                            <div className={cx('current-user')}>
                                <Tippy content="Messages" placement="bottom">
                                    <button className={cx('icon-user-mess')}>
                                        <FontAwesomeIcon icon={faPaperPlane} />
                                    </button>
                                </Tippy>
                                <Tippy content="Inbox" placement="bottom">
                                    <button className={cx('icon-user-mess')}>
                                        <FontAwesomeIcon icon={faMessage} />
                                    </button>
                                </Tippy>
                            </div>
                        </>
                    ) : (
                        <>
                            <Button primary>Log in</Button>
                        </>
                    )}
                    <Menu items={currentUser ? MENU_USER : MENU_ITEM}>
                        {currentUser ? (
                            <img
                                className={cx('avatar-user')}
                                src="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/978b025b124de41e9476b2a0bb76bd98~c5_100x100.jpeg?x-expires=1686142800&x-signature=pqEyAxZJTj5Yj4Rz5mKjn%2BIijbU%3D"
                                alt="user"
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
