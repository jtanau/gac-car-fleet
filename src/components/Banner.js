import '../styles/Banner.css'
import logo_guillemotCorp from '../assets/logo_guillemotCorp.png'
import logo_hercules from '../assets/logo_hercules.png'
import logo_thrustmaster from '../assets/logo_thrustmaster.png'


function Banner() {
        return (
            <div className='lmj-banner'>
                <div className='red-carpet'></div>
                <img src={logo_thrustmaster} alt='' className='lmj-logo' />
                <img src={logo_hercules} alt='' className='lmj-logo' />
                <img src={logo_guillemotCorp} alt='' className='lmj-logo' /> 
            </div>
        )
}

export default Banner