const runFunction = async (func) => {
    if (typeof func !== "function") throw new Error("runFunction: argument is not a function");

    func();
};

const failMessage = (funcName, { message }) => {
    console.log(`${funcName}: error - ${message}`);
};
