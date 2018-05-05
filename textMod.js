const elements = document.getElementsByTagName('*');

const re = /[Tt][Oo][Rr][Oo][Nn][Tt][Oo]+/gm;

for (let i = 0; i < elements.length; i++) {
    const element = elements[i];

    for (let j = 0; j < element.childNodes.length; j++) {
        const node = element.childNodes[j];

        if (node.nodeType === 3) {
            const text = node.nodeValue;
            const replacedText = text.replace(re.exec(text), 'LeBronto');

            if (replacedText !== text) {
                element.replaceChild(document.createTextNode(replacedText), node);
            }
        }
    }
}
