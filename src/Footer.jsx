import React from 'react'
import studios from './assets/house.png'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='flex flex-col mx-auto xl:flex-row'>
        <div className='text-white bg-black px-4 py-12 flex flex-col justify-center gap-10 md:flex-row md:pt-[75px] md:gap-[26px] xl:px-12'>
            <div className='mx-auto flex flex-col gap-[18px] py-4 lg:m-0'>
                <img src={studios} alt="image home" className='w-[212px]' />
                {/**Google maps here */}
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3347.7641071531516!2d11.537529568126356!3d3.7699098800305917!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sfr!2scm!4v1686418277661!5m2!1sfr!2scm" 
                width="212" height="123" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title='Responsive Google Map'></iframe>
            </div>
            <div className='mx-auto max-w-[186px] flex flex-col gap-[21px] lg:m-0'>
                <h5 className='font-bold'>Institut Supérieur de l'Emergence</h5>
                <p className='text-[12px]'>Borne 12, Odza, (Entrée Sabel) Yaoundé, Cameroun</p>
                <p className='text-[12px]'>Téléphone <br /><br /> (+237) 6 73 88 76 59 <br /> (+237) 6 58 66 84 15</p>
                <p>
                Adresse mail <br /><a href="mailto:isup.emergence@gmail.com">isup.emergence@gmail.com</a>
                </p>
            </div>          
            
        </div>
        {/**Second side */}
        <div className='bg-[#101010] text-white px-4 py-12 flex flex-col justify-center gap-10 lg:flex-row lg:py-[75px] lg:gap-[26px] lg:pr-[52px] grow'>
            <div className='mx-auto'>
                <h4 className='font-bold text-2xl'>Découvrez l’ISE</h4>
                <ul className='flex flex-col gap-[38px] py-8'>
                    <li className='hover:text-secondary capitalize'><Link to="/parcours">Nos Parcours</Link></li>
                    <li className='hover:text-secondary capitalize'><Link to="/filieres">Nos Filières</Link></li>
                    <li className='hover:text-secondary capitalize'><Link to="/campus">Notre Campus</Link></li>
                    <li className='hover:text-secondary capitalize'><Link to="/blog">Actualités</Link></li>
                    <li className='hover:text-secondary capitalize'><Link to="/admission">admission</Link></li>
                    <li className='hover:text-secondary capitalize'><Link to="/carriere">Faire carrière à l’ISE</Link></li>
                </ul>
            </div>
            <div className='mx-auto'>
                <button className='px-3 py-[7px]'>Demande d'information</button>
                <div className='pt-[65px] flex flex-col justify-center'>
                    <p className='font-bold text-2xl text-center'>Suivez-<span className='text-primary'>nous</span></p>
                    <div className='mx-auto'>
                    {/* <img src={fbIcon} alt="facebook-icon" className='w-[90.75px] mt-[41px]'/> */}
                    <div className='hover:text-secondary mt-[41px]'>
                        <a href="https://www.facebook.com/InstitutSuperieurEmergence">
                            <svg width="91" height="91" viewBox="0 0 91 91" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M90.7477 64.3855C90.7477 80.9016 80.9016 90.7477 64.3855 90.7477H58.986C56.4905 90.7477 54.4486 88.7059 54.4486 86.2104V60.0296C54.4486 58.8045 55.4469 57.7609 56.672 57.7609L64.6578 57.6248C65.293 57.5794 65.8375 57.1257 65.9736 56.4905L67.5617 47.8241C67.6978 47.0073 67.0626 46.236 66.2005 46.236L56.5358 46.3721C55.2654 46.3721 54.2671 45.3739 54.2218 44.1488L54.0403 33.0322C54.0403 32.3062 54.6301 31.671 55.4015 31.671L66.2912 31.4895C67.0626 31.4895 67.6524 30.8996 67.6524 30.1283L67.4709 19.2385C67.4709 18.4671 66.8811 17.8773 66.1097 17.8773L53.8588 18.0588C46.3267 18.195 40.3374 24.3658 40.4735 31.8978L40.7004 44.3756C40.7457 45.6461 39.7475 46.6443 38.477 46.6897L33.0322 46.7805C32.2608 46.7805 31.671 47.3703 31.671 48.1417L31.8071 56.7627C31.8071 57.5341 32.3969 58.1239 33.1683 58.1239L38.6132 58.0332C39.8836 58.0332 40.8819 59.0314 40.9272 60.2565L41.3356 86.1196C41.381 88.6605 39.3391 90.7477 36.7982 90.7477H26.3622C9.84613 90.7477 0 80.9016 0 64.3401V26.3622C0 9.84613 9.84613 0 26.3622 0H64.3855C80.9016 0 90.7477 9.84613 90.7477 26.3622V64.3855Z" fill="currentColor" fill-opacity="0.52"/>
                            </svg>
                        </a>
                    </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer