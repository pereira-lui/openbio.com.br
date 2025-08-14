
import React from 'react';
import { motion } from 'framer-motion';
import { NavBar } from '@/components/NavBar';
import { Button } from '@/components/Button';
import { Footer } from '@/components/Footer';
import { CTASection } from '@/components/CTASection';
import { useImagePreloader } from '@/hooks/useImagePreloader';
import { AnimatedSection } from '@/components/motion/AnimatedSection';
import { AnimatedCard } from '@/components/motion/AnimatedCard';
import { AnimatedButton } from '@/components/motion/AnimatedButton';
import ProjectTimeline from '@/components/ProjectTimeline';

const ElectoralSolution = () => {
  // Preload critical hero image
  useImagePreloader([
    '/lovable-uploads/Bg_pag TSE_Mobile.png'
  ]);

  return (
    <div className="min-h-screen bg-black text-white font-objective">
      <NavBar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-5 bg-cover bg-center" style={{ backgroundImage: 'url(/lovable-uploads/Bg_pag_TSE_Mobile.png)' }}>
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <motion.h1
            className="text-4xl font-bold mb-6 leading-tight lg:text-6xl lg:mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Solução para Cadastramento Eleitoral | TSE
          </motion.h1>
          <motion.p
            className="text-lg mb-8 lg:text-xl max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            Para garantir a autenticidade cadastramento biométrico no Brasil. A OpenBio desenvolveu uma plataforma para aplicações com grande foco na captura do Tribunal Superior Eleitoral (TSE), desenvolvemos tecnologia essencial para a recadastramento de pessoas através do país.
          </motion.p>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="bg-white py-16 px-5 lg:py-24">
        <div className="w-10/12 mx-auto">
          <ProjectTimeline />
        </div>
      </section>

      {/* Products Section */}
      <section className="bg-gray-100 py-16 px-5 lg:py-24">
        <div className="lg:max-w-4xl 2xl:max-w-7xl mx-auto">
          <AnimatedSection animation="fadeIn">
            <h2 className="text-black font-bold text-2xl mb-12 lg:text-4xl text-start">
              Produção de Produtos
            </h2>
          </AnimatedSection>

          <AnimatedSection animation="slideUp" delay={0.2}>
            <div className='w-full flex justify-start items-start'>
              <p className="w-full sm:w-1/2 text-gray-600 text-start mb-12">
                As soluções de biometria para TSE garantem total interoperabilidade, segurança e confiabilidade permitindo o cadastramento biométrico dos eleitores.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            <AnimatedCard delay={0}>
              <div className="bg-white rounded-lg text-center">
                <div className="w-full h-full bg-white rounded mx-auto flex items-center justify-center">
                  <img
                    src="/lovable-uploads/CardCenario.png"
                    alt="Team working"
                  />
                </div>
                <h3 className="text-black font-medium text-xl pb-8 px-6 text-center">Módulo Cenário Assento Fixo</h3>
              </div>
            </AnimatedCard>

            <AnimatedCard delay={0.1}>
              <div className="bg-white rounded-lg text-center">
                <div className="w-full h-full bg-white rounded mx-auto flex items-center justify-center">
                  <img
                    src="/lovable-uploads/CardConjuntoFlash.png"
                    alt="Team working"
                  />
                </div>
                <h3 className="text-black font-medium text-xl pb-8 px-6 text-center">Conjunto Flash</h3>
              </div>
            </AnimatedCard>

            <AnimatedCard delay={0.2}>
              <div className="bg-white rounded-lg text-center">
                <div className="w-full h-full bg-white rounded mx-auto flex items-center justify-center">
                  <img
                    src="/lovable-uploads/Card Akyscam Plus.png"
                    alt="Team working"
                  />
                </div>
                <h3 className="text-black font-medium text-xl pb-8 px-6 text-center">Akyscam</h3>
              </div>
            </AnimatedCard>
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </div>
  );
};

export default ElectoralSolution;
