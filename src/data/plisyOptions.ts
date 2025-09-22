// src/data/plisyOptions.ts

export type ColorOption = {
    id: string;
    name: string;
    hex?: string;      // fallback solid color
    texture?: string;  // /textures/... in public
};

/** TKANINY — plisy */
export const plisyFabricOptions: ColorOption[] = [
    { id: 'fab-white', name: 'Biały klasyczny', hex: '#f8f8f8' },
    { id: 'fab-cream', name: 'Kremowy', hex: '#f3e9d2' },
    { id: 'fab-beige', name: 'Beż piaskowy', hex: '#e2d1b0' },
    { id: 'fab-gray', name: 'Szary jasny', hex: '#d4d6d9' },
    { id: 'fab-anthracite', name: 'Antracyt', hex: '#3b3c3e' },
    { id: 'fab-blue', name: 'Błękit pastelowy', hex: '#bcd6f0' },
    { id: 'fab-green', name: 'Zieleń oliwkowa', hex: '#a3a57c' },
    { id: 'fab-pattern1', name: 'Wzór liście', texture: '/textures/fabric-leaves.jpg' },
    { id: 'fab-pattern2', name: 'Wzór geometryczny', texture: '/textures/fabric-geo.jpg' },
    { id: 'fab-blackout', name: 'Blackout czarny', hex: '#111111' },
];

/** PROFILE — ramki plis */
export const plisyProfileOptions: ColorOption[] = [
    { id: 'prof-white', name: 'Profil biały', hex: '#ffffff' },
    { id: 'prof-silver', name: 'Profil srebrny', hex: '#d0d0d0' },
    { id: 'prof-anthracite', name: 'Profil antracyt', hex: '#2f2f30' },
    { id: 'prof-gold-oak', name: 'Złoty dąb', texture: '/textures/profile-golden-oak.jpg' },
    { id: 'prof-pine', name: 'Sosna', texture: '/textures/profile-pine.jpg' },
    { id: 'prof-walnut', name: 'Orzech', texture: '/textures/profile-walnut.jpg' },
    { id: 'prof-black', name: 'Profil czarny', hex: '#000000' },
];
