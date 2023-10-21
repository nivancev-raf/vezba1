function storeDropdownOptions(id, storageKey) {
    const dropdown = document.getElementById(id);
    if (!dropdown) return; // In case the dropdown doesn't exist on the page

    const allOptions = Array.from(dropdown.options).map(option => option.textContent);
    localStorage.setItem(storageKey, JSON.stringify(allOptions));
}

// List of dropdown IDs and corresponding localStorage keys
const dropdowns = [
    {id: 'spisak-pizza', key: 'allPizzas'},
    {id: 'spisak-pasta', key: 'allPastas'},
    {id: 'spisak-salata', key: 'allSalads'},
    {id: 'spisak-riba', key: 'allFish'},
    {id: 'spisak-rostilj', key: 'allGrill'}
];

dropdowns.forEach(dropdown => {
    storeDropdownOptions(dropdown.id, dropdown.key);
});
