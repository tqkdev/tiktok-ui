import className from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Buttom.module.scss';

const cx = className.bind(styles);

function Button({ to, href, primary = false, outline = false, onClick, children, ...passProps }) {
    let Comp = 'button';
    const props = {
        onClick,
        ...passProps,
    };
    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }
    const classes = cx('wrapper', {
        primary,
        outline,
    });

    return (
        <Comp className={classes} {...props}>
            <span>{children}</span>
        </Comp>
    );
}

export default Button;
