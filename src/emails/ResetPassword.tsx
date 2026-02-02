import { BaseLayout } from '../components/BaseLayout';
import { Text, Button, Section, Hr } from '@react-email/components';
import * as React from 'react';

export default function ResetPassword() {
  return (
    <BaseLayout previewText="Instrucciones para restablecer tu contraseña">
      
      <Text className="text-xl font-bold text-[#1e293b]">
        Hola,
      </Text>

      <Text className="text-[#475569] text-[16px] leading-7">
        Recibimos una solicitud para restablecer la contraseña de tu cuenta en **JKE Solutions**. Si tú hiciste esta solicitud, haz clic en el botón de abajo:
      </Text>

      <Section className="text-center my-8">
        <Button
          href={"{{reset_link}}"}
          className="bg-[#0ea5e9] text-white py-4 rounded-md font-bold text-[16px] block w-full sm:w-auto sm:px-8"
        >
          Restablecer contraseña
        </Button>
      </Section>

      <Text className="text-[#64748b] text-sm leading-6 italic bg-gray-50 p-4 border-l-4 border-gray-200">
        Si no solicitaste este cambio o no tienes una cuenta con nosotros, puedes ignorar este mensaje de forma segura. Tu contraseña actual no cambiará.
      </Text>

      <Hr className="border-[#f1f5f9] my-6" />

      <Text className="text-[#94a3b8] text-[12px]">
        Por seguridad, este enlace expirará en 1 hora. Si el botón no funciona, copia este enlace:
        <br />
        <span className="text-[#0ea5e9] underline">{"{{reset_link}}"}</span>
      </Text>

    </BaseLayout>
  );
}