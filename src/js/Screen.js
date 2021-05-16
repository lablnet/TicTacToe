import Board from "./Board"
import Play from "./Play"

export default class Screen extends Board
{

  /**
   * Constructor of class Screen.
   *
   * @param int [n] board size.
   * @since 1.0.0
   * @author Muhammad Umer Farooq
   *
   * @return bool.
   */
  constructor(n = 3)
  {
    super(n)
  }

  /**
   * Show splash screen.
   *
   * @todo
   * @author Muhammad Umer Farooq
   *
   * @return bool.
   */
  splash()
  {
    //todo
  }

  /**
   * Draw board.
   *
   * @since 1.0.0
   * @author Muhammad Umer Farooq
   *
   * @return void.
   */
  board()
  {
    this.draw();
  }

  /**
   * Show game over screen.
   *
   * @param int [board] board.
   * @since 1.0.0
   * @author Muhammad Umer Farooq
   *
   * @return void.
   */
  static over(board)
  {
    let who = Play.whoWin(board)
    let status = document.getElementsByClassName("status")[0]
    let h3 = document.createElement('h3')
    if (who == 1)
      h3.innerHTML = "You Lose!"
    else if (who == 0)
      h3.innerHTML = "You Won!"
    else
      h3.innerHTML = "Tie!"

    //Freeze the pointer event
    //body.style.pointerEvents = "none"
    status.insertBefore(h3, status.firstChild)
  }
}
