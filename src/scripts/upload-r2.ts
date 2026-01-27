import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { render } from "@react-email/render";
import WelcomeCredentials from "@/emails/WelcomeCredentials"; 
import RegisterVerify from "@/emails/RegisterVerify";
import SubscriptionReceipt from "@/emails/SubscriptionReceipt";
// Asegúrate de que la ruta sea correcta
import * as dotenv from "dotenv";

dotenv.config();

const r2 = new S3Client({
  region: "auto",
  endpoint: `https://${process.env.R2_ACCOUNT_ID}.r2.cloudflarestorage.com`,
  credentials: {
    accessKeyId: process.env.R2_ACCESS_KEY_ID!,
    secretAccessKey: process.env.R2_SECRET_ACCESS_KEY!,
  },
});

async function uploadEmail(name: string, component: React.ReactElement) {
  try {
    // 1. IMPORTANTE: render ahora es asíncrono en las últimas versiones
    const html = await render(component); 

    // 2. Definimos el comando
    const command = new PutObjectCommand({
      Bucket: process.env.R2_BUCKET_NAME,
      Key: `templates/${name}.html`,
      Body: html, // Ahora 'html' es un string puro, no una Promesa
      ContentType: "text/html",
    });

    await r2.send(command);
    console.log(`✅ Plantilla ${name} subida con éxito a R2`);
  } catch (error) {
    console.error(`❌ Error subiendo la plantilla ${name}:`, error);
  }
}

const templatesToUpload = [
  { name: "welcome", component: WelcomeCredentials() },
  { name: "register-verify", component: RegisterVerify() },
  { name: "subscription-receipt", component: SubscriptionReceipt() },
  // Agrega aquí más plantillas fácilmente
];

async function uploadAllTemplates() {
  console.log("🚀 Iniciando subida masiva a R2...");

  // Usamos map para crear un arreglo de Promesas
  const uploadPromises = templatesToUpload.map((template) =>
    uploadEmail(template.name, template.component)
  );

  try {
    // Ejecutamos todas las subidas en paralelo
    await Promise.all(uploadPromises);
    console.log("✨ Proceso de subida finalizado.");
  } catch (error) {
    console.error("❌ Hubo un fallo en una o más subidas:", error);
  }
}

// Ejecución principal
uploadAllTemplates();
