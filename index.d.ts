type Variables = {
    __filename: string;
    __dirname: string;
    require: NodeJS.Require;
    module: NodeJS.Module;
};

declare function createVariables(meta: {url: string}): Variables;

export default createVariables;