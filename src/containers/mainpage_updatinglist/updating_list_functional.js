export function openContent(tab, index) {
    let lists = document.getElementsByClassName("updating-list");
    
    //clear previous displayed content
    for (let i = 0; i < lists.length; i++) {
        lists[i].style.display = "none";
    }
    let tablinks = document.getElementsByClassName("tabs__updating-list_head");
    for (let i = 0; i < tablinks.length; i++) {
      tablinks[i].style.backgroundColor = "";
    }
  
    lists[index].style.display = "block";
    tab.style.backgroundColor = "rgb(37, 37, 37)";
}

export function displayDefault(){
    document.getElementById("tabs__updating-list_default-open").click();
}
  