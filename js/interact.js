var svgDoc, svgTxt, svgBtn, htmlTxt,htmlBtn;

function send2svg() {
    svgTxt.lastChild.replaceWholeText(htmlTxt.value);
    htmlTxt.value = "";
}

function send2html() {
    htmlTxt.value = svgTxt.lastChild.wholeText;
    svgTxt.lastChild.replaceWholeText('SVG Text');
}

function init() {
    svgDoc = document.getElementById('svgDoc').getSVGDocument();
    svgTxt = svgDoc.getElementById('svgTxt');
    svgBtn = svgDoc.getElementById('svgBtn');
    htmlTxt = document.getElementById('htmlTxt');
    htmlBtn = document.getElementById('htmlBtn');
    svgBtn.onclick = send2html;
    htmlBtn.onclick = send2svg;
}

window.onload = init;
