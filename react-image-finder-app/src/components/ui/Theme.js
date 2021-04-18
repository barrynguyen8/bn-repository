import { createMuiTheme } from '@material-ui/core/styles'

const arcBlue = "#0B72B9"
const arcOrange = "#FF9B28"

export default createMuiTheme({
    palette: {
        common: {
            blue: `${arcBlue}`,
            orange: `${arcOrange}`
        },
        primary: {
            main: `${arcBlue}`
        },
        secondary: {
            main: `${arcOrange}`
        }
    },

    typography: {
        h4: {
            fontWeight: 400
        },
        tab: {
            fontFamily: "Raleway",
            fontWeight: 700,
            fontSize: "1rem"
        }
    }

})
