import colors from 'https://cdn.skypack.dev/tailwindcss/colors'

tailwind.config = {
    theme: {
        fontFamily: {
            body: ['medium 500', 'amaranth']
        },
        container: {
            center: true
        },
        extend: {
            colors: {
                gray: colors.blueGray,
                hero: '#FFE299',
                'hero-light': '#FFCB47',
                body: '#FFE8AD',
                'body-dark': '#FFC685',
                primary: '#FFCB47',
                'primary-dark': '#217197'
            },
            boxShadow: {
                avatar: '10px 10px 0px 0px #EF798A'
            },
        }
    }
}