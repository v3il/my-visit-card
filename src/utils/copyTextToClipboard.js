export default (text) => {
    const targetSpan = document.createElement('span');
    targetSpan.style.position = 'fixed';
    targetSpan.style.top = '-1000px';
    targetSpan.style.left = '-1000px';
    targetSpan.textContent = text;

    document.body.appendChild(targetSpan);

    selectTextOfNode(targetSpan);

    /** На некоторых устройствах (iPad) копирование генерирует исключение */
    try {
        document.execCommand("copy");
        return true;
    } catch(error) {
        return false;
    } finally {
        targetSpan.remove();
    }
}

function selectTextOfNode(node) {
    if (document.createTextRange) {
        const range = document.createTextRange();
        range.moveToElementText(node);
        range.select();
    } else if (window.getSelection) {
        const selection = window.getSelection();
        const range = document.createRange();

        range.selectNodeContents(node);
        selection.removeAllRanges();
        selection.addRange(range);
    }
}