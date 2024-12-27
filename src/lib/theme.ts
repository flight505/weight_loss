type DeepStringRecord = {
  [key: string]: string | DeepStringRecord;
};

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
        light: '#FFE4E6',
        main: '#FDA4AF',
        dark: '#BE123C',
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
        50: '#F9FAFB',
        100: '#F3F4F6',
        200: '#E5E7EB',
        300: '#D1D5DB',
        400: '#9CA3AF',
        500: '#6B7280',
        600: '#4B5563',
        700: '#374151',
        800: '#1F2937',
        900: '#111827',
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
  let result = theme.colors as DeepStringRecord;
  
  for (const key of keys) {
    if (result && typeof result === 'object' && key in result) {
      const value = result[key];
      if (typeof value === 'string') return value;
      result = value as DeepStringRecord;
    } else {
      return path;
    }
  }
  
  return path;
}

// Common style combinations
export const styles = {
  containers: {
    default: 'container mx-auto px-4 md:px-6 lg:px-8',
    narrow: 'container mx-auto px-4 md:px-6 lg:px-8 max-w-4xl',
  },
  buttons: {
    primary: 'bg-accent-rose-main text-white font-medium rounded-full hover:bg-accent-rose-dark transition-colors',
    secondary: 'bg-accent-rose-light text-accent-rose-dark font-medium rounded-full hover:bg-accent-rose-main hover:text-white transition-colors',
  },
  cards: {
    glass: 'bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-neutral-gray-100/50',
  },
  gradients: {
    multiTone: 'bg-gradient-to-br from-accent-rose-light via-accent-peach-light to-accent-rose-main/30',
    softRose: 'bg-gradient-to-br from-accent-rose-light to-accent-rose-main/30',
    peachToRose: 'bg-gradient-to-br from-accent-peach-light to-accent-rose-light',
  },
  decorative: {
    glowHover: 'hover:shadow-glow transition-shadow duration-300',
  },
}; 