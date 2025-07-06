module.exports = {
  content: ["./pages/*.{html,js}", "./index.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#F0F7F3", // very light green
          100: "#D1E7D9", // light green
          200: "#A3CFB3", // medium light green
          300: "#75B78D", // medium green
          400: "#479367", // medium dark green
          500: "#2C5F41", // deep forest green - base
          600: "#234C34", // darker green
          700: "#1A3927", // very dark green
          800: "#11261A", // extremely dark green
          900: "#08130D", // almost black green
          DEFAULT: "#2C5F41", // deep forest green
        },
        secondary: {
          50: "#F7F1ED", // very light brown
          100: "#E8D5C4", // light brown
          200: "#D1AB89", // medium light brown
          300: "#BA814E", // medium brown
          400: "#A35B31", // medium dark brown
          500: "#8B4513", // warm brown - base
          600: "#6F370F", // darker brown
          700: "#53290B", // very dark brown
          800: "#371B07", // extremely dark brown
          900: "#1B0D04", // almost black brown
          DEFAULT: "#8B4513", // warm brown
        },
        accent: {
          50: "#FBF8F3", // very light gold
          100: "#F3E8D7", // light gold
          200: "#E7D1AF", // medium light gold
          300: "#DBBA87", // medium gold
          400: "#CFB07D", // medium dark gold
          500: "#D4A574", // soft gold - base
          600: "#B8925F", // darker gold
          700: "#9C7F4A", // very dark gold
          800: "#806C35", // extremely dark gold
          900: "#645920", // almost black gold
          DEFAULT: "#D4A574", // soft gold
        },
        background: "#FAFAFA", // off-white
        surface: "#FFFFFF", // pure white
        text: {
          primary: "#1A1A1A", // near-black
          secondary: "#666666", // medium gray
        },
        success: {
          50: "#F0FDF4", // very light success green
          100: "#DCFCE7", // light success green
          200: "#BBF7D0", // medium light success green
          300: "#86EFAC", // medium success green
          400: "#4ADE80", // medium dark success green
          500: "#22C55E", // clear green - base
          600: "#16A34A", // darker success green
          700: "#15803D", // very dark success green
          800: "#166534", // extremely dark success green
          900: "#14532D", // almost black success green
          DEFAULT: "#22C55E", // clear green
        },
        warning: {
          50: "#FFFBEB", // very light warning amber
          100: "#FEF3C7", // light warning amber
          200: "#FDE68A", // medium light warning amber
          300: "#FCD34D", // medium warning amber
          400: "#FBBF24", // medium dark warning amber
          500: "#F59E0B", // warm amber - base
          600: "#D97706", // darker warning amber
          700: "#B45309", // very dark warning amber
          800: "#92400E", // extremely dark warning amber
          900: "#78350F", // almost black warning amber
          DEFAULT: "#F59E0B", // warm amber
        },
        error: {
          50: "#FEF2F2", // very light error red
          100: "#FEE2E2", // light error red
          200: "#FECACA", // medium light error red
          300: "#FCA5A5", // medium error red
          400: "#F87171", // medium dark error red
          500: "#DC2626", // clear red - base
          600: "#DC2626", // darker error red
          700: "#B91C1C", // very dark error red
          800: "#991B1B", // extremely dark error red
          900: "#7F1D1D", // almost black error red
          DEFAULT: "#DC2626", // clear red
        },
        border: {
          DEFAULT: "rgba(0, 0, 0, 0.08)", // minimal border
          light: "rgba(0, 0, 0, 0.04)", // very light border
          medium: "rgba(0, 0, 0, 0.12)", // medium border
        },
      },
      fontFamily: {
        heading: ['Inter', 'sans-serif'],
        body: ['Source Sans Pro', 'sans-serif'],
        caption: ['Nunito Sans', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
        sans: ['Source Sans Pro', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        'source-sans': ['Source Sans Pro', 'sans-serif'],
        'nunito-sans': ['Nunito Sans', 'sans-serif'],
        'jetbrains-mono': ['JetBrains Mono', 'monospace'],
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
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
      },
      boxShadow: {
        'subtle': '0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06)',
        'soft': '0 4px 6px rgba(0, 0, 0, 0.07), 0 2px 4px rgba(0, 0, 0, 0.06)',
        'medium': '0 10px 15px rgba(0, 0, 0, 0.1), 0 4px 6px rgba(0, 0, 0, 0.05)',
        'large': '0 20px 25px rgba(0, 0, 0, 0.1), 0 8px 10px rgba(0, 0, 0, 0.04)',
        'extra-large': '0 25px 50px rgba(0, 0, 0, 0.25)',
      },
      transitionDuration: {
        '150': '150ms',
        '200': '200ms',
        '300': '300ms',
      },
      transitionTimingFunction: {
        'ease-out': 'cubic-bezier(0, 0, 0.2, 1)',
        'spring': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
      animation: {
        'fade-in': 'fadeIn 200ms ease-out',
        'slide-up': 'slideUp 300ms ease-out',
        'bounce-gentle': 'bounceGentle 300ms cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        bounceGentle: {
          '0%': { transform: 'scale(0.95)' },
          '50%': { transform: 'scale(1.02)' },
          '100%': { transform: 'scale(1)' },
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