const Layout = props => {
    return (
        <div className='layout'>
            <div className='layoutContainer'>
            {props.children}
            </div>
        </div>
    );
};

export default Layout;