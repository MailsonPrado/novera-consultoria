import React, { useState } from 'react';
import { Mail, Phone, MapPin, Instagram, MessageCircle, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Criar mensagem para WhatsApp
    const whatsappMessage = `Olá! Gostaria de solicitar uma consultoria.

*Nome:* ${formData.name}
*Email:* ${formData.email}
*Empresa:* ${formData.company}
*Telefone:* ${formData.phone}

*Mensagem:*
${formData.message}`;

    const whatsappUrl = `https://wa.me/5511999999999?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="contato" className="py-20 novera-bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header da Seção */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold novera-text-black mb-6">
              Entre em <span className="novera-text-gold">Contato</span>
            </h2>
            <p className="text-xl novera-text-gray max-w-3xl mx-auto">
              Pronto para transformar sua empresa? Entre em contato conosco e vamos 
              conversar sobre como podemos ajudar você a alcançar seus objetivos.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Formulário */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold novera-text-black mb-6">
                Solicite uma Consultoria
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium novera-text-black mb-2">
                      Nome *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent outline-none smooth-transition"
                      placeholder="Seu nome completo"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium novera-text-black mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent outline-none smooth-transition"
                      placeholder="seu@email.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium novera-text-black mb-2">
                      Empresa
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent outline-none smooth-transition"
                      placeholder="Nome da sua empresa"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium novera-text-black mb-2">
                      Telefone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent outline-none smooth-transition"
                      placeholder="(11) 99999-9999"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium novera-text-black mb-2">
                    Mensagem *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent outline-none smooth-transition resize-none"
                    placeholder="Conte-nos sobre seus desafios e objetivos..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full novera-button px-6 py-4 rounded-lg font-semibold text-lg flex items-center justify-center gap-2 hover:scale-105 transform transition-all duration-300"
                >
                  Enviar Mensagem
                  <Send size={20} />
                </button>
              </form>
            </div>

            {/* Informações de Contato */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold novera-text-black mb-6">
                  Outras Formas de Contato
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="novera-bg-gold p-3 rounded-lg">
                      <Mail className="novera-text-black" size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold novera-text-black mb-1">Email</h4>
                      <p className="novera-text-gray">contato@noveraconsultoria.com.br</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="novera-bg-gold p-3 rounded-lg">
                      <Phone className="novera-text-black" size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold novera-text-black mb-1">Telefone</h4>
                      <p className="novera-text-gray">(11) 99999-9999</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="novera-bg-gold p-3 rounded-lg">
                      <MapPin className="novera-text-black" size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold novera-text-black mb-1">Localização</h4>
                      <p className="novera-text-gray">São Paulo, SP - Brasil</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Redes Sociais */}
              <div>
                <h4 className="text-xl font-bold novera-text-black mb-4">
                  Siga-nos nas Redes Sociais
                </h4>
                
                <div className="flex gap-4">
                  <a
                    href="https://instagram.com/noveraconsultoria"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-gray-100 hover:novera-bg-gold hover:novera-text-black px-4 py-3 rounded-lg smooth-transition"
                  >
                    <Instagram size={20} />
                    <span className="font-medium">Instagram</span>
                  </a>
                  
                  <a
                    href="https://wa.me/5511999999999"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-gray-100 hover:novera-bg-gold hover:novera-text-black px-4 py-3 rounded-lg smooth-transition"
                  >
                    <MessageCircle size={20} />
                    <span className="font-medium">WhatsApp</span>
                  </a>
                </div>
              </div>

              {/* Horário de Atendimento */}
              <div className="bg-gray-50 rounded-xl p-6">
                <h4 className="text-xl font-bold novera-text-black mb-4">
                  Horário de Atendimento
                </h4>
                
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="novera-text-gray">Segunda a Sexta</span>
                    <span className="novera-text-black font-medium">9h às 18h</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="novera-text-gray">Sábado</span>
                    <span className="novera-text-black font-medium">9h às 12h</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="novera-text-gray">Domingo</span>
                    <span className="novera-text-black font-medium">Fechado</span>
                  </div>
                </div>
              </div>

              {/* Call to Action */}
              <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-xl p-6 text-center">
                <h4 className="text-xl font-bold novera-text-white mb-2">
                  Resposta Rápida
                </h4>
                <p className="novera-text-gray mb-4">
                  Respondemos todas as mensagens em até 2 horas úteis
                </p>
                <div className="flex items-center justify-center gap-2 novera-text-gold">
                  <MessageCircle size={20} />
                  <span className="font-medium">Atendimento Personalizado</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

