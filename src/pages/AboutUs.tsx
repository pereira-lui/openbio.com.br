import React from 'react';
import { motion } from 'framer-motion';
import { NewsCard } from '@/components/NewsCard';
import { NavBar } from '@/components/NavBar';
import { Button } from '@/components/Button';
import { Logo } from '@/components/Logo';
import { Footer } from '@/components/Footer';
import { AnimatedSection } from '@/components/motion/AnimatedSection';
import { AnimatedCard } from '@/components/motion/AnimatedCard';
import Timeline from '@/components/Timeline';

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-black text-white font-objective">
      <NavBar />

      {/* Hero Section with Company Info */}
      <section className="relative min-h-screen flex flex-col justify-center px-5 py-32">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/lovable-uploads/f4a6e2eb-43de-46a4-8a57-9aa107b7ac6d.png')`
          }}
        />

        <div className="relative z-10 mx-auto">
          {/* Hero Title */}
          <div className="text-center mb-16 lg:mb-24 my-20">
            <motion.h1
              className="text-4xl font-bold mb-6 leading-tight lg:text-6xl lg:mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              Quem somos
            </motion.h1>
            <motion.p
              className="text-lg mb-8 lg:text-xl max-w-xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            >
              Com a formação do Grupo Akiyama, a <span className="font-bold">OpenBio se consolida como líder em soluções de identificação biométrica</span>, oferecendo tecnologias avançadas e inovadoras.
            </motion.p>
          </div>

          {/* Company Info Grid */}
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 text-left mx-auto w-10/12">
            <AnimatedSection animation="slideUp" delay={0.1}>
              <p className="text-gray-300 xl:text-lg 2xl:text-2xl leading-relaxed border-t pt-5 border-gray-600">
                <strong className="text-white">
                  Especializados no desenvolvimento de hardware e software
                </strong>{' '}
                proprietários, proporcionamos desde leitores biométricos até sistemas completos de identificação digital, aplicados em setores como eleições, segurança pública, bancos e acessos corporativos.
              </p>
            </AnimatedSection>

            <AnimatedSection animation="slideUp" delay={0.2}>
              <p className="text-gray-300 xl:text-lg 2xl:text-2xl leading-relaxed border-t pt-5 border-gray-600">
                <strong className="text-white">
                  Nossa missão é garantir processos mais seguros, eficientes e confiáveis
                </strong>{' '}
                sempre alinhados às normas internacionais e às necessidades do mercado.
              </p>
            </AnimatedSection>

            <AnimatedSection animation="slideUp" delay={0.3}>
              <p className="text-gray-300 xl:text-lg 2xl:text-2xl leading-relaxed border-t pt-5 border-gray-600">
                <strong className="text-white">
                  Com sede em Curitiba e unidade fabril em Pato Branco
                </strong>{' '}
                estamos presentes em diversos estados brasileiros e prestamos suporte técnico em milhares de municípios.
              </p>
            </AnimatedSection>

            <AnimatedSection animation="slideUp" delay={0.4}>
              <p className="text-gray-300 xl:text-lg 2xl:text-2xl leading-relaxed border-t pt-5 border-gray-600">
                <strong className="text-white">
                  Na OpenBio, transformamos a complexidade da biometria em soluções acessíveis, descomplicadas e precisas
                </strong>{' '}
                conectando pessoas e protegendo identidades com a segurança e inovação que nossos clientes merecem.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <Timeline />


      {/* CEO Section */}
      <section className="bg-white py-16 px-5 lg:py-24">
        <div className="w-10/12 mx-auto">
          <AnimatedSection animation="fadeIn">
            <h2 className="text-black font-bold text-2xl mb-12 lg:text-4xl text-start">
              Conheça nosso CEO
            </h2>
          </AnimatedSection>

          <div className="gap-12 items-center flex flex-col sm:flex-row">
            <AnimatedSection animation="slideRight" className='w-full'>
              <div className="w-fit text-center">
                <img
                  src="/lovable-uploads/c94f03e6-5f77-4d2e-a259-8a140e589c9f.png"
                  alt="Ismael Akiyama - CEO"
                  className="h-100 rounded-lg mx-auto mb-4 object-cover"
                />
                <h3 className="font-medium text-2xl text-black text-start">Ismael Akiyama</h3>
                <p className="text-[#7918f9] text-lg text-start">CEO do Grupo Akiyama</p>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slideLeft" delay={0.2} className="text-gray-600 xl:text-sm 2xl:text-xl items-start justify-start flex flex-col border-t pt-5 border-gray-400">
              <p className="mb-10">
                Ismael Akiyama é o fundador e CEO do Grupo Akiyama, um
                ecossistema de empresas especializadas em identificação
                biométrica e segurança digital, composto pela OpenBio,
                Neoyama, Infant ID e Akiyama ID
              </p>
              <p className="mb-10">
                Com visão estratégica e foco em inovação, ele impulsiona
                o desenvolvimento de tecnologias avançadas para
                reconhecimento, autenticação e gestão de identidades.
              </p>
              <p>
                Sob sua liderança, o grupo se consolidou como referência
                no setor, fornecendo soluções para governos, instituições
                financeiras e diversas outras áreas que demandam
                segurança e precisão na identificação de pessoas
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Operations Section */}
      <section className="bg-black py-16 px-5 lg:py-24">
        <div className="w-10/12 mx-auto text-center">
          <AnimatedSection animation="fadeIn">
            <h2 className="text-white font-bold text-2xl mb-6 lg:text-4xl">
              Operação do Norte e Sul
            </h2>
          </AnimatedSection>

          <AnimatedCard delay={0.2}>
            <div className="bg-gray-800 rounded-lg my-16">
              <video
                className="w-full rounded-lg object-cover"
                autoPlay
                muted
                loop
                playsInline
              >
                <source src="/lovable-uploads/realistic-earth-orbit-and-zoom-glowing-borders-bra-2023-12-26-10-15-04-utc.mp4" type="video/mp4" />
                Seu navegador não suporta vídeos HTML5.
              </video>
            </div>
          </AnimatedCard>

          <AnimatedSection animation="slideUp" delay={0.4}>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Nossa presença se estende por todo o território nacional, garantindo suporte e soluções biométricas de alta qualidade em todas as regiões do Brasil, do Norte ao Sul.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* News Section */}
      <section className="bg-gray-100 py-10 px-5 lg:py-20">
        <div className="w-10/12 mx-auto">
          <AnimatedSection animation="slideUp" className="flex justify-between items-center mb-6 lg:mb-12">
            <h2 className="text-[#7918f9] font-medium text-lg lg:text-3xl">
              Últimas Notícias
            </h2>
            <div className="flex items-center">
              <motion.button
                className="w-6 h-6 bg-gray-300 flex items-center justify-center border border-gray-300 rounded-full mr-2 lg:w-8 lg:h-8 hover:bg-[#7918f9]"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none"><path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" /><path fill="currentColor" d="M3.283 10.94a1.5 1.5 0 0 0 0 2.12l5.656 5.658a1.5 1.5 0 1 0 2.122-2.122L7.965 13.5H19.5a1.5 1.5 0 0 0 0-3H7.965l3.096-3.096a1.5 1.5 0 1 0-2.122-2.121z" /></g></svg>
              </motion.button>
              <motion.button
                className="w-6 h-6 bg-gray-300 flex items-center justify-center border border-gray-300 rounded-full lg:w-8 lg:h-8 hover:bg-[#7918f9]"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none"><path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" /><path fill="currentColor" d="m15.06 5.283l5.657 5.657a1.5 1.5 0 0 1 0 2.12l-5.656 5.658a1.5 1.5 0 0 1-2.122-2.122l3.096-3.096H4.5a1.5 1.5 0 0 1 0-3h11.535L12.94 7.404a1.5 1.5 0 0 1 2.122-2.121Z" /></g></svg>
              </motion.button>
            </div>
          </AnimatedSection>

          <div className="flex flex-nowrap overflow-x-auto gap-4 pb-4 lg:grid lg:grid-cols-3 lg:overflow-visible lg:pb-0">
            <AnimatedCard delay={0}>
              <NewsCard
                title="TSE adquire Kits para implementar biometria em todo o país"
                description="Por meio de contratos assinados com a empresa Advance Inovação, a Coordenação Nacional de Sistemas e Informática da Justiça Federal, já tem à disposição mais 2.500 Kits Biométricos."
                imageSrc="/lovable-uploads/8c5ab50d-befe-4b9f-9e46-33f18a19ccb5.png"
              />
            </AnimatedCard>

            <AnimatedCard delay={0.1}>
              <NewsCard
                title="Biometria, digital ID responde aos desafios de Manufacturing Analytics em 2024"
                description="The Veris Match biometric capture systems from Advance Analytics, helping manufacturers track worker whereabouts and activities in ways that don't intrude on personal privacy, deliver efficiencies."
                imageSrc="/lovable-uploads/2bdbac5f-cf32-42a1-b0af-c07ded74b3cd.png"
              />
            </AnimatedCard>

            <AnimatedCard delay={0.2}>
              <NewsCard
                title="Integrado Biometria | Facial Recognition | Best for Banks"
                description="The Federal Police of Brazil development 1,000 fingerprint authentication kits from tech suppliers, as part of the Border Control Security Initiative for the department to process fingerprints in every."
                imageSrc="/lovable-uploads/4709cc25-ff72-45fb-816b-b23f5459ef4f.png"
              />
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section
        className="relative py-32 px-5 lg:py-40 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/lovable-uploads/98097686-c442-4f38-9425-abe923adb251.png)'
        }}
      >
        <div className="relative z-10 max-w-lg mx-auto text-center lg:max-w-4xl">
          <motion.h2
            className="text-white font-medium text-2xl mb-6 lg:text-4xl lg:mb-12"
            style={{ textShadow: '0px 2px 10px rgb(0,0,0,1)' }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Transformamos tecnologia em segurança
          </motion.h2>
          <div
            className="text-white text-lg lg:text-2xl mb-6"
            style={{ textShadow: '0px 1px 8px rgba(0,0,0,0.8)' }}
          >
            Entre em contato com nossa equipe pelo telefone:<br />
            <a href="tel:+554130280222" className="text-[#7918f9] font-bold text-3xl mt-2 inline-block">
              (41) 3028-0222
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;
