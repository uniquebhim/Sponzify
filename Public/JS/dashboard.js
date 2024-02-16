document.addEventListener('DOMContentLoaded', function() {
    const openerButton = document.querySelector('.half_complete_aside_opener');
    const asideLeft = document.querySelector('.aside_left');
    const rightContent = document.querySelector('.right_content');
    const leftItems = document.querySelectorAll('.left_item');
    const arrowImage = document.querySelector('.arrow-image');

    let initialWidth = '5%'; 
    let expandedWidth = '9.8%';
    let initialRightContentWidth = '94.8%'; 

    openerButton.addEventListener('click', function() {
        if (asideLeft.style.width === initialWidth) {
            asideLeft.style.width = expandedWidth;
            rightContent.style.width = '90%';
            rightContent.style.marginLeft = '10%';
        } else {
            asideLeft.style.width = initialWidth;
            rightContent.style.width = initialRightContentWidth;
            rightContent.style.marginLeft = '5.2%';
        }

        // Toggle the font size of left_item elements
        leftItems.forEach(item => {
            item.style.fontSize = (asideLeft.style.width === initialWidth) ? '0' : '';
        });
        
        // Toggle the class to invert the arrow
        arrowImage.classList.toggle('arrow-inverted');
    });
});
