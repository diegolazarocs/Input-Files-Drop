const label = document.querySelector("label");

function onEnter() {
  label.classList.add("active");
}
function onLeave() {
  label.classList.remove("active");
}
label.addEventListener("dragenter", onEnter);
label.addEventListener("drop", onLeave);
label.addEventListener("dragend", onLeave);
label.addEventListener("dragleave", onLeave);

const input = document.querySelector("input");
const dropZone = document.querySelector("#drop-zone");

input.addEventListener("change", (event) => {
  if (input.files.length > 0) {
    const type = input.files[0].type;
    const formarts = ["image/jpeg", "image/png", "image/jpg"];
    if (!formarts.includes(type)) {
      alert("Esse formato não é permitido!");
      return;
    }
    
    if (document.querySelector("#cover")) {
      dropZone.removeChild(document.querySelector("#cover"));
    }

    const img = document.createElement("img");
    img.id = "cover";
    img.src = URL.createObjectURL(input.files[0]);

    dropZone.appendChild(img);
  }
});
