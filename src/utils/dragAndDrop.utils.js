export function allowDrop(ev) {
    ev.preventDefault();
}
export function setTransferData(ev, data) {
    ev.dataTransfer.dropEffect = "move";
    ev.dataTransfer.setData("text/plain", data)
}

export function getTransferData(ev) {
    return ev.dataTransfer.getData("text/plain");
}