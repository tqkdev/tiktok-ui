import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import className from 'classnames/bind';
import styles from './Menu.module.scss';

const cx = className.bind(styles);

function Darklight() {
    return (
        <div className={cx('dark-light form-check form-switch')}>
            <input className={cx('form-check-input')} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
        </div>
    );
}

export default Darklight;
