function Footer (props) {
    return (
        <footer>
        <h5>This is a footer </h5>
{props.children}
        </footer>
    );
}

export default Footer