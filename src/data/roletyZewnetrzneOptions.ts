// src/data/roletyZewnetrzneOptions.ts
import type { ColorOption } from '@/data/types';

// Kolory pancerza (lameli) — przykładowy zestaw (standard + drewnopodobne)
export const pancerzOptions: ColorOption[] = [
    { id: 'pa-bialy', name: 'Biały', hex: '#ffffff' },
    { id: 'pa-szary', name: 'Szary', hex: '#bfc4c9' },
    { id: 'pa-antracyt', name: 'Antracyt', hex: '#2f3237' },
    { id: 'pa-braz', name: 'Brąz', hex: '#6b4b3e' },
    { id: 'pa-ciemn-braz', name: 'Ciemny brąz', hex: '#4a342c' },
    // drewnopodobne (podmień na realne tekstury, gdy będziesz mieć pliki)
    { id: 'pa-zloty-dab', name: 'Złoty dąb', texture: '/images/rolety-zew/pancerz/zloty-dab.jpg' },
    { id: 'pa-orzech', name: 'Orzech', texture: '/images/rolety-zew/pancerz/orzech.jpg' },
    { id: 'pa-mahon', name: 'Mahoń', texture: '/images/rolety-zew/pancerz/mahon.jpg' },
];

// Kolory skrzynki i prowadnic — najczęściej wybierane
export const boxGuideOptions: ColorOption[] = [
    { id: 'bx-bialy', name: 'Biały', hex: '#ffffff' },
    { id: 'bx-srebrny', name: 'Srebrny', hex: '#c7c9cc' },
    { id: 'bx-szary', name: 'Szary', hex: '#bfc4c9' },
    { id: 'bx-antracyt', name: 'Antracyt', hex: '#2f3237' },
    { id: 'bx-braz', name: 'Brąz', hex: '#6b4b3e' },
    { id: 'bx-c-br', name: 'Ciemny brąz', hex: '#4a342c' },
    // możesz dodać RAL/drewnopodobne z texture, jeśli masz
];
