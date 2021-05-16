export default class Board {

  /**
   * Constructor of class Board.
   *
   * @param int [n] board size.
   * @since 1.0.0
   * @author Muhammad Umer Farooq
   *
   * @return void.
   */
  constructor(n) {
    //size of board
    if (n == 3)
      this.size = n
  else
      throw "The board size should be equal to 3."
  }

  /**
   * Get array of size*size.
   *
   * @since 1.0.0
   * @author Muhammad Umer Farooq
   *
   * @return array.
   */
  getBoard()
  {
    //Generate Raw board
    let arr = []
    for  (let row = 1; row <= this.size; row++) {
      arr.push([-1, -1, -1]);
    }

    return arr
  }

  /**
   * Create and Prepend HTML table.
   *
   * @since 1.0.0
   * @author Muhammad Umer Farooq
   *
   * @return void.
   */
  draw()
  {
    //Generate HTML table size*size
    var board = document.getElementsByClassName('board')[0]
    var tbl = document.createElement('table')
    tbl.className = "table table-responsive"
    tbl.setAttribute('id', 'table');
    //tbl.setAttribute('border', 1)
    var tbdy = document.createElement('tbody')
    for (let row = 1; row <= this.size; row++) {
      var tr = document.createElement('tr')
      for (let col = 1; col <= this.size; col++) {
        var td = document.createElement('td')
        td.appendChild(document.createTextNode(' '))
        td.setAttribute('value', row + "" + col)
        td.setAttribute("turn", -1);
        td.setAttribute("disable", false)
        tr.appendChild(td)
      }
      tbdy.appendChild(tr)
    }
    tbl.appendChild(tbdy)
    //prepend to body.
    board.insertBefore(tbl, board.firstChild)
  }
}
