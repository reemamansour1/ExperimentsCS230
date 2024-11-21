const containers = document.querySelectorAll('.elements');
const counters = document.querySelectorAll('.counter');

containers.forEach(container => {
    container.addEventListener('dragover', (event) => {
        event.preventDefault();
        console.log("Drag over");
    });

    container.addEventListener('drop', (event) => {
        event.preventDefault();
        console.log("Drop");
        const draggedElement = document.querySelector('.dragging');
        if (draggedElement && container.children.length < 10) {
            container.appendChild(draggedElement);
            updateCounters();
        } else {
            alert("No more elements can be moved into this container.");
        }
    });
});

document.querySelectorAll('.element').forEach(element => {
    element.addEventListener('dragstart', () => {
        element.classList.add('dragging');
    });

    element.addEventListener('dragend', () => {
        element.classList.remove('dragging');
    });
});

function updateCounters() {
    containers.forEach(container => {
        const count = container.children.length;
        const counter = container.previousElementSibling.querySelector('.counter');
        counter.textContent = count;
    });
}
