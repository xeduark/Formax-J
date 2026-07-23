import type { SponsorsData } from '../types';

export const sponsorsData: SponsorsData = {
  main: { name: 'CityRun', desc: 'Líder en equipamiento deportivo para patinaje de velocidad. Calzado, protecciones y accesorios de alta calidad para competidores de élite.', url: 'https://cityrun.com', icon: 'fa-running', gradient: 'from-orange-500 to-red-600' },
  products: [
    { name: 'Patines Pro Speed', desc: 'Botas de fibra de carbono', price: '€289', icon: 'fa-shoe-prints', color: 'orange' },
    { name: 'Ruedas 110mm', desc: 'Ruedas de competición', price: '€45', icon: 'fa-circle', color: 'red' },
    { name: 'Casco Aerodinámico', desc: 'Certificación CE', price: '€89', icon: 'fa-hard-hat', color: 'yellow' },
    { name: 'Traje de Competición', desc: 'Aerodinámico y ligero', price: '€159', icon: 'fa-tshirt', color: 'blue' }
  ],
  secondary: [
    { name: 'BikeSport', icon: 'fa-bicycle', color: 'text-green-500' },
    { name: 'VitaHealth', icon: 'fa-heartbeat', color: 'text-red-500' },
    { name: 'AquaPure', icon: 'fa-tint', color: 'text-blue-500' },
    { name: 'SafeGuard', icon: 'fa-shield-alt', color: 'text-yellow-500' }
  ]
};