

const PALETTE = [
    'red',
    'blue',
    'green',
    'purple',
    'orange',
    'pink',
    'white',
    'black',
    'yellow',

    ]

function makePalette() {
    for (let index = 0; index < PALETTE.length; index = index + 1) {
        const nextColor = PALETTE[index];
        let newButton = $('<button>' + nextColor + '</button>');
    
        console.log(newButton);
        newButton.css("background-color", nextColor);
    
    if (nextColor === 'black' || nextColor === 'blue' || nextColor === 'purple') {
        newButton.css('color', 'white');
        }
        $('.palette').append(newButton);
        $('.palette button').first().addClass('active');
            }
        }
        makePalette();

function makeGrid() {
    for (let i = 0; i < 64; i++) {
        let newDiv = $('<div class = "cell">');
        $('.grid').append(newDiv);
            }
        }
        makeGrid();

function onPaletteClick() {
    if('.palette button' != 'active') {
        $('.palette button').removeClass('active');
            }
        $(this).toggleClass('active');
        $('.palette button').click(onPaletteClick);
        }
        
        onPaletteClick();

function onGridClick() {
        const paletteColor = $('.palette .active').css('background-color');
        
        $(this).css('background-color', paletteColor);
        $('.cell').click(onGridClick);
        }
        
        onGridClick();

function onClearClick() {
        $('.grid .cell').css('background-color', "");
        $('.controls .clear').click(onClearClick);
        }

        onClearClick();

function onFillAllClick() {
        $('.controls .fill-all').click(onFillAllClick);
        const paletteColor = $('.palette .active').css('background-color');
        $('.grid .cell').css('background-color', paletteColor);
        }

        onFillAllClick();

function onFillEmptyClick() {
        let elements = $('.grid .cell')

        for (let index = 0; index < elements.length; index = index + 1) {
            let nextElement = $( elements[index] );
            
            if (nextElement.css('background-color') === 'rgba(0, 0, 0, 0)') {
                nextElement.css('background-color', $('.palette .active').css('background-color'));
                }
            }
        }
        $('.controls .fill-empty').click(onFillEmptyClick);
        onFillEmptyClick();