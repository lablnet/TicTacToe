import AI from "./AI"
import Screen from "./Screen"

export default class Play
{

  /**
   * Constructor of class Play.
   *
   * @param int [board] board size.
   * @since 1.0.0
   * @author Muhammad Umer Farooq
   *
   * @return void.
   */
  constructor(board)
  {
    this.b = board
    this.arr = board.getBoard()
  }

  /**
   * Determine whether game over or not.
   *
   * @param int [board] board size.
   * @since 1.0.0
   * @author Muhammad Umer Farooq
   *
   * @return bool.
   */
  static isGameOver(board)
  {
    for (let row = 0; row < board.length; row++) {
      for (let col = 0; col < board.length; col++) {
        //If cell left it mean game is not over.
        if (board[row][col] == -1)
          return false
      }
    }

    return true
  }

  /**
   * Determine who won game.
   *
   * @param int [board] board size.
   * @since 1.0.0
   * @author Muhammad Umer Farooq
   *
   * @return int.
   */
  static whoWin(board)
  {
    //first check for rows
    for (let row = 0; row < board.length; row++) {
      if (board[row][0] == board[row][1] && board[row][1] == board[row][2]) {
        if (board[row][0] == 1)
          return 1
        else if (board[row][0] == 0)
          return 0
      }
    }

    //Now check for cols
    for (let col = 0; col < board.length; col++) {
      if (board[0][col] == board[1][col] && board[1][col] == board[2][col]) {
        if (board[0][col] == 1)
          return 1
        else if (board[0][col] == 0)
          return 0
      }
    }

    //Now check for Diagonals.
    if (board[0][0] == board[1][1] && board[1][1] == board[2][2]) {
      if (board[0][0] == 1)
        return 1
      else if (board[0][0] == 0)
          return 0
    }
    if (board[0][2] == board[1][1] && board[1][1] == board[2][0]) {
      if (board[0][2] == 1)
        return 1
      else if (board[0][2] == 0)
        return 0
    }

    //If none of this works it mean its tie.
    return -1
  }

  /**
   * Mark status on board.
   *
   * @param object [element] HTML table element.
   * @param string Color
   * @param int    turn 1 | 0
   * 
   * @since 1.0.0
   * @author Muhammad Umer Farooq
   *
   * @return bool.
   */
  static mark(element, color = "red", turn = 0)
  {
    //Disable clicking on default already clicked element.
    if (element.innerHTML == " ") {
      element.appendChild(document.createTextNode(turn))
      element.style.color = color
      element.className = "disallow"
    }

    return true
  }

  /**
   * Let's play game.
   *
   * @since 1.0.0
   * @author Muhammad Umer Farooq
   *
   * @return void.
   */
  play()
  {
    //Let's draw the board.
    this.b.board()
    var tbl = document.getElementById("table")
    let board = this.arr
    if (tbl != null) {

      // Iterate over table rows and cols.
      for (let row = 0; row < tbl.rows.length; row++) {
        for (let col = 0; col < tbl.rows[row].cells.length; col++) {
          //Get cllickd element and perform suitable action.
          tbl.rows[row].cells[col].onclick = function (){
            if (this.innerHTML == " ") {
              //Mark human turn.
              board[row][col] = 0
              Play.mark(this)
              //Let AI mark their turn
              board = AI.play(board)
              //If someone won OR game over.
              if (Play.whoWin(board) != -1 || Play.isGameOver(board)) {
                Screen.over(board)
                //Freeze the table
                tbl.style.pointerEvents = "none"  
                //throw new Error('Game over');
              }
            }
          };
        }
      }
    }
  }
}
