
var marked = require('marked');
var renderer = new marked.Renderer();
var $ = require("jquery");


function tagRe(tag) {
    return new RegExp('\\<\\/?' + tag + '\\>', "g");
}

function isTag(tag, html) {
    return tagRe(tag).test(html);
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

renderer.heading = function(text, level) {
    var attrs = "";
    var ob = parseAttributes(text);
    if (ob.id) attrs += ' id="' + ob.id + '"';
    if (ob.className) attrs += ' class="' + ob.className + '"';
    return '<h' + level + attrs + '>' + ob.text + '</h' + level + '>';
};

renderer.html = function(html) {
    if (isTag("advanced", html)) {
        html = html.replace(tagRe("advanced"), "");
        console.log("AD", html);
        return (
            '<div class=more-wrap>' +
                '<a href="" class=show-more data-md="' + html + '">Lisätietoja</a>' +
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
