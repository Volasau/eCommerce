export function isPromoLap(): boolean {
    let promoLapTrue = false;
    const allPromoBut = document.querySelectorAll('.lap-promo-but') as NodeList;
    allPromoBut.forEach((but) => {
        const button = but as HTMLButtonElement;
        if (button.innerHTML === 'Special price DELETE') {
            promoLapTrue = true;
        }
    });
    return promoLapTrue;
}
