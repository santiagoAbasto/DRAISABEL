import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
    './storage/framework/views/*.php',
    './resources/views/**/*.blade.php',
    './resources/js/**/*.js',
    './resources/js/**/*.jsx',
    './resources/js/**/*.vue',
  ],
  theme: {
    extend: {
      fontFamily: {
        // Interfaz: humanista moderna
        sans: ['Inter', 'Figtree', ...defaultTheme.fontFamily.sans],
        // Titulares editoriales en serif
        display: ['"Cormorant Garamond"', '"Playfair Display"', 'Georgia', 'serif'],
      },
      colors: {
        // Paleta de marca Dra. Isabel Piérola
        ivory: '#FAF7F2',
        porcelain: '#FFFDFC',
        champagne: '#E8D6C3',
        nude: '#D7B7A8',
        blush: '#F3DDD6',
        cocoa: '#6E5147',
        espresso: '#2C211E',
        sage: '#B8C6B1',
        gold: '#C8A46A',
        mist: '#EEE9E3',
        // Roles de texto (alto contraste sobre ivory)
        ink: '#2C211E',
        'ink-soft': '#6E5147',
        'ink-muted': '#8A7268',
      },
      borderRadius: {
        sm: '12px',
        md: '18px',
        lg: '28px',
        xl: '36px',
        full: '999px',
      },
      boxShadow: {
        soft: '0 20px 60px rgba(44,33,30,0.08)',
        card: '0 14px 40px rgba(44,33,30,0.10)',
        glow: '0 0 80px rgba(215,183,168,0.32)',
      },
      maxWidth: {
        prose: '68ch',
      },
      transitionTimingFunction: {
        'out-quart': 'cubic-bezier(0.22, 1, 0.36, 1)',
        'out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      letterSpacing: {
        label: '0.18em',
      },
    },
  },
  plugins: [forms],
};
