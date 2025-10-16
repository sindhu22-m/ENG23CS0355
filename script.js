function startGame(gameName) {
    alert(`Starting ${gameName}!`);
    if (gameName === 'tictactoe') {
      window.location.href = 'tictactoe.html';
    }
    else if (gameName === 'snake') {
      window.location.href = 'Snake.html';
    }
    else if (gameName === 'whackAMole') {
      window.location.href = 'Whack_mole.html';
    }
    else if (gameName === 'maze') {
      window.location.href = 'maze.html';
    }
    else if (gameName === 'crossRoad') {
      window.location.href = 'crosstheroad.html';
    }
}
function logout() {
  sessionStorage.removeItem("loggedIn"); // Clear login status
  window.location.href = "login.html"; // Redirect to login page
}

  