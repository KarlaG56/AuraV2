import '../assets/styles/Footer.css'
import { Link } from 'react-router-dom';

function Footer() {

    return (
        <>
            <div className='Footer'>

                <div className='div-section'>
                    <div className='Redes-sociales'>
                        <img className='Card-networks-1' src="/public/icon/Facebook.svg" alt="face" />
                        <img className='Card-networks-2' src="/public/icon/Instagram.svg" alt="instagram" />
                        <img className='Card-networks-3' src="/public/icon/WhatsApp.svg" alt='what' />
                    </div>
                </div>

                <div className='div-section2'>
                    <div className='Logo'>
                        <img src="/img/klassy-logo.png" alt="" />
                    </div>
                </div>
                
                <div className='div-section'>
                    <div class="copyright">
                    © Copyright 2022. All rights reserved. Developed by Café Aura☕
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;
