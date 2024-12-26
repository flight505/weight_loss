export const theme = {
  colors: {
    // Main colors
    primary: {
      main: '#F3D0D7', // Soft Pink
      light: '#FFEFEF', // Light Pink
      dark: '#E5B8BF', // Deep Pink
      hover: '#EBC4CB',
      100: '#FFEFEF',
      200: '#FFE5E5',
      300: '#F8DFE2',
      400: '#F3D0D7',
      500: '#EBC4CB',
      600: '#E5B8BF',
      700: '#D9A5AD',
      800: '#CC939B',
      900: '#BF8089',
    },
    secondary: {
      main: '#F0EBE3', // Warm Beige
      light: '#F6F5F2', // Light Beige
      dark: '#E5E0D8',
      hover: '#EBE6DE',
      100: '#F6F5F2',
      200: '#F3F2EF',
      300: '#F0EBE3',
      400: '#EBE6DE',
      500: '#E5E0D8',
      600: '#DCD7CF',
      700: '#D2CEC6',
      800: '#C9C5BD',
      900: '#BFB9B1',
    },
    accent: {
      rose: {
        light: '#FFEFEF',
        main: '#F3D0D7',
        dark: '#E5B8BF',
      },
      sand: {
        light: '#F6F5F2',
        main: '#F0EBE3',
        dark: '#E5E0D8',
      },
      peach: {
        light: '#FFE5DC',
        main: '#FFD5C8',
        dark: '#FFC5B4',
      },
    },
    neutral: {
      white: '#FFFFFF',
      background: '#F6F5F2',
      gray: {
        50: '#F6F5F2',
        100: '#F0EBE3',
        200: '#E5E0D8',
        300: '#D2CEC6',
        400: '#BFB9B1',
        500: '#A6A099',
        600: '#8C8680',
        700: '#736D66',
        800: '#59544D',
        900: '#403B33',
      },
    },
    text: {
      primary: '#403B33',
      secondary: '#736D66',
      disabled: '#A6A099',
    },
  },
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    '2xl': '3rem',
    '3xl': '4rem',
  },
  borderRadius: {
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    full: '9999px',
  },
  shadows: {
    sm: '0 2px 8px -1px rgba(0, 0, 0, 0.05)',
    md: '0 4px 12px -2px rgba(0, 0, 0, 0.05)',
    lg: '0 12px 24px -4px rgba(0, 0, 0, 0.05)',
    inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.02)',
    glow: '0 0 15px rgba(243, 208, 215, 0.5)', // Soft pink glow
  },
} as const;

export type Theme = typeof theme;

// Utility function to get nested color values
export function getColor(path: string): string {
  const keys = path.split('.');
  let result: unknown = theme.colors;
  
  for (const key of keys) {
    if (result && typeof result === 'object' && key in result) {
      result = (result as Record<string, unknown>)[key];
    } else {
      return path;
    }
  }
  
  return typeof result === 'string' ? result : path;
}

// Common style combinations
export const styles = {
  gradients: {
    softRose: `linear-gradient(135deg, ${theme.colors.accent.rose.light} 0%, ${theme.colors.accent.rose.main} 100%)`,
    warmSand: `linear-gradient(135deg, ${theme.colors.accent.sand.light} 0%, ${theme.colors.accent.sand.dark} 100%)`,
    peachToRose: `linear-gradient(135deg, ${theme.colors.accent.peach.light} 0%, ${theme.colors.accent.rose.main} 100%)`,
    multiTone: `linear-gradient(135deg, 
      ${theme.colors.accent.sand.light} 0%, 
      ${theme.colors.accent.rose.light} 50%,
      ${theme.colors.accent.peach.light} 100%
    )`,
  },
  containers: {
    default: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8',
    narrow: 'max-w-3xl mx-auto px-4 sm:px-6',
  },
  buttons: {
    primary: `
      bg-accent-rose-main
      hover:bg-accent-rose-dark
      text-neutral-gray-800
      font-medium
      rounded-full
      shadow-sm
      hover:shadow-md
      transform
      hover:-translate-y-0.5
      transition-all
      duration-300
    `,
    secondary: `
      bg-accent-sand-main
      hover:bg-accent-sand-dark
      text-neutral-gray-800
      font-medium
      rounded-full
      shadow-sm
      hover:shadow-md
      transform
      hover:-translate-y-0.5
      transition-all
      duration-300
    `,
    outline: `
      bg-white
      hover:bg-accent-rose-light
      text-neutral-gray-800
      font-medium
      rounded-full
      border
      border-accent-rose-main
      hover:border-accent-rose-dark
      shadow-sm
      hover:shadow-md
      transform
      hover:-translate-y-0.5
      transition-all
      duration-300
    `,
  },
  cards: {
    default: `
      bg-white
      rounded-2xl
      shadow-sm
      hover:shadow-md
      transition-all
      duration-300
      border
      border-accent-rose-light
      hover:border-accent-rose-main
    `,
    highlighted: `
      bg-white
      rounded-2xl
      shadow-md
      hover:shadow-lg
      transition-all
      duration-300
      border-2
      border-accent-rose-main
      hover:border-accent-rose-dark
    `,
    glass: `
      bg-white/80
      backdrop-blur-lg
      rounded-2xl
      shadow-sm
      hover:shadow-md
      transition-all
      duration-300
      border
      border-accent-rose-light/50
    `,
  },
  decorative: {
    softBorder: `border border-accent-rose-light/50`,
    glowHover: `hover:shadow-glow transition-shadow duration-300`,
    glassMorphism: `bg-white/80 backdrop-blur-lg`,
  },
}; 