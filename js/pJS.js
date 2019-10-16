$("document").ready(function () {

// Defining the game board and replay button
    const $cell = $(".cell");
    const $replay = $('.reset');


    // const hover = function(){
    //     $cell.hover.text("");
    // }
    // this function to check each winning condition by checking the added class
    const winner = function (player) {
        
        if ($("#c1").hasClass(player) && $("#c2").hasClass(player) && $("#c3").hasClass(player)) {
            return true;
        } else if ($("#c4").hasClass(player) && $("#c5").hasClass(player) && $("#c6").hasClass(player)) {
            return true;
        } else if ($("#c7").hasClass(player) && $("#c8").hasClass(player) && $("#c9").hasClass(player)) {
            return true;
        } 
        else if ($("#c1").hasClass(player) && $("#c4").hasClass(player) && $("#c7").hasClass(player)) {
            return true;
        } else if ($("#c2").hasClass(player) && $("#c5").hasClass(player) && $("#c8").hasClass(player)) {
            return true;
        } else if ($("#c3").hasClass(player) && $("#c6").hasClass(player) && $("#c9").hasClass(player)) {
            return true;
        }
        else if ($("#c1").hasClass(player) && $("#c5").hasClass(player) && $("#c9").hasClass(player)) {
            return true;
        } else if ($("#c3").hasClass(player) && $("#c5").hasClass(player) && $("#c7").hasClass(player)) {
            return true; 
        }
        // once we use each cell but no one wins
        else if($cell.text().length == 9){
            Swal.fire({
                type: 'error',
                title: 'What a competition',
                text: 'The game ends with a tie',
            })
            playerTurn = !true;
            reset();      
        } 
        else {
            return false;
        }
    };
    // give each player one turn
    let playerTurn = true; 
    // once we click on specific cell we give it the turn condition (if X or O)
    //turn condition includes the text and class inside the cell 
    const play = function () {
        if (playerTurn) {
            $(this).text('X');
            $(this).addClass('xPlayer');
            $(this).mouseEnter()
            $(this).unbind();
            if(winner('xPlayer')){
                setTimeout (()=>{
                    Swal.fire({
                        type: 'success',
                        title: 'Congrats',
                        text: 'Player X is the winner',
                    })
                    reset();
                    return null;
                },400)
                    $cell.unbind();
                }
        } else {
            $(this).text("O");
            $(this).addClass('oPlayer');
            $(this).unbind();
            if (winner('oPlayer')){
                setTimeout (()=>{
                Swal.fire({
                    type: 'success',
                    title: 'Congrats',
                    text: 'Player O is the winner',
                })
                 reset();
                    return null;
                },400)
                $cell.unbind();
                    }
    }
        playerTurn = !playerTurn; // switch player turn 

        
    }
    // we use function to restart the game.
    const reset = function(){
     $cell.unbind()
     $('#c1').text("");$("#c1").removeClass('oPlayer');$("#c1").removeClass('xPlayer'); $('#c1').addClass('cell');
     $('#c2').text("");$("#c2").removeClass('oPlayer');$("#c2").removeClass('xPlayer'); $('#c2').addClass('cell');
     $('#c3').text("");$("#c3").removeClass('oPlayer');$("#c3").removeClass('xPlayer'); $('#c3').addClass('cell');
     $('#c4').text("");$("#c4").removeClass('oPlayer');$("#c4").removeClass('xPlayer'); $('#c4').addClass('cell');
     $('#c5').text("");$("#c5").removeClass('oPlayer');$("#c5").removeClass('xPlayer'); $('#c5').addClass('cell');
     $('#c6').text("");$("#c6").removeClass('oPlayer');$("#c6").removeClass('xPlayer'); $('#c6').addClass('cell');
     $('#c7').text("");$("#c7").removeClass('oPlayer');$("#c7").removeClass('xPlayer'); $('#c7').addClass('cell');
     $('#c8').text("");$("#c8").removeClass('oPlayer');$("#c8").removeClass('xPlayer'); $('#c8').addClass('cell');
     $('#c9').text("");$("#c9").removeClass('oPlayer');$("#c9").removeClass('xPlayer'); $('#c9').addClass('cell');
     $cell.click(play);
     playerTurn = true;
    
    }

$replay.click(reset);
$cell.click(play);
});