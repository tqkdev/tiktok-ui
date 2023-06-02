import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import { faCircleXmark, faMagnifyingGlass, faPlus, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { Wrapper as PopperWrapper } from '~/component/Popper';
import Tippy from '@tippyjs/react/headless';

import className from 'classnames/bind';
import styles from './Header.module.scss';
import AccountItem from '../../AccountItem';

const cx = className.bind(styles);

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
                <Tippy
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
                </Tippy>
                <div className={cx('action')}>
                    <button className={cx('btn-upload')}>
                        <span>
                            <FontAwesomeIcon icon={faPlus} />
                        </span>
                        Upload
                    </button>
                    <button className={cx('btn-login')}>Log in</button>
                </div>
            </div>
        </header>
    );
}

export default Header;
