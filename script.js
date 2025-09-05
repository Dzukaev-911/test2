document.addEventListener('DOMContentLoaded', function () {
    const searchButton = document.querySelector('.search-button');
    const searchInput = document.querySelector('.search-input');

    searchButton.addEventListener('click', function () {
        if (searchInput.value.trim() !== '') {
            alert('Поиск товара: ' + searchInput.value);
            searchInput.value = '';
        }
    });

    searchInput.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            if (searchInput.value.trim() !== '') {
                alert('Поиск товара: ' + searchInput.value);
                searchInput.value = '';
            }
        }
    });
});