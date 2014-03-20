
var marked = require('marked');
var renderer = new marked.Renderer();
var $ = require("jquery");


function tagRe(tag) {
    return new RegExp('\\<\\/?' + tag + '\\>', "g");
}

function isTag(tag, html) {
    return tagRe(tag).test(html);
}


renderer.html = function(html) {
    console.log(html);
    if (isTag("anchor", html)) {
        var anchor = $.trim($(html).text());
        return '<a class=anchor id=' + anchor + ' href="#' + anchor +'">#</a>';
    }

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

var md = $("markdown");

md.replaceWith(marked(md.html(), { renderer: renderer }));

$(".show-more").each(function() {
    var el = $(
        '<div class=more >' +
            marked($(this).data("md")) +
        '</div>'
    );

    el.hide();
    $(this).after(el);

    var toggle = true;
    $(this).on("click", function(e) {
        e.preventDefault();
        toggle = !toggle;
        if (toggle) el.hide("slow");
        else el.show("slow");
    });
});
