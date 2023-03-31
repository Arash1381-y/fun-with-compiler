import {ProjectContainer} from "../General";
import {images} from "../../constant";

const ProjectParser = () => {
    const projectData = {
        projectName: 'Parser Tester',
        projectDescription: 'lorem  ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        projectImage: images.pinkTree,
        projectTags: ['React', 'Material UI', 'Javascript'],
        direction: 'right'
    };

    return (
        <ProjectContainer
            projectName={projectData.projectName}
            projectDescription={projectData.projectDescription}
            projectImage={projectData.projectImage}
            projectTags={projectData.projectTags}
            direction={projectData.direction}
        />
    )
};

export default ProjectParser;


