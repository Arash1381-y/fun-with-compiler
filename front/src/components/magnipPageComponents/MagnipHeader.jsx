import {images} from "../../constant";
import {Container, styled} from "@mui/material";


const HeroContainer = styled(Container)(({theme}) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#000' : '#fff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start', // align image to the top
    height: '60vh', // adjust the height as needed
    // set wave.svg in src/assertions
    backgroundImage: `url(${images.bubble})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    marginBottom: '2rem'
}));

const HeroImage = styled('img')({
    maxWidth: '100%',
    maxHeight: '100%',
    width: '250px',
    marginTop: '64px', // add some space between the top of the container and the image
});


const MagnipHeader = () => {
    return (
        <HeroContainer maxWidth="100%" disableGutters>
            <HeroImage src={images.magnip} alt="Hero Image"/>
        </HeroContainer>
    );
}


export default MagnipHeader;



