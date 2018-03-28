/**
 *
 * @authors Your Name (you@example.org)
 * @date    2018-03-08 23:24:03
 * @version $Id$
 */
$(function(){

    //瀑布流
    $('.js-masonry').masonry({
       itemSelector: '.hreview'
    });

    //点击导航，通过动画滚动到指定内容区域
    $('.navbar').on('click','[href^="#"]',function(e){
        e.preventDefault();

        //将焦点聚焦到当前的a标签，避免其他a标签还是选中状态
        //$(this).focus();
        $('html,body').animate({'scrollTop': $(this.getAttribute('href')).offset().top}, 'slow');
    });
});
