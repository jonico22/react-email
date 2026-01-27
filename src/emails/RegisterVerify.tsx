import { BaseLayout } from '../components/BaseLayout';
import { Text, Button, Section } from '@react-email/components';
import * as React from 'react';

export default function RegisterVerify() {
  return (
    <BaseLayout previewText="Verifica tu cuenta para completar el registro">
      
      <Text className="text-xl font-bold text-[#1e293b]">
        Hola {"{{first_name}}"} {"{{last_name}}"},
      </Text>

      <Text className="text-[#475569] text-[16px] leading-7">
        Gracias por registrarte en JKE Solutions. Para garantizar la seguridad de tu cuenta, 
        necesitamos confirmar que este correo es tuyo.
      </Text>

      <Section className="text-center my-8">
        <Button
          href={"{{verify_link}}"}
          className="bg-[#0ea5e9] text-white py-4 rounded-md font-bold text-[16px] block w-full sm:w-auto sm:px-8"
        >
          Verificar correo electrónico
        </Button>
      </Section>

      <Text className="text-[#94a3b8] text-[12px] mt-4">
        Si el botón no funciona, copia este enlace:
        <br />
        <span className="text-[#0ea5e9] underline">{"{{verify_link}}"}</span>
      </Text>

    </BaseLayout>
  );
}