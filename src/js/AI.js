import Play from "./Play"

export default class AI
{

  /**
   * Let AI play the game.
   *
   * @param int [board] board.
   * @since 1.0.0
   * @author Muhammad Umer Farooq
   *
   * @return array.
   */
  static play(board)
  {
    var tbl = document.getElementById("table")
    let move = AI.findBestMove(board)

    // if board is not read only, and moves left.
    if (Play.whoWin(board) == -1 && tbl.rows[move.x] !== undefined) {
      Play.mark(tbl.rows[move.x].cells[move.y], "green", 1)
      board[move.x][move.y] = 1
    }
    
    return board
  }

  /**
   * Minmax.
   *
   * @param int  [board] board.
   * @param bool isMax
   * 
   * @since 1.0.0
   * @author Muhammad Umer Farooq
   *
   * @return int.
   */
  static minMax(board, isMax)
  {
    let score = Play.whoWin(board)

    // if AI won.
    if (score == 1) return 1

    // if player won.
    if (score == 0) return -1

    // if game over
    if (Play.isGameOver(board)) return 0

    let best = -Infinity
    if (!isMax)
      best = Infinity

    for (let row = 0; row < board.length; row++) {
      for (let col = 0; col < board.length; col++) {
        if (board[row][col] == -1) {

          if (isMax) board[row][col] = 1
          else board[row][col] = 0
          
          if (isMax)
            best = Math.max(best, AI.minMax(board, !isMax))
          else
            best = Math.min(best, AI.minMax(board, !isMax))

          board[row][col] = -1
        }
      }
    }

      return best
  }

  /**
   * Utility function for minmax.
   *
   * @param int [board] board.
   * @since 1.0.0
   * @author Muhammad Umer Farooq
   *
   * @return object.
   */
  static findBestMove(board)
  {
    let bestVal = -Infinity
    let moves = {x: -1, y:-1}
    for (let row = 0; row < board.length; row++) {
      for (let col = 0; col < board.length; col++) {
        if (board[row][col] == -1) {
          board[row][col] = 1
          let moveVal = AI.minMax(board, false)
          board[row][col] = -1

          // if it's best move.
          if (moveVal > bestVal) {
            moves = {x: row, y: col}
            bestVal = moveVal
          }
        }
      }
    }

    return moves
  }
}
