import {Container, styled, Typography} from "@mui/material";

const MarginDiv = styled('div')(({theme}) => ({
    marginTop: theme.spacing(20),
    marginBottom: theme.spacing(20),
}));

const StyledUl = styled('ul')(({theme}) => ({
       fontSize: '1.5rem',
        '& li': {
            margin: theme.spacing(1),
        },
        '& a': {
            textDecoration: 'none',
            color: theme.palette.primary.main,
            '&:hover': {
                textDecoration: 'underline',
            }
        }
    }
))


const ProjectInformation = () => {
    const headers = [
        {id: 'what-is-magnip', text: 'What is Magnip?', subHeaders: []},
        {id: 'what-is-parser', text: 'What is Parser?', subHeaders: []},
        {
            id: 'what-is-visualizer', text: 'What is Visualizer?', subHeaders: [
                {id: 'what-is-visualizer', text: 'the top down parser?'},
                {id: 'what-is-visualizer', text: 'predictvie style?'},
                {id: 'what-is-visualizer', text: 'How our tester works and so on'},
            ]
        },
    ]

    return (
        <Container>

            <MarginDiv>
                <Typography variant='h4' component='h2' color='primary' gutterBottom>
                    What is Magnip?
                </Typography>
                <Typography variant='h5' gutterBottom>
                    lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lorem lorem ipsum dolor sit amet,
                    consectetur adipiscing elit. Nullam lorem
                    lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lorem
                    lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lorem
                    lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lorem
                    lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lorem
                </Typography>
            </MarginDiv>

            <MarginDiv>
                {/*    create unorder list as a table of contents. on click scroll to that section*/}
                <Typography variant='h4' component='h2' color='primary' gutterBottom>
                    Table of Contents
                </Typography>
                <StyledUl>
                    {headers.map((header) => (
                        <li key={header.id}>
                            <a href={`#${header.id}`}>{header.text}</a>
                            {header.subHeaders.length > 0 &&
                            <StyledUl>
                                {header.subHeaders.map((subHeader) => (
                                    <li key={subHeader.id}>
                                        <a href={`#${subHeader.id}`}>{"" + subHeader.text}</a>
                                    </li>
                                ))}
                            </StyledUl>
                            }
                        </li>
                    ))}
                </StyledUl>


            </MarginDiv>


            <MarginDiv>
                <Typography variant='h4' component='h2' color='primary' gutterBottom>
                    What is Magnip?
                </Typography>
                <Typography variant='h5' gutterBottom>
                    lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lorem lorem ipsum dolor sit amet,
                    consectetur adipiscing elit. Nullam lorem
                    lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lorem
                    lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lorem
                    lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lorem
                    lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lorem
                </Typography>
            </MarginDiv>
            <MarginDiv>
                <Typography variant='h4' component='h2' color='primary' gutterBottom>
                    What is Parser?
                </Typography>
                <Typography variant='h5' gutterBottom>
                    lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lorem lorem ipsum dolor sit amet,
                    consectetur adipiscing elit. Nullam lorem
                    lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lorem
                    lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lorem
                    lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lorem
                </Typography>
            </MarginDiv>
        </Container>
    );
}

export default ProjectInformation;