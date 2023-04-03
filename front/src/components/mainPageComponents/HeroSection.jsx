import {Container, Grid, SpeedDial, styled, Typography} from '@mui/material'
import {images} from "../../constant";

const HeroSectionContainer = styled(Container)(({theme}) => ({
    backgroundColor: theme.palette.primary.main,
    display: 'flex',
    paddingBottom: '1rem',
    minHeight: '80vh',
    flexDirection: 'column',
    justifyContent: 'center'
}));

const HeroSectionTypography = styled(Typography)(({theme}) => ({
    // align text to center
    textAlign: 'center',
    paddingTop: '1rem',
    paddingLeft: '2rem',
    paddingRight: '2rem',
}));


const infoStyle = {
    textAlign: 'justify',
    textAlignLast: 'center'
};

const HeroSection = () => {
    return (
        <div>
            <HeroSectionContainer disableGutters maxWidth='100%'>
                <Grid container spacing='2'>
                    <Grid item xs={12} md={7}>
                        <HeroSectionTypography color='white' variant='h1' fontWeight='bold' component='h1' gutterBottom>
                            WELCOME TO FUN WITH COMPILER
                        </HeroSectionTypography>

                        <HeroSectionTypography color='white' variant='h6' component='p' sx={infoStyle} gutterBottom>
                            lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                            voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                        </HeroSectionTypography>
                    </Grid>
                    <Grid item xs={12} md={5}>
                        <img src={images.cat} alt='cat' width='100%' height='100%' style={{paddingRight: '1rem'}}/>
                    </Grid>
                </Grid>
            </HeroSectionContainer>
        </div>
    )
}

export default HeroSection;