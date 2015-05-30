(function(window) {
  window.chess = {
    var board = {
      file: ["a", "b", "c", "d", "e", "f", "g", "h"],
      rank: [1, 2, 3, 4, 5, 6, 7, 8]
    };
    var piece = function (filePlace, rankPlace) {
      this.file = board.file[filePlace - 1];
      this.rank = board.rank[rankPlace - 1];
      this.move = function (a, b) {
        this.file = board.file[a - 1];
        this.rank = board.rank[b - 1];
      };
    };

    var whiteRook1 = new piece(1, 1);
    var whiteRook2 = new piece(8, 1);
    var whiteKnight1 = new piece(2, 1);
    var whiteKnight2 = new piece(7, 1);
    var whiteBishop1 = new piece(3, 1);
    var whiteBishop2 = new piece(6, 1);
    var whiteQueen = new piece(4, 1);
    var whiteKing = new piece(5, 1);
    var whitePawn1 = new piece(1, 2);
    var whitePawn2 = new piece(2, 2);
    var whitePawn3 = new piece(3, 2);
    var whitePawn4 = new piece(4, 2);
    var whitePawn5 = new piece(5, 2);
    var whitePawn6 = new piece(6, 2);
    var whitePawn7 = new piece(7, 2);
    var whitePawn8 = new piece(8, 2);

    var blackRook1 = new piece(1, 8);
    var blackRook2 = new piece(8, 8);
    var blackKnight1 = new piece(2, 8);
    var blackKnight2 = new piece(7, 8);
    var blackBishop1 = new piece(3, 8);
    var blackBishop2 = new piece(6, 8);
    var blackQueen = new piece(4, 8);
    var blackKing = new piece(5, 8);
    var blackPawn1 = new piece(1, 7);
    var blackPawn2 = new piece(2, 7);
    var blackPawn3 = new piece(3, 7);
    var blackPawn4 = new piece(4, 7);
    var blackPawn5 = new piece(5, 7);
    var blackPawn6 = new piece(6, 7);
    var blackPawn7 = new piece(7, 7);
    var blackPawn8 = new piece(8, 7);

    blackPawn4.move(4, 4);

  };
})(window);
