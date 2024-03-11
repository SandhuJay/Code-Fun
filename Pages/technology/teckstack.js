// Sample data for bar chart representing programming languages
const programmingLangBarData = {
    labels: ['JavaScript', 'Python', 'Java', 'C#', 'C++', 'PHP', 'TypeScript', 'Ruby', 'Swift', 'Go'],
    datasets: [{
      label: 'Popularity',
      data: [75, 60, 50, 45, 40, 35, 30, 25, 20, 15], // Sample data (out of 100)
      backgroundColor: [
        '#FF6384',
        '#36A2EB',
        '#FFCE56',
        '#8e5ea2',
        '#3cba9f',
        '#e8c3b9',
        '#c45850',
        '#cd853f',
        '#8b4513',
        '#2e8b57'
      ],
      borderColor: [
        '#FF6384',
        '#36A2EB',
        '#FFCE56',
        '#8e5ea2',
        '#3cba9f',
        '#e8c3b9',
        '#c45850',
        '#cd853f',
        '#8b4513',
        '#2e8b57'
      ],
      borderWidth: 1
    }]
  };
  
  // Sample data for pie chart representing web development tech stacks
  const webTechPieData = {
    labels: ['React.js', 'Angular', 'Vue.js', 'Next.js', 'HTML', 'CSS', 'JavaScript', 'Node.js', 'Express.js', 'TypeScript'],
    datasets: [{
      label: 'Usage Distribution',
      data: [20, 15, 12, 10, 8, 8, 7, 6, 5, 5], // Sample percentages (summing up to 100)
      backgroundColor: [
        '#FF6384',
        '#36A2EB',
        '#FFCE56',
        '#8e5ea2',
        '#3cba9f',
        '#e8c3b9',
        '#c45850',
        '#cd853f',
        '#8b4513',
        '#2e8b57'
      ],
      hoverBackgroundColor: [
        '#FF6384',
        '#36A2EB',
        '#FFCE56',
        '#8e5ea2',
        '#3cba9f',
        '#e8c3b9',
        '#c45850',
        '#cd853f',
        '#8b4513',
        '#2e8b57'
      ]
    }]
  };
  
  // Sample data for line graph representing designing tools
  const designingToolsLineData = {
    labels: ['Figma', 'Canva', 'Adobe XD', 'Sketch', 'InVision', 'Adobe Photoshop', 'Adobe Illustrator', 'Zeplin', 'SketchBook', 'Proto.io'],
    datasets: [{
      label: 'User Satisfaction',
      data: [90, 85, 80, 75, 70, 65, 60, 55, 50, 45], // Sample ratings (out of 100)
      borderColor: '#36A2EB',
      borderWidth: 2,
      fill: false
    }]
  };
  
  // Function to generate bar chart for programming languages
  function generateProgrammingLangBarChart() {
    const ctxBar = document.getElementById('programmingLangBarChart').getContext('2d');
    const barChart = new Chart(ctxBar, {
      type: 'bar',
      data: programmingLangBarData,
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }
  
  // Function to generate pie chart for web development tech stacks
  function generateWebTechPieChart() {
    const ctxPie = document.getElementById('webTechPieChart').getContext('2d');
    const pieChart = new Chart(ctxPie, {
      type: 'pie',
      data: webTechPieData,
      options: {
        responsive: true
      }
    });
  }
  
  // Function to generate line graph for designing tools
  function generateDesigningToolsLineGraph() {
    const ctxLine = document.getElementById('designingToolsLineGraph').getContext('2d');
    const lineGraph = new Chart(ctxLine, {
      type: 'line',
      data: designingToolsLineData,
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }
  
  // Call functions to generate charts
  generateProgrammingLangBarChart();
  generateWebTechPieChart();
  generateDesigningToolsLineGraph();
  