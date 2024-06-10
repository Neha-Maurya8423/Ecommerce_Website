// Initialize empty arrays for storing data
let labels = [];
let fiatData = [];
let cryptoData = [];

// Function to add data to the graph
function addData() {
  const fiatInput = document.getElementById('fiatInput').value;
  const cryptoInput = document.getElementById('cryptoInput').value;
  const currentDate = new Date();
  const time = `${currentDate.getHours()}:${currentDate.getMinutes()}:${currentDate.getSeconds()}`;
  
  // Add new data to arrays
  labels.push(time);
  fiatData.push(fiatInput);
  cryptoData.push(cryptoInput);

  // Update the chart
  updateChart();
}

// Function to update the chart
function updateChart() {
  const ctx = document.getElementById('coinChart').getContext('2d');

  // Create the chart
  const myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: labels,
      datasets: [{
        label: 'Fiat Amount (USD)',
        data: fiatData,
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1
      },
      {
        label: 'Cryptocurrency Amount',
        data: cryptoData,
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
}
