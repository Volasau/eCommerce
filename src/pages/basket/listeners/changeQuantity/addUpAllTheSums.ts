export function addUpAllTheSums(): number {
    const sumList = document.querySelectorAll('.sum') as NodeList;
    let totalSum = 0;
    sumList.forEach((sumDiv) => {
        const sum = sumDiv as HTMLDivElement;
        totalSum += +sum.innerHTML;
    });

    return totalSum;
}
