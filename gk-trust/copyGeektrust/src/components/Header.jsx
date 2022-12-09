import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link } from 'react-router-dom';


const Header =() => {

    return (
        <div className="flex-header">
            <div><h3><Link to="/" >TeeRex Store</Link></h3></div>
            <div className='cart-icon'>
                <div style={{paddingRight:"15px"}} >Products <hr/></div>
                <button><Link to="/cart" text-decoration="none"  ><ShoppingCartOutlinedIcon /></Link></button>
            </div>
        </div>
    )
}

export default Header;