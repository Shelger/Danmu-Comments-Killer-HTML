// content.js
const sensitiveWords = ['只因', '太美', '鸡哥', '老婆', '翻腕', '端菜', '前面的', '小黑子']; // Add any sensitive words here

function removeSensitiveComments() {
    const spanElements = document.querySelectorAll('.reply-content');
    spanElements.forEach(span => {
        sensitiveWords.forEach(word => {
            if (span.textContent.includes(word)) { // If the text includes '绝了'
                let ancestorDiv = span.closest('.reply-item');
                if (ancestorDiv) ancestorDiv.remove(); // Remove the parent li element
            }
        })
    });
}
console.log('running!')
const observer = new MutationObserver(removeSensitiveComments);
// Call the function when the page loads
observer.observe(document, { childList: true, subtree: true });