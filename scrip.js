document.getElementById('add-fact-btn').addEventListener('click', function() {
    const newFact = prompt('Enter a new fun fact about you:');
    if (newFact) {
        const li = document.createElement('li');
        li.textContent = newFact;
        document.getElementById('fun-facts-list').appendChild(li);
    }
});
