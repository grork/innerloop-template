namespace Codevoid.Sample.InnerloopTemplate {
    document.addEventListener("DOMContentLoaded", () => {
        const container = <HTMLDivElement>document.querySelector("[data-id='container']");
        container.innerText = `It is currently ${new Date().toLocaleString()}`;
    }, { once: true });
}