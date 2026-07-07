import { ProcessStep, Project, Service, TargetAudience, TechCategory } from './types';

export const services: Service[] = [
  {
    id: 1,
    title: 'Landing pages y webs corporativas',
    description:
      'Sitios claros, rápidos y responsivos para presentar servicios, captar consultas y dar una primera impresión profesional.',
    icon: 'Layout',
    accent: 'blue'
  },
  {
    id: 2,
    title: 'Sistemas de gestión tipo SaaS',
    description:
      'Paneles privados, módulos de usuarios, operaciones, reportes y flujos internos pensados para trabajar mejor.',
    icon: 'Database',
    accent: 'violet'
  },
  {
    id: 3,
    title: 'Chatbots y asistentes inteligentes',
    description:
      'Asistentes para atender consultas, ordenar información y apoyar procesos de negocio con respuestas útiles y trazables.',
    icon: 'MessageSquare',
    accent: 'cyan'
  },
  {
    id: 4,
    title: 'Automatización de procesos y documentos',
    description:
      'Flujos que reducen tareas repetitivas: generación de archivos, formularios, hojas de cálculo y notificaciones.',
    icon: 'Workflow',
    accent: 'emerald'
  },
  {
    id: 5,
    title: 'Dashboards y visualización de datos',
    description:
      'Tableros con indicadores, filtros y reportes para leer información clave sin depender de archivos sueltos.',
    icon: 'BarChart3',
    accent: 'sky'
  },
  {
    id: 6,
    title: 'Plataformas web a medida',
    description:
      'Aplicaciones web diseñadas alrededor de un proceso real: solicitudes, seguimiento, administración y mejora continua.',
    icon: 'Blocks',
    accent: 'slate'
  }
];

export const technologies: TechCategory[] = [
  {
    category: 'Lenguajes',
    description: 'Base para construir interfaces, automatizaciones, APIs y modelos de datos.',
    items: [
      { name: 'Python', icon: 'python' },
      { name: 'TypeScript', icon: 'typescript' },
      { name: 'JavaScript', icon: 'javascript' },
      { name: 'HTML', icon: 'html' },
      { name: 'CSS', icon: 'css' },
      { name: 'SQL', icon: 'sql' }
    ]
  },
  {
    category: 'Frameworks / librerías',
    description: 'Herramientas para crear productos web modernos, mantenibles y escalables.',
    items: [
      { name: 'Next.js', icon: 'nextjs' },
      { name: 'React', icon: 'react' },
      { name: 'Tailwind CSS', icon: 'tailwind' },
      { name: 'Node.js', icon: 'nodejs' },
      { name: 'Express', icon: 'express' },
      { name: 'Prisma', icon: 'prisma' },
      { name: 'scikit-learn', icon: 'scikitlearn' }
    ]
  },
  {
    category: 'Herramientas / plataformas',
    description: 'Servicios de diseño, despliegue, bases de datos, pruebas e integración.',
    items: [
      { name: 'Figma', icon: 'figma' },
      { name: 'GitHub', icon: 'github' },
      { name: 'Vercel', icon: 'vercel' },
      { name: 'Neon', icon: 'neon' },
      { name: 'PostgreSQL', icon: 'postgresql' },
      { name: 'Supabase', icon: 'supabase' },
      { name: 'n8n', icon: 'n8n' },
      { name: 'Streamlit', icon: 'streamlit' },
      { name: 'Google Sheets API', icon: 'sheets' },
      { name: 'Postman', icon: 'postman' }
    ]
  }
];

