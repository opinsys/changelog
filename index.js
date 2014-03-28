
var marked = require('marked');
var renderer = new marked.Renderer();
var $ = require("jquery");


function tagRe(tag) {
    return '\\<\\/?' + tag + '(.*)\\>';
}

function matchTag(tag, html) {
    return html.match(new RegExp(tagRe(tag)));
}

function parseAttributes(text) {
    var re = /(.+?) *\{(.*)\}$/;
    var match = re.exec(text);
    if (!match) return { text: text };

    var className = "";
    var id = "";

    match[2].split(" ").forEach(function(attr) {
        if (attr[0] === ".") className += " " + attr.substring(1);
        if (attr[0] === "#") id = attr.substring(1);
    });

    return {
        text: match[1],
        id: id.trim(),
        className: className.trim()
    };

}

/**
 * Add support for Markdown Extra style attributes
 *
 *      # Heading {.foo}
 *
 * renders to
 *
 *      <h1 class="foo">Heading</h1>
 *
 * http://michelf.ca/projects/php-markdown/extra/#header-id
 **/
renderer.heading = function(text, level) {
    var attrs = "";
    var ob = parseAttributes(text);
    if (ob.id) attrs += ' id="' + ob.id + '"';
    if (ob.className) attrs += ' class="' + ob.className + '"';
    return '<h' + level + attrs + '>' + ob.text + '</h' + level + '>';
};

renderer.html = function(html) {
    var title = "Lisätietoja";
    var match = matchTag("advanced", html);
    if (match) {
        if (match[1]) {
            var titleMatch = match[1].match(/title="?([^"]+)"?/);
            title = titleMatch[1];
        }
        html = html.replace(new RegExp(tagRe("advanced"), "g"), "");
        return (
            '<div class=more-wrap>' +
                '<a href="" class=show-more data-md="' + html + '">' + title + '</a>' +
            '</div>'
        );
    }
    return html;
};

var md = $(".markdown");

md.replaceWith(marked(md.children("code").html(), { renderer: renderer }));

$(".show-more").each(function() {
    var el = $(
        '<div class=more >' +
            marked($(this).data("md")) +
        '</div>'
    );

    el.hide();
    $(this).after(el);

    var toggle = false;
    $(this).on("click", function(e) {
        e.preventDefault();
        toggle = !toggle;
        if (toggle) el.slideDown("fast");
        else el.slideUp("fast");
    });
});


var items = $("h2[id]");
var toc = $('<ul class="toc"></ul>');

function selectTocItemByHash() {
    toc.find(".selected").removeClass("selected");
    toc.find('a[href=' + window.location.hash + ']').addClass("selected");
}

function addInlineLink(i, el) {

    el = $(el);
    var anchorLink = $('<a href="#' + el.attr("id") + '" class=anchor>#</a>');
    el.append(anchorLink);
}

function toTocItem(i, el) {
    el = $(el);
    var li = $(
        '<li>' +
            '<a href="#' + el.attr("id") + '">' + el.text() + '</a>' +
        '</li>'
    );
    toc.append(li);
}


items.map(toTocItem);
items.each(addInlineLink);
toc.prependTo(".main");
$(window).on("hashchange", selectTocItemByHash);
selectTocItemByHash();
