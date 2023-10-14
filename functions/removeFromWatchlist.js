export const removeFromWatchlist = (id) => {
  if (window.confirm("Are you sure you want to remove this coin")) {
    let items = localStorage.getItem("watchlist");
    let arr = JSON.parse(items);
    localStorage.setItem(
      "watchlist",
      JSON.stringify(arr.filter((item) => item != id))
    );
  } else {
    console.log("Couldnt remove the coin from the watchlist!");
  }
};
