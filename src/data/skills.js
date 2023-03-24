import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact } from '@fortawesome/free-brands-svg-icons';

export const skills = [
    {
        name: "Front-End Technologies",
        skills: [
            <a href="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" title="HTML5"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" width="35" height="35" alt="HTML5" /></a>,
            <a href="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-plain-wordmark.svg" title="CSS3"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-plain-wordmark.svg" width="35" height="35" alt="CSS3" /></a>,
            <a href="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" title="JavaScript"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" width="35" height="35" alt="JavaScript" className='radius-5' /></a>,
            // <a href="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" title="React"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" width="40" height="40" alt="React" /></a>,
            <FontAwesomeIcon icon={faReact} className="fs-1 light-accent" alt="React" />,
            <a href="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-original.svg" title="Bootstrap"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-original.svg" width="35" height="35" alt="Bootstrap" /></a>,
            <a href="https://raw.githubusercontent.com/devicons/devicon/master/icons/jquery/jquery-original.svg" title="JQuery"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/jquery/jquery-original.svg" width="35" height="35" alt="JQuery" /></a>,
        ]
    },
    {
        name: "Back-End Technologies",
        skills: [
            <a href="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" title="Nodejs"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" width="55" height="55" alt="Nodejs" /></a>,
            <a href="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg" title="Express"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg" width="40" height="40" alt="Express.js" /></a>,
            <a href="https://raw.githubusercontent.com/devicons/devicon/master/icons/graphql/graphql-plain.svg" title="GraphQL"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/graphql/graphql-plain.svg" width="40" height="40" alt="GraphQL" /></a>,
        ]
    },
    {
        name: "Databases",
        skills: [
            <a href="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg" title="MySQL"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg" width="35" height="35" alt="MySQL" /></a>,
            <a href="https://raw.githubusercontent.com/devicons/devicon/master/icons/sequelize/sequelize-original.svg" title="Sequelize"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/sequelize/sequelize-original.svg" width="40" height="40" alt="Sequelize" /></a>,
            <a href="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" title="MongoDB"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" width="50" height="50" alt="MongoDB" /></a>,
            <a href="https://camo.githubusercontent.com/01317d91d56ad45fb327e6119489e9609713787301008eb944ba41b7841c946d/68747470733a2f2f6d6f6e676f6f73656a732e636f6d2f646f63732f696d616765732f6d6f6e676f6f7365355f36327833305f7472616e73706172656e742e706e67" title="Mongoose"><img src="https://camo.githubusercontent.com/01317d91d56ad45fb327e6119489e9609713787301008eb944ba41b7841c946d/68747470733a2f2f6d6f6e676f6f73656a732e636f6d2f646f63732f696d616765732f6d6f6e676f6f7365355f36327833305f7472616e73706172656e742e706e67" width="35" height="35" alt="Mongoose" /></a>,
        ]
    },
    {
        name: "Tools and Packages",
        skills: [
            <a href="https://raw.githubusercontent.com/devicons/devicon/master/icons/npm/npm-original-wordmark.svg" title="npm"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/npm/npm-original-wordmark.svg" width="35" height="35" alt="npm" /></a>,
            <a href="https://raw.githubusercontent.com/webpack/media/master/logo/icon-square-big.svg" title="Webpack"><img src="https://raw.githubusercontent.com/webpack/media/master/logo/icon-square-big.svg" width="40" height="40" alt="Webpack" className='main-brand' /></a>,
            <a href="https://raw.githubusercontent.com/devicons/devicon/master/icons/handlebars/handlebars-original.svg" title="Handlebars"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/handlebars/handlebars-original.svg" width="35" height="35" alt="Handlebars" /></a>,
            <a href="https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original-wordmark.svg" title="Git"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original-wordmark.svg" width="45" height="45" alt="Git" /></a>,
        ]
    },
]