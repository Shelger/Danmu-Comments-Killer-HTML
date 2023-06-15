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

function removeSensitiveDanmu() {
    const spanElements = document.querySelectorAll('.dm-info-dm'); // Select all span.dm-info-dm elements within li
    spanElements.forEach(span => {
        sensitiveWords.forEach(word => {
            if (span.innerText.includes(word)) {
                console.log("Remove " + word)
                let blockButton = span.parentNode.querySelector('.dm-info-block-btn');
                if (blockButton) blockButton.click(); 
            }
        })
    });
}

function removeSensitiveContent() {
    removeSensitiveComments();
    removeSensitiveDanmu();
}

console.log('running!');
const observer = new MutationObserver(removeSensitiveContent);
// Call the function when the page loads
observer.observe(document, { childList: true, subtree: true });
