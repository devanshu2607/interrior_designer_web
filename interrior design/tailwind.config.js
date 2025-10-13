module.exports = {
  content: [
    "./pages/*.{html,js}",
    "./index.html",
    "./js/*.js",
    "./components/*.{html,js}"
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors
        primary: {
          DEFAULT: "#2D3748", // gray-700
          50: "#F7FAFC", // gray-50
          100: "#EDF2F7", // gray-100
          200: "#E2E8F0", // gray-200
          300: "#CBD5E0", // gray-300
          400: "#A0AEC0", // gray-400
          500: "#718096", // gray-500
          600: "#4A5568", // gray-600
          700: "#2D3748", // gray-700
          800: "#1A202C", // gray-800
          900: "#171923", // gray-900
        },
        // Secondary Colors
        secondary: {
          DEFAULT: "#4A5568", // gray-600
          50: "#F7FAFC", // gray-50
          100: "#EDF2F7", // gray-100
          200: "#E2E8F0", // gray-200
          300: "#CBD5E0", // gray-300
          400: "#A0AEC0", // gray-400
          500: "#718096", // gray-500
          600: "#4A5568", // gray-600
          700: "#2D3748", // gray-700
          800: "#1A202C", // gray-800
          900: "#171923", // gray-900
        },
        // Accent Colors
        accent: {
          DEFAULT: "#E53E3E", // red-500
          50: "#FED7D7", // red-100
          100: "#FEB2B2", // red-200
          200: "#FC8181", // red-300
          300: "#F56565", // red-400
          400: "#E53E3E", // red-500
          500: "#C53030", // red-600
          600: "#9B2C2C", // red-700
          700: "#742A2A", // red-800
          800: "#63171B", // red-900
        },
        // Background Colors
        background: "#F7FAFC", // gray-50
        surface: {
          DEFAULT: "#EDF2F7", // gray-100
          hover: "#E2E8F0", // gray-200
        },
        // Text Colors
        text: {
          primary: "#1A202C", // gray-800
          secondary: "#718096", // gray-500
          muted: "#A0AEC0", // gray-400
        },
        // Status Colors
        success: {
          DEFAULT: "#38A169", // green-500
          50: "#F0FFF4", // green-50
          100: "#C6F6D5", // green-100
          200: "#9AE6B4", // green-200
          300: "#68D391", // green-300
          400: "#48BB78", // green-400
          500: "#38A169", // green-500
          600: "#2F855A", // green-600
          700: "#276749", // green-700
          800: "#22543D", // green-800
        },
        warning: {
          DEFAULT: "#D69E2E", // yellow-500
          50: "#FFFFF0", // yellow-50
          100: "#FEFCBF", // yellow-100
          200: "#FAF089", // yellow-200
          300: "#F6E05E", // yellow-300
          400: "#ECC94B", // yellow-400
          500: "#D69E2E", // yellow-500
          600: "#B7791F", // yellow-600
          700: "#975A16", // yellow-700
          800: "#744210", // yellow-800
        },
        error: {
          DEFAULT: "#E53E3E", // red-500
          50: "#FED7D7", // red-100
          100: "#FEB2B2", // red-200
          200: "#FC8181", // red-300
          300: "#F56565", // red-400
          400: "#E53E3E", // red-500
          500: "#C53030", // red-600
          600: "#9B2C2C", // red-700
          700: "#742A2A", // red-800
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        inter: ['Inter', 'system-ui', 'sans-serif'],
        accent: ['Playfair Display', 'serif'],
        playfair: ['Playfair Display', 'serif'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1.2' }],
        '6xl': ['3.75rem', { lineHeight: '1.2' }],
        '7xl': ['4.5rem', { lineHeight: '1.2' }],
        '8xl': ['6rem', { lineHeight: '1.2' }],
        '9xl': ['8rem', { lineHeight: '1.2' }],
      },
      boxShadow: {
        'sm': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        'DEFAULT': '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        'md': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        'inner': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
        'none': 'none',
        'floating': '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
      },
      transitionDuration: {
        '300': '300ms',
        '500': '500ms',
      },
      transitionTimingFunction: {
        'ease-out': 'cubic-bezier(0, 0, 0.2, 1)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'parallax': 'parallax 1s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        parallax: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(var(--parallax-offset, 0))' },
        },
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      borderRadius: {
        'xl': '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
    },
  },
  plugins: [],
}