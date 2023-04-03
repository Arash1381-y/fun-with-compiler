import {Chip, Container, Grid, Stack, styled, Typography, useTheme} from "@mui/material";


const ProjectTypography = styled(Typography)(({theme}) => ({
    // align text to center
    textAlign: 'center',
    paddingTop: '1rem',
    paddingLeft: '2rem',
    paddingRight: '2rem',
}));

const PContainer = styled(Container)(({theme}) => ({
    display: 'flex',
    paddingBottom: '1rem',
    paddingTop: '1rem'
}));


const infoStyle = {
    textAlign: 'justify',
    textAlignLast: 'center'
};

const stackStyle ={
    paddingTop: '1rem',
    paddingLeft: '2rem',
    paddingRight: '2rem',
}


const imageContainerStyle = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
}



export const ProjectContainer = ({projectName, projectDescription, projectImage, projectTags, direction}) => {
    const theme = useTheme();
    const prjectInfoSection = (
        <Grid item xs={12} md={7}>
            <Grid container spacing={5} sx={{padding: '2rem'}}>
                <Grid item xs={12} md={12}>
                    <ProjectTypography color={'secondary'} variant='h3' fontWeight='bold' component='h4' gutterBottom>
                        {projectName}
                    </ProjectTypography>
                </Grid>
                <Grid item xs={12} md={12}>
                    <ProjectTypography variant='h6' component='p' sx={infoStyle} gutterBottom>
                        {projectDescription}
                    </ProjectTypography>
                </Grid>
                <Grid item xs={12} md={12}>
                    <Stack direction="row" spacing={2} sx={stackStyle}>
                        {
                            projectTags.map((tag, index) => (
                                <Chip key={index} label={tag} color="secondary"/>
                            ))
                        }
                    </Stack>
                </Grid>
            </Grid>
        </Grid>
    )

    const projectImageSection = (
        <Grid item xs={12} md={5} sx={imageContainerStyle}>
            <img src={projectImage} alt={projectName} width='500px' height='500px' style={{paddingRight: '1rem'}}/>
        </Grid>
    )


    return (
        <PContainer disableGutters maxWidth='100%'>
            <Grid container>
                {
                    direction === 'left' ?
                        (
                            <>
                                {prjectInfoSection}
                                {projectImageSection}
                            </>
                        ) :
                        (
                            <>
                                {projectImageSection}
                                {prjectInfoSection}
                            </>
                        )
                }
            </Grid>
        </PContainer>
    )
}
