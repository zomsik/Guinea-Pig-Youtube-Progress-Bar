//let sizeOfChapter = getComputedStyle(document.querySelector("#movie_player > div.ytp-chrome-bottom > div.ytp-progress-bar-container > div.ytp-progress-bar > div.ytp-chapters-container > div:nth-child(2)"));
//var sizeOfChapter = getComputedStyle(document.querySelector("#movie_player > div.ytp-chrome-bottom > div.ytp-progress-bar-container > div.ytp-progress-bar > div.ytp-chapters-container:first-child "));
//let sizeOfPlayer = getComputedStyle(document.querySelector("#movie_player > div.ytp-chrome-bottom"));
//let sizeOfChapter2 = getComputedStyle(document.querySelector("#movie_player > div.ytp-chrome-bottom > div.ytp-progress-bar-container > div.ytp-progress-bar > div.ytp-chapters-container > div.ytp-chapter-hover-container.ytp-exp-chapter-hover-container.ytp-exp-chapter-hover-effect"));
setTimeout(function() {
    var content = `<div class="divGrass"></div>`;
    const progress = document.querySelectorAll('div.ytp-chrome-bottom > div.ytp-progress-bar-container > div.ytp-progress-bar > div.ytp-chapters-container > div > div.ytp-progress-list > div.ytp-play-progress');
    var i = 0,
        l = progress.length;
    for (; i < l; i++) {
        progress[i].innerHTML = content;
    }

    // chapters player
    if (progress.length > 1) {
        /*
                var allChapters = document.getElementsByClassName('ytp-swatch-background-color');
                for (var i = 0; i < allChapters.length; i++) {
                    allChapters[i].style.backgroundSize = 'cover';

                }*/

        var elems = document.querySelectorAll('.ytp-swatch-background-color');
        for (var index = 0; index < elems.length; index++) {
            elems[index].style.backgroundSize = 'cover';
        }
    }


}, 1500);




//alert(sizeOfChapter.width);




//document.querySelector("#movie_player > div.ytp-chrome-bottom > div.ytp-progress-bar-container > div.ytp-progress-bar > div.ytp-chapters-container > div > div.ytp-progress-list > div.ytp-play-progress.ytp-swatch-background-color")