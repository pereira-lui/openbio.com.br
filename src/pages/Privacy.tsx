
import React from 'react';
import { NavBar } from '@/components/NavBar';
import { Button } from '@/components/Button';
import { Logo } from '@/components/Logo';
import { Footer } from '@/components/Footer';

const Privacy = () => {
  return (
    <div className="min-h-screen bg-black text-black font-objective">
      <NavBar />

      {/* Header Section */}
      <section className="pt-32 pb-16 px-5 text-white mt-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4 lg:text-6xl">
            Compromisso com a Privacidade
          </h1>
          <p className="text-lg mb-8">
            Levamos a sério a segurança dos seus dados.
          </p>

          <div className="max-w-2xl mx-auto">
            <p className="text-base leading-relaxed">
              Na OpenBio, aplicamos tecnologias avançadas para proteger sua privacidade com total transparência e em conformidade com as normas vigentes.
            </p>
            <p className="text-base leading-relaxed mb-8">
              Saiba como tratamos suas informações de forma responsável e segura.
            </p>

            <Button className="mb-8">Saiba mais</Button>
          </div>
        </div>
      </section>

      {/* Privacy Content */}
      <section className="pb-16 px-5">
        <div className="max-w-4xl mx-auto">
          <div className="bg-black rounded-lg p-8 relative overflow-hidden h-[600px] items-end justify-start flex" style={{
            backgroundImage: 'url(/lovable-uploads/privacy.png)',
            backgroundPosition: 'center right',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover'
          }}>
            {/* Background image placeholder */}
            <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent"></div>

            <div className="relative z-10">
              <h2 className="text-white font-bold text-2xl mb-6">
                Tem dúvidas sobre privacidade?
              </h2>
              <p className="text-gray-300 mb-6 max-w-md">
                Protegemos seus dados com transparência e responsabilidade. Para qualquer solicitação ou esclarecimento, entre em contato.
              </p>

              <Button className="mb-4">
                privacidade@grupoakiyama.com.br
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Policies */}
      <section className="pb-16 px-5">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg p-8 shadow-lg">
            <h2 className="text-black font-bold text-2xl mb-8">Política de Privacidade</h2>

            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-lg mb-3">1. Coleta de Dados</h3>
                <p className="text-gray-700 leading-relaxed">
                  Coletamos apenas os dados necessários para fornecer nossos serviços biométricos, sempre com seu consentimento explícito e em conformidade com a LGPD.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-lg mb-3">2. Uso das Informações</h3>
                <p className="text-gray-700 leading-relaxed">
                  Suas informações são utilizadas exclusivamente para identificação e autenticação, nunca sendo compartilhadas com terceiros sem sua autorização.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-lg mb-3">3. Segurança dos Dados</h3>
                <p className="text-gray-700 leading-relaxed">
                  Implementamos as mais avançadas tecnologias de criptografia e segurança para proteger seus dados biométricos contra acessos não autorizados.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-lg mb-3">4. Seus Direitos</h3>
                <p className="text-gray-700 leading-relaxed">
                  Você tem o direito de acessar, corrigir, excluir ou solicitar a portabilidade de seus dados a qualquer momento, conforme estabelecido pela LGPD.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-lg mb-3">5. Contato</h3>
                <p className="text-gray-700 leading-relaxed">
                  Para exercer seus direitos ou esclarecer dúvidas sobre nossa política de privacidade, entre em contato através do email: privacidade@grupoadvance.com.br
                </p>
              </div>
            </div>
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
          <h2 className="text-white font-medium text-2xl mb-6 lg:text-4xl lg:mb-12" style={{ textShadow: '0px 2px 10px rgb(0,0,0,1)' }}>
            Transformamos tecnologia em segurança
          </h2>
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

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Privacy;
