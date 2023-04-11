import '../assets/styles/Footer.css'

function Footer() {

    return (
        <>
            <div className='Footer'>

                <div className='div-section'>
                    <div className='Redes-sociales'>
                        <img className='Card-networks-1' src="/Icon/Facebook.svg" alt="face" />
                        <img className='Card-networks-2' src="/Icon/Instagram.svg" alt="instagram" />
                        <img className='Card-networks-3' src="/Icon/WhatsApp.svg" alt='what' />
                    </div>
                </div>

                <div className='div-section2'>
                    <div className='Logo'>
                        <img src="/img/Logo.png" alt="" />
                    </div>
                </div>
                
                <div className='div-section'>
                    <div class="copyright">
                    © Copyright 2023. Todos los derechos reservados. Desarollado por Magic Cinema
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;
