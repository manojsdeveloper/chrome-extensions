// Load existing habits from storage
chrome.storage.sync.get({ habits: [] }, function(data) {
    const habitList = document.getElementById('habitList');
    data.habits.forEach(function(habit) {
      const li = document.createElement('li');
      li.textContent = habit;
      habitList.appendChild(li);
    });
  });
  
  // Add a new habit
  document.getElementById('addHabit').addEventListener('click', function() {
    const newHabitInput = document.getElementById('newHabit');
    const newHabit = newHabitInput.value.trim();
    if (newHabit !== '') {
      // Update the habit list
      const habitList = document.getElementById('habitList');
      const li = document.createElement('li');
      li.textContent = newHabit;
      habitList.appendChild(li);
  
      // Save the updated habits to storage
      chrome.storage.sync.get({ habits: [] }, function(data) {
        data.habits.push(newHabit);
        chrome.storage.sync.set({ habits: data.habits });
      });
  
      // Clear the input field
      newHabitInput.value = '';
    }
  });
  