import { BaseLayout } from '../components/BaseLayout';
import { Text, Section, Container, Button, Hr, Row, Column } from '@react-email/components';
import * as React from 'react';

export default function SubscriptionReceipt() {
  return (
    <BaseLayout previewText="Confirmación de pago - JKE Solutions">
      
      {/* Icono de Éxito (Opcional, pero visualmente positivo) */}
      <Section className="text-center mb-6">
        <Text className="text-4xl m-0">✅</Text>
      </Section>

      <Text className="text-xl font-bold text-center text-[#1e293b] mb-2">
        ¡Pago recibido con éxito!
      </Text>
      
      <Text className="text-[#475569] text-center text-[16px] mb-8">
        Gracias por tu suscripción. Hemos procesado tu pago correctamente.
      </Text>

      {/* Tarjeta de Resumen del Pago */}
      <Section className="bg-[#f8fafc] border border-[#e2e8f0] rounded-lg p-0 overflow-hidden mb-8">
        
        {/* Cabecera de la Tarjeta (Monto) */}
        <Section className="bg-[#f1f5f9] p-6 text-center border-b border-[#e2e8f0]">
          <Text className="text-[#64748b] text-xs font-bold uppercase tracking-wider m-0 mb-2">
            Monto Total Pagado
          </Text>
          <Text className="text-4xl font-bold text-[#0ea5e9] m-0">
            {"{{amount}}"} <span className="text-xl text-[#64748b]">{"{{currency}}"}</span>
          </Text>
        </Section>

        {/* Detalles */}
        <Section className="p-6">
          <Row className="mb-4">
            <Column>
              <Text className="m-0 text-[#64748b] text-sm">Concepto:</Text>
              <Text className="m-0 text-[#1e293b] font-medium">Suscripción JKE Solutions</Text>
            </Column>
            <Column className="text-right">
              <Text className="m-0 text-[#64748b] text-sm">Fecha:</Text>
              <Text className="m-0 text-[#1e293b] font-medium">{"{{date}}"}</Text>
            </Column>
          </Row>
          
          <Hr className="border-dashed border-[#e2e8f0] my-4" />
          
        </Section>
      </Section>

      {/* Call to Action: Ver Recibo */}
      <Section className="text-center mb-6">
        <Button
          href={"{{receipt_url}}"}
          className="bg-[#0f172a] text-white py-4 rounded-md font-bold text-[14px] block w-full sm:w-auto sm:px-8"
        >
          Descargar Recibo
        </Button>
      </Section>

      <Text className="text-center text-[#94a3b8] text-xs">
        ¿Preguntas sobre este cargo? Responde a este correo o contacta a soporte.
      </Text>

    </BaseLayout>
  );
}