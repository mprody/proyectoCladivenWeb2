import global from './global'

const getPageContext= (page) => {
    return {
        ...global,
    };
}

export default getPageContext;