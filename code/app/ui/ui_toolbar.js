/*
 *  A toolbar with scroll (hidden) horizontal
 *
 *  Base partially in bulma.css
 *
 *  items: [item]
 *  item: {
 *      position: 'left' | 'center' | 'right',
 *      html: 'html-string',
 *      callback: function()
 *  }
 */
function yui_toolbar(parent, id="", clase="", items=[])
{
    let left_items = '<div class="yui-horizontal-toolbar-section">';
    let center_items = '<div class="yui-horizontal-toolbar-section">';
    let right_items = '<div class="yui-horizontal-toolbar-section">';

    for(let i=0; i<items.length; i++) {
        let position = items[i].position || "left";
        let html = items[i].html || "";
        let callback = items[i].callback || null;
        if(!html) {
            continue;
        }
        switch(position) {
            case 'center':
                center_items += html;
                break;
            case 'right':
                right_items += html;
                break;
            case 'left':
            default:
                left_items += html;
                break;
        }
    }

    left_items += "</div>";
    center_items += "</div>";
    right_items += "</div>";

    let template = `
        <div ${id?`id="${id}"`:''} class="yui-horizontal-toolbar ${clase?clase:''}">
            <button class="yui-horizontal-toolbar-scroll-btn left" onclick="scrollContentLeft()">
                <span>
                <svg viewBox="0 0 512 512"><path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160zm352-160l-160 160c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L301.3 256 438.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0z"/>
                </svg>
                </span>
            </button>
            <div class="yui-horizontal-toolbar-container">
            ${left_items}${center_items}${right_items}
            </div>
            <button class="yui-horizontal-toolbar-scroll-btn right" onclick="scrollContentRight()">
                <span>
                <svg viewBox="0 0 512 512"><path d="M470.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 256 265.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160zm-352 160l160-160c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L210.7 256 73.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0z"/></svg>
                </svg>
                </span>
            </button>
        </div>
    `;

    return jQuery(parent).append(template);


    // const container = document.querySelector('.scroll-container');
    // const leftBtn = document.querySelector('.scroll-btn.left');
    // const rightBtn = document.querySelector('.scroll-btn.right');
    //
    // function updateScrollButtons() {
    //     const isScrollable = container.scrollWidth > container.clientWidth;
    //     const atStart = container.scrollLeft <= 0;
    //     const atEnd = container.scrollLeft >= container.scrollWidth - container.clientWidth;
    //     leftBtn.style.display = isScrollable && !atStart ? 'block' : 'none';
    //     rightBtn.style.display = isScrollable && !atEnd ? 'block' : 'none';
    // }
    //
    // function scrollContentLeft() {
    //     container.scrollBy({ left: -100, behavior: 'smooth' });
    // }
    //
    // function scrollContentRight() {
    //     container.scrollBy({ left: 100, behavior: 'smooth' });
    // }
    //
    // container.addEventListener('scroll', updateScrollButtons);
    // window.addEventListener('load', updateScrollButtons);
    // window.addEventListener('resize', updateScrollButtons);


}
