export default function dateGenerator(data){
    const userBrowserLanguage = window.navigator.language;
    return new Date(data).toLocaleDateString(userBrowserLanguage);
}
