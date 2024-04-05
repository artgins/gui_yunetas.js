/*
 *  A toolbar with scroll (hidden) horizontal
 *
 *  Base partially in bulma.css
 *
 *  items: [item]
 *  item: {
 *      position: 'left' | 'center' | 'right',
 *      html: 'html-string',
 *      browser_event: '', // 'click', etc
 *      callback: function()
 *  }
 */
function yui_toolbar(parent, id="", clase="", style="", items=[])
{
    let $template = jQuery(`
        <div ${id?`id="${id}"`:''} ${style?`style="${style}"`:''} class="yui-horizontal-toolbar ${clase?clase:''}">
            <button class="yui-horizontal-toolbar-scroll-btn left">
                <span class="has-text-primary">
                <svg viewBox="0 0 320 512"><path class="fa-secondary" opacity=".4" d="M41.4 278.6c-12.5-12.5-12.5-32.8 0-45.3l160-160c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3L109.3 256 246.6 393.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0l-160-160z"/><path class="fa-primary" d=""/></svg>
                </span>
            </button>
            <div class="yui-horizontal-toolbar-container"></div>
            <button class="yui-horizontal-toolbar-scroll-btn right">
                <span class="has-text-primary">
                <svg viewBox="0 0 320 512"><path class="fa-secondary" opacity=".4" d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"/><path class="fa-primary" d=""/></svg>
                </span>
            </button>
        </div>
    `);

    let $container = $template.find('.yui-horizontal-toolbar-container');

    let $left_items = jQuery('<div class="yui-horizontal-toolbar-section"/>');
    let $center_items = jQuery('<div class="yui-horizontal-toolbar-section"/>');
    let $right_items = jQuery('<div class="yui-horizontal-toolbar-section"/>');

    for(let i=0; i<items.length; i++) {
        let position = items[i].position || "left";
        let html = items[i].html || "";
        let browser_event = items[i].browser_event || "click";
        let callback = (items[i].callback && (typeof items[i].callback === 'function'))?items[i].callback:null;
        if(!html) {
            continue;
        }
        let $item = null;
        switch(position) {
            case 'center':
                $item = jQuery(html).appendTo($center_items);
                break;
            case 'right':
                $item = jQuery(html).appendTo($right_items);
                break;
            case 'left':
            default:
                $item = jQuery(html).appendTo($left_items);
                break;
        }
        if($item && callback) {
            $item.data("callback", callback);
            $item.on(browser_event, function(evt) {
                if (evt.stopPropagation) {evt.stopPropagation();} else {evt.cancelBubble = true;}
                if (evt.preventDefault) {evt.preventDefault();} else {return false;}
                callback(items[i]);
            });
        }
    }

    $left_items.appendTo($container);
    $center_items.appendTo($container);
    $right_items.appendTo($container);

    const $toolbar = $template.appendTo(jQuery(parent));
    const container = $container.get(0);
    const $leftBtn = $toolbar.find('.yui-horizontal-toolbar-scroll-btn.left');
    const $rightBtn = $toolbar.find('.yui-horizontal-toolbar-scroll-btn.right');

    $leftBtn.on('click', scrollContentLeft);
    $rightBtn.on('click', scrollContentRight);

    function updateScrollButtons() {
        const isScrollable = container.scrollWidth > container.clientWidth;
        const atStart = container.scrollLeft <= 0;
        const atEnd = container.scrollLeft >= container.scrollWidth - container.clientWidth;
        $leftBtn.css('display', isScrollable && !atStart ? 'block' : 'none');
        $rightBtn.css('display', isScrollable && !atEnd ? 'block' : 'none');
    }

    function scrollContentLeft(evt) {
        container.scrollBy({ left: -30, behavior: 'smooth' });
        if (evt.stopPropagation) {evt.stopPropagation();} else {evt.cancelBubble = true;}
        if (evt.preventDefault) {evt.preventDefault();} else {return false;}
    }

    function scrollContentRight() {
        container.scrollBy({ left: 30, behavior: 'smooth' });
    }

    $container.on('scroll', updateScrollButtons);
    window.addEventListener('load', updateScrollButtons);
    window.addEventListener('resize', updateScrollButtons);
    updateScrollButtons();

    return $toolbar;
}
