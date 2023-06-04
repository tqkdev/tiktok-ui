import { Wrapper as PopperWrapper } from '~/component/Popper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react/headless';
import MenuItem from './MenuItem';
import { faMoon } from '@fortawesome/free-solid-svg-icons';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

import className from 'classnames/bind';
import styles from './Menu.module.scss';

const cx = className.bind(styles);

function Menu({ children, items = [] }) {
    const renderItems = () => {
        return items.map((item, index) => <MenuItem key={index} data={item} />);
    };

    return (
        <Tippy
            interactive
            placement="bottom-end"
            visible
            render={(attrs) => (
                <div className={cx('content')} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        {renderItems()}

                        <div className={cx('dark-light')}>
                            <button>
                                <div>
                                    <FontAwesomeIcon icon={faMoon} />
                                </div>
                                Dark mode
                            </button>
                            <div class="form-check form-switch">
                                <input
                                    class="form-check-input"
                                    type="checkbox"
                                    role="switch"
                                    id="flexSwitchCheckDefault"
                                />
                            </div>
                        </div>
                    </PopperWrapper>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
