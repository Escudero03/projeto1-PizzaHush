export const turboLogger = (message, textcolor = "blue") => {
    const textStyle = `text-color: ${textcolor}`;
    console.log(`%c${message}`, textStyle);
    
};