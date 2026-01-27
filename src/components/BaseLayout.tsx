


import { 
  Html, Head, Preview, Body, Container, Section, 
  Img, Text, Hr, Tailwind, Link 
} from '@react-email/components';
import * as React from 'react';

interface BaseLayoutProps {
  children: React.ReactNode;
  previewText: string;
}

export const BaseLayout = ({ children, previewText }: BaseLayoutProps) => {
  return (
    <Html>
      {/* 1. Mueve el componente Tailwind aquí arriba para que envuelva al Head */}
      <Tailwind>
        <Head /> {/* 2. Ahora Head está DENTRO de Tailwind */}
        <Preview>{previewText}</Preview>
        
        <Body className="bg-[#f8fafc] py-10 font-sans">
          <Container className="bg-white border border-[#e2e8f0] mx-auto max-w-[600px] rounded-xl shadow-sm overflow-hidden">
            
            {/* Header Universal */}
            <Section className="bg-[#394253] p-8 text-center">
              <Img 
                src="https://assets.jke-solutions.com/logo-white.png" 
                width="200" 
                alt="JKE Solutions" 
                className="mx-auto"
              />
            </Section>

            {/* Contenido Dinámico */}
            <Section className="p-8">
              {children}
            </Section>

            <Hr className="border-[#f1f5f9] my-0" />

            {/* Footer Universal */}
            <Section className="bg-[#f1f5f9] p-4 text-center">
              <Text className="text-[12px] text-[#64748b] m-0 font-medium uppercase tracking-tighter">
                Tecnología para PYMES • JKE Solutions
              </Text>
              <Text className="text-[11px] text-[#94a3b8] m-0 ">
                Has recibido este correo porque eres cliente de nuestra plataforma.<br/>
                <Link href="{{unsubscribe_url}}" className="text-[#0ea5e9] underline">Darse de baja</Link>
              </Text>
            </Section>

          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};