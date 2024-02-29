const hydrate = require('./index.js');

console.log(hydrate);

const srcHtml = `<html><head></head><body><h1>Hello World</h1>

<my-component first="Kevin" middle="" last="Blank"></my-component>

</body></html>`;

const renderThis = (srcHtml) => {
    return hydrate.renderToString(srcHtml, {
        prettyHtml: true,
        removeScripts: true
    });
}

renderThis(srcHtml).then((html) => {
    console.log(html);
});
