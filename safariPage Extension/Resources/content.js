let titleContent = document.querySelector('meta[property="og:title"]')?.content;
let descriptionContent = document.querySelector('meta[property="og:description"]')?.content;
let imageURL = document.querySelector('meta[property="og:image"]')?.content;


browser.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.update != "please")
        return;
    
    sendResponse({
        title: titleContent,
        description: descriptionContent,
        image: imageURL
    });
});
