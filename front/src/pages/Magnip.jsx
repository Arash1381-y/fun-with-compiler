import React from 'react';
import {Container} from "@mui/material";
import MagnipHeader from "../components/magnipPageComponents/MagnipHeader";
import ProjectInformation from "../components/magnipPageComponents/ProjectInformation";
import Menu from "../components/mainPageComponents/Menu";

function Magnip() {
    return (
        <>
            <Menu/>
            <MagnipHeader/>
            <ProjectInformation/>
        </>
    );
}

export default Magnip;