import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import className from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = className.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/122b95d1cd9bd6f885598a039dc6b74d~c5_100x100.jpeg?x-expires=1685865600&x-signature=Z4WirAB%2FJg4vTevvraLQSTnhoro%3D"
                alt="avatar"
            />
            <div className={cx('info')}>
                <p className={cx('name')}>
                    <span>Phương Hoa</span>
                    <FontAwesomeIcon className={cx('icontick')} icon={faCheckCircle} />
                </p>
                <span className={cx('username')}>hoaaaaa</span>
            </div>
        </div>
    );
}

export default AccountItem;
