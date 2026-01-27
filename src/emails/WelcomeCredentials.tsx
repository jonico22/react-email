import { BaseLayout } from '../components/BaseLayout';
import { Text, Section, Container, Button, Hr } from '@react-email/components';
import * as React from 'react';

export default function WelcomeCredentials() {
  return (
    <BaseLayout previewText="Bienvenido a JKE Solutions - Aquí tienes tus accesos">
      
      {/* Saludo */}
      <Text className="text-xl font-bold text-[#1e293b]">
        Hola {"{{first_name}}"} {"{{last_name}}"},
      </Text>
      
      <Text className="text-[#475569] text-[16px] leading-7">
        Tu cuenta en la plataforma ha sido creada exitosamente. Te damos la bienvenida a bordo.
      </Text>

      {/* Panel de Credenciales (Estilo Tarjeta de Seguridad) */}
      <Section className="bg-[#f1f5f9] border border-[#e2e8f0] rounded-lg p-6 my-6 mx-auto w-full">
        <Text className="text-[#64748b] text-[12px] font-bold uppercase tracking-wider m-0 mb-2">
          Tus Credenciales de Acceso
        </Text>
        
        <table className="w-full" border={0} cellPadding={0} cellSpacing={0}>
          <tr>
            <td className="align-top pb-2" style={{ width: '30%' }}>
               <Text className="text-[#475569] font-medium m-0">Usuario:</Text>
            </td>
            <td className="align-top pb-2">
               <Text className="text-[#1e293b] font-bold m-0 font-mono">{"{{username}}"}</Text>
            </td>
          </tr>
          <tr>
            <td className="align-top">
               <Text className="text-[#475569] font-medium m-0">Contraseña:</Text>
            </td>
            <td className="align-top">
               <Text className="text-[#1e293b] font-bold m-0 font-mono bg-white px-2 py-1 rounded border border-[#cbd5e1] inline-block">
                 {"{{password}}"}
               </Text>
            </td>
          </tr>
        </table>
      </Section>

      {/* Advertencia de Seguridad Importante */}
      <Section className="bg-[#fff1f2] border-l-4 border-[#e11d48] p-4 my-6">
        <Text className="text-[#be123c] text-sm m-0 font-medium">
          ⚠️ Importante: Por tu seguridad, te recomendamos cambiar esta contraseña 
          inmediatamente después de iniciar sesión por primera vez.
        </Text>
      </Section>

      {/* Call to Action */}
      <Section className="text-center my-8">
        <Button
          href={"{{login_url}}"}
          className="bg-[#0ea5e9] text-white py-4 rounded-md font-bold text-[16px] block w-full sm:w-auto sm:px-8"
        >
          Iniciar Sesión
        </Button>
      </Section>

    </BaseLayout>
  );
}