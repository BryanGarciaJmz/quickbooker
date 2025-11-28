// Datos iniciales de servicios para la galería
// Cada servicio incluye: id, nombre, precio (MXN), descripción corta y URL de imagen
export const services = [
  {
    id: 'atr-1',
    name: 'Catedral de Guadalajara',
    price: 0,
    description: 'Icono histórico con arquitectura neogótica y plaza central vibrante.',
  imageUrl: '/images/catedral.jpg',
  },
  {
    id: 'atr-2',
    name: 'Hospicio Cabañas',
    price: 80,
    description: 'Patrimonio mundial con murales de Orozco y espacios culturales.',
  imageUrl: '/images/hospicio.png',
  },
  {
    id: 'atr-3',
    name: 'Teatro Degollado',
    price: 150,
    description: 'Teatro emblemático de estilo neoclásico con espectáculos y conciertos.',
  imageUrl: '/images/teatro.jpg',
  },
  {
    id: 'atr-4',
    name: 'Bosque Los Colomos',
    price: 0,
    description: 'Área verde ideal para caminar, relajarse y disfrutar de la naturaleza.',
  imageUrl: '/images/colomos.jpg',
  },
  {
    id: 'atr-8',
    name: 'Glorieta Minerva',
    price: 0,
    description: 'Monumento emblemático y punto de encuentro urbano de Guadalajara.',
  imageUrl: '/images/minerva.jpg',
  },
];

// Helper para formatear precio en MXN
export const formatPrice = (value) =>
  value === 0 ? 'Acceso libre' : new Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN' }).format(value);