export const projects: Project[] = [
  {
    id: 2,
    title: 'Sistema de gestión empresarial tipo SaaS',
    description:
      'Panel privado para administrar usuarios, operaciones, registros y reportes desde una sola plataforma.',
    longDescription:
      'Aplicación web pensada para equipos que necesitan dejar hojas dispersas y ordenar la gestión diaria. Puede incluir autenticación, roles, módulos operativos, trazabilidad de cambios y paneles para seguimiento.',
    category: 'SaaS interno',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Prisma', 'Tailwind CSS'],
    highlights: ['Roles de usuario', 'Módulos administrativos', 'Reportes internos', 'Base de datos relacional'],
    image: '/images/saas-dashboard.jpg'
  },
  {
    id: 3,
    title: 'StudyFlowAI',
    description:
      'Plataforma web para organizar tareas, cursos, exámenes y horarios con apoyo de inteligencia artificial.',
    longDescription:
      'Aplicación fullstack de productividad académica que centraliza tareas, cursos, exámenes, recordatorios y planificación semanal. Incluye seguimiento del progreso, autenticación y un asistente con IA conectado al contexto real del estudiante.',
    category: 'IA aplicada',
    technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'OpenAI API'],
    highlights: ['Gestión de tareas y cursos', 'Planificador semanal', 'Asistente académico con IA', 'Autenticación con Google'],
    image: '/images/ai-assistant.jpg',
    liveUrl: 'https://study-flow-ai-usil.vercel.app/'
  },
  {
    id: 4,
    title: 'Puerta Inteligente Emocional',
    description:
      'Aplicación que reconoce expresiones faciales y simula una puerta inteligente controlada por emociones.',
    longDescription:
      'Proyecto de visión artificial que usa una CNN para clasificar siete emociones. La puerta simulada se abre al detectar felicidad con suficiente confianza y un modelo de lenguaje genera una respuesta contextual.',
    category: 'IA aplicada',
    technologies: ['Python', 'Keras', 'OpenCV', 'Gradio', 'Hugging Face'],
    highlights: ['Clasificación de emociones', 'Detección facial', 'CNN + LLM', 'Despliegue en Hugging Face'],
    image: 'https://cdn-thumbnails.huggingface.co/social-thumbnails/spaces/Jhannn/emotion-smart-door.png',
    liveUrl: 'https://huggingface.co/spaces/Jhannn/emotion-smart-door'
  },
  {
    id: 5,
    title: 'Plataforma de automatización documental',
    description:
      'Herramienta para generar documentos, constancias o reportes a partir de plantillas y datos estructurados.',
    longDescription:
      'Sistema para reducir trabajo manual en documentos recurrentes. Puede integrar formularios, hojas de cálculo, plantillas, validaciones y almacenamiento organizado por expediente o proyecto.',
    category: 'Automatización',
    technologies: ['Python', 'n8n', 'Google Sheets API', 'React'],
    highlights: ['Plantillas editables', 'Datos estructurados', 'Validaciones', 'Historial de documentos'],
    image: '/images/document-automation.jpg'
  },
  {
    id: 6,
    title: 'SmartClaim AI',
    description:
      'Plataforma fullstack para delivery y gestión inteligente de reclamos con clasificación automática e IA.',
    longDescription:
      'Sistema con catálogo, carrito, pedidos y atención de reclamos para clientes, agentes y administradores. Integra clasificación automática, recuperación documental RAG, respuestas sugeridas, revisión humana, chat de soporte y reportes.',
    category: 'IA aplicada',
    technologies: ['React', 'TypeScript', 'FastAPI', 'PostgreSQL', 'OpenAI API'],
    highlights: ['Clasificación de reclamos', 'RAG documental', 'Gestión por roles', 'Reportes operativos'],
    image: '/images/public-process.jpg',
    liveUrl: 'https://clasificador-de-reclamos.vercel.app'
  }
];

export const processSteps: ProcessStep[] = [
  {
    number: 1,
    title: 'Descubrimiento',
    description: 'Reviso contigo el problema, los usuarios, el alcance real y el resultado que se espera lograr.'
  },
  {
    number: 2,
    title: 'Propuesta',
    description: 'Defino una solución viable con entregables claros, tiempos estimados y prioridades.'
  },
  {
    number: 3,
    title: 'Diseño / estructura',
    description: 'Ordeno la arquitectura, pantallas, flujos y datos antes de avanzar al desarrollo.'
  },
  {
    number: 4,
    title: 'Desarrollo',
    description: 'Construyo el producto con componentes reutilizables, buenas prácticas y revisiones por avance.'
  },
  {
    number: 5,
    title: 'Entrega y mejoras',
    description: 'Dejo la solución funcionando, documento lo necesario y propongo mejoras futuras si aportan valor.'
  }
];

export const targetAudiences: TargetAudience[] = [
  {
    id: 1,
    title: 'Emprendimientos',
    description: 'Marcas que necesitan una presencia digital clara para validar, vender o captar consultas.',
    icon: 'Rocket'
  },
  {
    id: 2,
    title: 'Negocios',
    description: 'Equipos que quieren ordenar operaciones, reducir tareas manuales y centralizar información.',
    icon: 'Building2'
  },
  {
    id: 3,
    title: 'Profesionales independientes',
    description: 'Consultores o especialistas que necesitan una web, herramienta o flujo propio.',
    icon: 'UserRound'
  },
  {
    id: 4,
    title: 'Sector público',
    description: 'Áreas que buscan digitalizar procesos, trámites, reportes o atención al ciudadano.',
    icon: 'Landmark'
  },
  {
    id: 5,
    title: 'Proyectos internos',
    description: 'Iniciativas de gestión que requieren prototipos funcionales, tableros o plataformas a medida.',
    icon: 'ClipboardCheck'
  }
];

export const contactInfo = {
  email: 'jhandev07@gmail.com',
  whatsapp: '+51 921 561 684',
  whatsappMessage: 'Hola Jhan, me gustaria conversar sobre un proyecto digital.',
  location: 'Perú / remoto',
  github: 'https://github.com/Jhanfranco07',
  linkedin: 'https://www.linkedin.com/in/jhandev07/'
};

export const projectTypes = [
  'Landing page / web corporativa',
  'Sistema SaaS / plataforma web',
  'Chatbot / asistente inteligente',
  'Dashboard / visualización de datos',
  'Automatización documental o de procesos',
  'Sistema web para trámites o gestión',
  'Otro tipo de proyecto'
];
