tailwind.config = {
    darkMode: 'class',
    theme: {
      extend: {}
    }
  }

  module.exports = {
    theme: {
      extend: {
        keyframes: {
          wiggle: {
            '0%': { borderTopLeftRadius: '40%' },
            '25%': { borderTopRightRadius: '35%' },
            '60%': { borderBottomLeftRadius: '40%' },
            '100%': { borderBottomRightRadius: '40%' }
          }
        },
        animation: {
          wiggle: 'wiggle 2s ease-in-out infinite'
        }
      }
    },
    plugins: []
  }