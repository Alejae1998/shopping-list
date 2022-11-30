export function renderList(list) {
    const div = document.createElement('div');
    const p = document.createElement('p');
    const h1 = document.createElement('h1');
    div.classList.add(list.complete ? 'complete' : 'incomplete');
    div.classList.add('list');
    p.textContent = list.item;
    h1.textContent = list.qty;
    div.append(p, h1);
    return div;
}
