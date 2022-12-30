import React, { useEffect } from "react";
import MainButton from "../components/button";
// Icons
import {FiMenu, FiX, FiInstagram, FiFacebook, FiYoutube} from 'react-icons/fi'
import LogoLight from '../assets/Images/Logo/LogoLight.png'
import LogoDark from '../assets/Images/Logo/LogoDark.png'
import ArrowDown from '../assets/Icons/ArrowDown.svg'
import HeroWoman1 from '../assets/Images/Hero/Woman1.png'
import HeroWoman2 from '../assets/Images/Hero/Woman2.png'
import FeedbackCard from "../components/feedbackCard";
import LogoGW from '../assets/Images/GroupW/Logo.png'
import ServiceCars from "../components/serviceCards";
import Logo from '../assets/Images/Logo/LogoMM.svg';
import Avatar from '../assets/Images/Contact/Avatar.png'
import WhatsappIcon from '../assets/Icons/Whatsapp.svg'
import LogoFooter from '../assets/Images/Logo/Footer.svg'
import MailInput from "../components/input";

export default function LandimPage() {
	const [openMenu, setOpenMenu] = React.useState(false);
	const [logoWhite, setLogoWhite] = React.useState(false);
	const [menuActive, setMenuActive] = React.useState(false);
	const [changeScreen, setChangeScreen] = React.useState(false);
	const [screenDimentions, setScreenDimentions] = React.useState(0);
	useEffect(() => {
		document.getElementById('menu');
		window.addEventListener('scroll', ChangeMenu);
	}, []);

	useEffect(() => {
		window.addEventListener('resize', function(){setChangeScreen((current) => !current)});
		setScreenDimentions(window.screen.width)
		console.log(screenDimentions);
	}, [changeScreen])

	useEffect(() => {
		document.getElementById('openedMenu');
		MenuActive();
	}, [openMenu]);

	function MenuActive(){
		if (openMenu === true){
			document.getElementById('openedMenu')?.classList.add("MenuActive");
			setMenuActive(true);
		}else{
			document.getElementById('openedMenu')?.classList.remove("MenuActive");
			setMenuActive(false);
		} 
	}
	function ChangeMenu(){
		if (window.scrollY > 0){
			setLogoWhite(true);
			document.getElementById('menu')?.classList.add("ScrollActive");
			document.getElementById('menu')?.classList.remove("ScrollActiveWine");
		}
		if(window.scrollY === 0){
			setLogoWhite(false);
			document.getElementById('menu')?.classList.remove("ScrollActive");
			document.getElementById('menu')?.classList.remove("ScrollActiveWine");
		} 
		if(window.scrollY >= 1900 && window.scrollY <= 3500 ){
			setLogoWhite(true);
			document.getElementById('menu')?.classList.remove("ScrollActive");
			document.getElementById('menu')?.classList.add("ScrollActiveWine");
		}
	}
	function HandleOpenMenu(){
		setOpenMenu((current) => !current)
	}
  return (
    <div className="flex flex-col w-screen">
		<header id="menu" className="flex z-10 transition fixed w-full justify-center h-20">
			<div className="flex flex-row justify-between items-center w-4/5 max-w-screen-xl">
				<div className="flex">
					{logoWhite || menuActive
						?
							<img src={LogoLight} alt="Logomarca" />
						:
							<img src={LogoDark} alt="Logomarca" />
					}
				</div>

				<a className="flex" href="#openedMenu" onClick={HandleOpenMenu}>
					{!openMenu
						?
						<FiMenu size={28} color={logoWhite || menuActive ? "#f4f4f4" : '#8C9176'}/>
						:
						<FiX size={28} color={logoWhite || menuActive ? "#f4f4f4" : '#8C9176'}/>
					}
				</a>
			</div>
		</header>

		<nav id="openedMenu" className="hidden justify-around items-center flex-col w-screen h-screen py-4 px-6">
			<ul className="flex flex-col text-center h-2/5 justify-around mt-24">
				<li>
					<a className="text-Light-default" href="#home" onClick={() => setOpenMenu(false)}>Início</a></li>
				<li>
					<a className="text-Light-default" href="#services" onClick={() => setOpenMenu(false)}>Mentoria</a></li>
				<li>
					<a className="text-Light-default" href="#Wgroup" onClick={() => setOpenMenu(false)}>Grupo W</a></li>
				<li>
					<a className="text-Light-default" href="#about" onClick={() => setOpenMenu(false)}>Sobre</a></li>
				<li>
					<a className="text-Light-default" href="#contacts" onClick={() => setOpenMenu(false)}>Contatos</a></li>
			</ul>

			<button className="text-Green-light bg-Light-default rounded px-4 py-4 text-sm w-3/5">
				Entrar em Contato
			</button>

			<div className="flex flex-row justify-around w-3/5 items-center">
				<button><FiInstagram size={28} color="#f4f4f4" /></button>
				<button><img src={WhatsappIcon} className="w-8 h-8" /></button>
				<button><FiFacebook size={28} color="#f4f4f4" /></button>
			</div>
		</nav>
		
		<section id="home" className="flex md:bg-left flex-col h-full w-screen bg-hero-mm bg-auto bg-right bg-no-repeat">
			<header className="flex flex-col ml-6 mt-28">
				<div className="flex flex-col gap-3">
					<p className="text-Green-light font-secondary text-lg font-semibold">Mila Moura</p>
					<h1 className="text-Green-dark text-3xl font-medium">Você é uma marca <br></br> Quanto ela vale?</h1>
					<h2 className="text-Green-light text-sm font-normal">Treinamentos, palestras e mentorias</h2>
				</div>
				
				<div className="flex mt-12">
					<MainButton field="Entrar em Contato" />
				</div>
			</header>

			<div className="flex flex-row mt-24 w-full justify-center items-stretch">
				<div className="flex flex-col justify-between">
					<div className="flex flex-row ml-6 mb-4 items-center">
						<img src={ArrowDown} alt="Seta para baixo" />
						<p className="text-xs ml-1 text-Green-light">Saiba Mais</p>
					</div>
					<div className="flex items-stretch w-full">
						<img src={HeroWoman1} alt="Mulher elegante segurando um xicara" />
					</div>
				</div>

				<div className="flex flex-col justify-center">
					<div>
						<img src={HeroWoman2} alt="" />
					</div>

					<div className="flex flex-col bg-gradient-to-r from-Green-light to-Gray-light">
						<p className="text-Light-default font-secondary font-medium tracking-widest px-4 py-4">
							MILA <br></br> MOURA
						</p>

						<div className="flex flex-row w-full justify-end px-4">
							<img src={LogoLight} alt="Logomarca" />
						</div>
					</div>
				</div>
			</div>
		</section>

		<section id="services" className="flex flex-col h-full w-screen md:bg-services-bg-desktop bg-services-bg-mobile md:bg-center bg-left bg-no-repeat">
			<div className="flex flex-col my-20">
				<h2 className="text-Green-dark font-secondary text-center text-3xl font-semibold py-20">
					Mentoria
				</h2>

				<div className="flex flex-col mr-20 px-10">
					<div className="flex">
						<ul className=" flex flex-col gap-3 ">
							<li className="serviceList flex"><p className="flex text-Green-dark">Treinamento online ao vivo ou presencial</p></li>
							<li className="serviceList flex"><p className="flex text-Green-dark">Acompanhamento do começo ao fim</p></li>
							<li className="serviceList flex"><p className="flex text-Green-dark">Suporte completo e tira dúvidas individual</p></li>
						</ul>
					</div>	

					<div className="flex mt-12">
						<MainButton field="Quero Participar" />
					</div>
				</div>

				<div className="flex justify-center my-24">
					<FeedbackCard />
				</div>
			</div>
		</section>

		<section id="Wgroup" className="flex flex-col h-full bg-groupW-mobile bg-right bg-no-repeat">
			<div className="flex flex-col items-center justify-center text-center my-20 mt-40">
				<img className="flex" src={LogoGW} alt="Logomarca Grupo W" />

				<p className="px-6 py-8 text-Black-default">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
			</div>

			<div className="flex justify-center bg-cover">
				<ServiceCars />
			</div>

			<div className="flex justify-center w-screen my-20">
				<button className="BgWine w-2/4 text-Light-default rounded px-4 py-4 text-sm">
					Saiba Mais
				</button>
			</div>
		</section>

		<section id="about" className="flex flex-col h-full w-screen bg-contact-mobile bg-right bg-no-repeat py-20">
			<h2 className="text-Green-light font-secondary text-center text-3xl font-semibold py-20">
				Sobre Mim
			</h2>

			<div className="flex px-6">
				<iframe 
				width={screenDimentions} 
				height={screenDimentions/2}
				src="https://www.youtube.com/embed/kZG-q1X7fbE" 
				title="YouTube video player" 
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
				allowFullScreen>
				</iframe>
			</div>

			<div className="flex flex-col justify-center text-center items-center py-32">
				<img className="w-2/5 h-full" src={Logo} alt="Logo Mila Moura" />

				<p className="text-Green-dark font-medium px-10">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
			</div>
		</section>

		<section id="contacts" className="flex flex-col justify-center items-center text-center h-full s-screen py-20">
			<h2 className="text-Green-light font-secondary text-center text-3xl font-semibold py-20">
				Contatos
			</h2>

			<div className="flex flex-col my-12 h-72 cardComment items-center justify-around text-center bg-Light-default rounded-lg px-2">
				<img className='flex w-24 h-24 NegativeMarginTop rounded-full' src={Avatar} alt="Ícone com imagem do usuário que comentou" />
				
				<h2 className='text-Green-dark font-medium'>Mila Moura</h2>

				<p className="text-Green-light px-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
			</div>

			<div className="flex flex-col justify-evenly h-96">
				<button className="flex py-6 px-6 rounded-full bg-Green-light">
					<FiInstagram color="#f2f2f2" size={32}/>
				</button>
				<button className="flex py-6 px-6 rounded-full bg-Green-light">
					<img className="w-8 h-8" src={WhatsappIcon} alt="Icone do Whatsapp" />
				</button>
				<button className="flex py-6 px-6 rounded-full bg-Green-light">
					<FiFacebook color="#f2f2f2" size={32}/>
				</button>
			</div>
		</section>

		<footer className="flex flex-col bgFooter h-full w-screen">
			<div className="flex justify-center items-center mt-10">
				<img className="w-2/4 h-2/4" src={LogoFooter} alt="Logomarca Mila Moura" />
			</div>

			<div className="flex flex-col gap-2 justify-center items-center mb-20">
				<h3 className="text-Light-default">Entraremos em Contato</h3>
				<MailInput />
			</div>

			<div className="flex flex-col gap-5 px-10">
				<ul className="flex flex-col gap-2 text-left h-2/5 justify-around">
					<li className="footerList">
						<a className="text-Light-default" href="#home" onClick={() => setOpenMenu(false)}>Início</a></li>
					<li className="footerList">
						<a className="text-Light-default" href="#services" onClick={() => setOpenMenu(false)}>Mentoria</a></li>
					<li className="footerList">
						<a className="text-Light-default" href="#Wgroup" onClick={() => setOpenMenu(false)}>Grupo W</a></li>
					<li className="footerList">
						<a className="text-Light-default" href="#about" onClick={() => setOpenMenu(false)}>Sobre</a></li>
					<li className="footerList">
						<a className="text-Light-default" href="#contacts" onClick={() => setOpenMenu(false)}>Contatos</a></li>
				</ul>

				<p className="text-Light-default">©2021 Mila Moura.</p>
				<p className="text-Light-default">Todos os direitos reservados.</p>

				<div className="flex flex-row items-center">
				<button className="flex py-6 px-6 rounded-full">
					<FiInstagram color="#f2f2f2" size={22}/>
				</button>
				<button className="flex py-6 px-6 rounded-full">
					<img className="w-h-6 h-6" src={WhatsappIcon} alt="Icone do Whatsapp" />
				</button>
				<button className="flex py-6 px-6 rounded-full">
					<FiFacebook color="#f2f2f2" size={22}/>
				</button>
				</div>
			</div>
		</footer>
	</div>
  )
}