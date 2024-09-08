export const readTime = (desc:any) =>{
    const averageReading = 225;

    const div = document.createElement("div")
    div.innerHTML = desc.__htm;

    const textContent = div.textContent || div.innerHTML;
    const words = textContent.trim().split(/\s+/)
    return Math.ceil(words.length / averageReading)
}