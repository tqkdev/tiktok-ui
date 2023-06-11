import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState, useRef } from 'react';
import { Wrapper as PopperWrapper } from '~/component/Popper';
import Tippyheadless from '@tippyjs/react/headless';
import { useDebounce } from '~/hook';

import * as request from '~/utils/request';
import className from 'classnames/bind';
import styles from './Search.module.scss';
import AccountItem from '~/component/Layout/AccountItem';

const cx = className.bind(styles);

function Search() {
    const [searchValue, setsearchValue] = useState('');
    const [searchResult, setsearchResult] = useState([]);
    const [showResult, setshowResult] = useState(true);
    const [loadding, setloadding] = useState(false);

    const debounce = useDebounce(searchValue, 700);

    useEffect(() => {
        if (!debounce.trim()) {
            setsearchResult([]);
            return;
        }

        setloadding(true);

        const fetchApi = async () => {
            try {
                const res = await request.get('api/users/search', {
                    params: {
                        q: debounce,
                        type: 'less',
                    },
                });
                setsearchResult(res.data);
                setloadding(false);
            } catch (error) {
                setloadding(false);
            }
        };
        fetchApi();
    }, [debounce]);

    const refInput = useRef();

    const handleClear = () => {
        setsearchValue('');
        setsearchResult([]);
        refInput.current.focus();
    };

    const handlehiddenResult = () => {
        setshowResult(false);
    };

    return (
        <span>
            <Tippyheadless
                interactive
                visible={showResult && searchResult.length > 0}
                render={(attrs) => (
                    <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                        <PopperWrapper>
                            <h4 className={cx('search-title')}>Account</h4>
                            {searchResult.map((result) => (
                                <AccountItem key={result.id} data={result} />
                            ))}
                        </PopperWrapper>
                    </div>
                )}
                onClickOutside={handlehiddenResult}
            >
                <div className={cx('search')}>
                    <input
                        ref={refInput}
                        value={searchValue}
                        className={cx('input')}
                        placeholder="Search account and video"
                        spellCheck={false}
                        onChange={(e) => setsearchValue(e.target.value)}
                        onFocus={() => setshowResult(true)}
                    />
                    {!!searchValue && !loadding && (
                        <button onClick={handleClear} className={cx('btn-delete')}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                    )}
                    {loadding && (
                        <button className={cx('btn-loading')}>
                            <FontAwesomeIcon icon={faSpinner} />
                        </button>
                    )}
                    <button className={cx('btn-search')}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>
            </Tippyheadless>
        </span>
    );
}

export default Search;
