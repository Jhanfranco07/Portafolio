# 📧 Ejemplo de Backend para Formulario de Contacto

## Opción 1: Node.js + Express + Nodemailer (Servidor Propio)

### Instalación

```bash
npm install express cors nodemailer dotenv
```

### Archivo: `/api/contact.js`

```javascript
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// Configurar transporter de Nodemailer
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST, // ej: smtp.gmail.com
  port: process.env.SMTP_PORT, // ej: 587
  secure: false,
  auth: {
    user: process.env.SMTP_USER, // tu email
    pass: process.env.SMTP_PASS, // tu contraseña o app password
  },
});

// Endpoint POST /api/contact
app.post('/api/contact', async (req, res) => {
  const { name, email, subject, message, budget } = req.body;

  // Validación básica
  if (!name || !email || !message) {
    return res.status(400).json({ 
      error: 'Faltan campos requeridos' 
    });
  }

  // Email HTML
  const htmlContent = `
    <h2>Nuevo contacto desde el sitio web</h2>
    <p><strong>Nombre:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Asunto:</strong> ${subject}</p>
    <p><strong>Presupuesto:</strong> ${budget || 'No especificado'}</p>
    <hr>
    <p><strong>Mensaje:</strong></p>
    <p>${message}</p>
  `;

  try {
    // Enviar email
    await transporter.sendMail({
      from: `"Contacto Web" <${process.env.SMTP_USER}>`,
      to: process.env.EMAIL_TO, // tu email personal
      replyTo: email,
      subject: `Nuevo contacto: ${subject}`,
      html: htmlContent,
    });

    res.status(200).json({ 
      success: true, 
      message: 'Email enviado correctamente' 
    });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ 
      error: 'Error al enviar el email' 
    });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
```

### Archivo: `.env`

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=tu-email@gmail.com
SMTP_PASS=tu-contraseña-o-app-password
EMAIL_TO=tu-email@gmail.com
PORT=3001
```

### Para Gmail:
1. Habilita "Verificación en 2 pasos" en tu cuenta Google
2. Genera una "Contraseña de aplicación": https://myaccount.google.com/apppasswords
3. Usa esa contraseña en `SMTP_PASS`

### Ejecutar

```bash
node api/contact.js
```

---

## Opción 2: Vercel Serverless Function

### Archivo: `/api/contact.js` (en carpeta raíz)

```javascript
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  // Solo aceptar POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método no permitido' });
  }

  const { name, email, subject, message, budget } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Faltan campos requeridos' });
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const htmlContent = `
    <h2>Nuevo contacto desde el sitio web</h2>
    <p><strong>Nombre:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Asunto:</strong> ${subject}</p>
    <p><strong>Presupuesto:</strong> ${budget || 'No especificado'}</p>
    <hr>
    <p><strong>Mensaje:</strong></p>
    <p>${message}</p>
  `;

  try {
    await transporter.sendMail({
      from: `"Contacto Web" <${process.env.SMTP_USER}>`,
      to: process.env.EMAIL_TO,
      replyTo: email,
      subject: `Nuevo contacto: ${subject}`,
      html: htmlContent,
    });

    return res.status(200).json({ 
      success: true, 
      message: 'Email enviado correctamente' 
    });
  } catch (error) {
    console.error('Error:', error);
    return res.status(500).json({ 
      error: 'Error al enviar el email' 
    });
  }
}
```

### Configurar en Vercel:
1. Ve a tu proyecto en vercel.com
2. Settings → Environment Variables
3. Agrega las mismas variables del `.env`
4. Redeploy

---

## Opción 3: Formspree (Más Simple - SIN Código Backend)

### 1. Registro en Formspree
- Ve a https://formspree.io
- Crea una cuenta gratuita
- Crea un nuevo formulario
- Copia el endpoint (ej: `https://formspree.io/f/ABC123`)

### 2. Actualizar Contact.tsx

```typescript
const onSubmit = async (data: ContactForm) => {
  setIsSubmitting(true);
  
  try {
    const response = await fetch('https://formspree.io/f/TU_FORM_ID', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    
    if (response.ok) {
      setIsSuccess(true);
      reset();
    } else {
      throw new Error('Error al enviar');
    }
  } catch (error) {
    console.error('Error:', error);
    alert('Error al enviar el formulario');
  } finally {
    setIsSubmitting(false);
  }
};
```

### Ventajas Formspree:
- ✅ Sin backend propio
- ✅ Configuración en 2 minutos
- ✅ 50 envíos/mes gratis
- ✅ Anti-spam incluido
- ✅ Notificaciones por email

---

## Opción 4: EmailJS (Sin Backend)

### 1. Registro en EmailJS
- Ve a https://www.emailjs.com
- Crea cuenta gratuita
- Crea un servicio de email (Gmail, Outlook, etc.)
- Crea una plantilla de email
- Copia: `serviceID`, `templateID`, `publicKey`

### 2. Instalar EmailJS

```bash
npm install @emailjs/browser
```

### 3. Actualizar Contact.tsx

```typescript
import emailjs from '@emailjs/browser';

const onSubmit = async (data: ContactForm) => {
  setIsSubmitting(true);
  
  try {
    await emailjs.send(
      'YOUR_SERVICE_ID',
      'YOUR_TEMPLATE_ID',
      {
        from_name: data.name,
        from_email: data.email,
        subject: data.subject,
        message: data.message,
        budget: data.budget,
      },
      'YOUR_PUBLIC_KEY'
    );
    
    setIsSuccess(true);
    reset();
  } catch (error) {
    console.error('Error:', error);
    alert('Error al enviar el formulario');
  } finally {
    setIsSubmitting(false);
  }
};
```

### Ventajas EmailJS:
- ✅ 200 envíos/mes gratis
- ✅ Sin código backend
- ✅ Templates personalizables
- ✅ Múltiples servicios de email

---

## Opción 5: Netlify Forms (Si despliegas en Netlify)

### 1. Actualizar el formulario en Contact.tsx

```tsx
<form 
  name="contact" 
  method="POST" 
  data-netlify="true"
  onSubmit={handleSubmit(onSubmit)}
>
  <input type="hidden" name="form-name" value="contact" />
  {/* ... resto del formulario */}
</form>
```

### 2. Crear archivo `/public/_redirects`

```
/*    /index.html   200
```

### 3. Desplegar en Netlify
- Los envíos aparecerán en el dashboard de Netlify
- 100 envíos/mes gratis

---

## Recomendaciones por Caso de Uso

| Opción | Mejor para | Complejidad | Costo |
|--------|-----------|-------------|-------|
| **Formspree** | Beginners, MVPs | ⭐ Muy fácil | Gratis (50/mes) |
| **EmailJS** | Proyectos personales | ⭐⭐ Fácil | Gratis (200/mes) |
| **Netlify Forms** | Si ya usas Netlify | ⭐ Muy fácil | Gratis (100/mes) |
| **Node.js + Nodemailer** | Control total | ⭐⭐⭐ Media | Gratis (servidor req.) |
| **Vercel Functions** | Escalabilidad | ⭐⭐⭐ Media | Gratis (tier básico) |

## ✅ Mi Recomendación

**Para empezar rápido:** Usa **Formspree** o **EmailJS**
- Sin backend
- Configuración en minutos
- Perfecto para validar la idea

**Para proyectos serios:** Usa **Vercel Functions** o **Netlify Functions**
- Serverless escalable
- Control total del código
- Sin costos hasta volumen alto

**Para máximo control:** Backend propio (Node.js)
- Control total
- Sin límites
- Requiere servidor/hosting

---

¿Necesitas ayuda implementando alguna opción? ¡Contáctame!
