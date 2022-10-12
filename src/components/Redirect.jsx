import { Link } from 'react-router-dom';

export const Redirect = (props) => {
    return (

        props && props.href.includes("http") ? <a target={'_blank'} className={props.class || props.className} href={props.href} rel="noreferrer">{props.children.toString()}</a> : <Link className={props.class || props.className} to={props.href}>{props.children.toString()}</Link>
    )
}
