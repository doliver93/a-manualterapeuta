// export const AmaColors = {
//     getWhite = (opacity : number) => { return `rbga(255,255,255,${opacity})`}
// }


export const AmaColors = {
    white(opacity? : number) { return `rgba(255, 255, 255, ${opacity || 1})`},
    darkBeige(opacity? : number) { return `rgba(206, 171, 155, ${opacity || 1})`},
    lightBeige(opacity? : number) { return `rgba(197, 176, 172, ${opacity || 1})`},
    brown(opacity? : number) { return `rgba(90, 68, 53, ${opacity || 1})`},
    grey(opacity? : number) { return `rgba(216, 219, 222, ${opacity || 1})`},
}