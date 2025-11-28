// Datos iniciales de servicios para la galería
// Cada servicio incluye: id, nombre, precio (MXN), descripción corta y URL de imagen
export const services = [
  {
    id: 'svc-1',
    name: 'Corte de cabello',
    price: 180,
    description: 'Estilo clásico o moderno, incluye lavado rápido.',
    imageUrl: 'https://images.unsplash.com/photo-1517832207067-4db24a2ae47c?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 'svc-2',
    name: 'Masaje relajante',
    price: 350,
    description: 'Sesión de 45 minutos para aliviar tensión.',
    imageUrl: 'https://images.unsplash.com/photo-1519822472666-0a525aab0a1b?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 'svc-3',
    name: 'Limpieza facial',
    price: 280,
    description: 'Tratamiento básico para piel fresca y suave.',
    imageUrl: 'https://images.unsplash.com/photo-1592415486689-381d45eb55b7?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 'svc-4',
    name: 'Manicure profesional',
    price: 220,
    description: 'Corte, limado y esmalte de larga duración.',
    imageUrl: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1200&auto=format&fit=crop',
  },
];

// Helper para formatear precio en MXN
export const formatPrice = (value) =>
  new Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN' }).format(value);
