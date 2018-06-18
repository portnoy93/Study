var indexManager = new IndexManager();

indexManager.setLength(10);

function onIndexChange(event){
    console.log(event);
}

indexManager.addEventListener("change", onIndexChange);

indexManager.next();
