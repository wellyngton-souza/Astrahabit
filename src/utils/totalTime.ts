const totalTime = (timeObj: number) =>{
    let totalResult: string = "";

    if (Math.floor(timeObj / 3600) < 10) {
        totalResult = "0";
    }

    totalResult += Math.floor(timeObj / 3600) + ":";

    const minutes = Math.floor((timeObj % 3600) / 60);
    if (minutes < 10) {
        totalResult += "0";
    }

    totalResult += minutes + ":";

    const seconds = timeObj % 60;
    if (seconds < 10) {
        totalResult += "0";
    }

    totalResult += seconds;

    return totalResult;
}

export default totalTime;