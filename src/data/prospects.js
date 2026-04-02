export const PROSPECT_SCENARIOS = [
  {
    name: "Scenario 1: Low-Risk Commuter",
    data: { vehicleValue: 45000, usage: 'private', creditScore: 850 },
    expected: "GREEN"
  },
  {
    name: "Scenario 2: Mid-Range SUV",
    data: { vehicleValue: 120000, usage: 'private', creditScore: 780 },
    expected: "GREEN"
  },
  {
    name: "Scenario 3: Luxury Executive (Yellow Flag)",
    data: { vehicleValue: 220000, usage: 'private', creditScore: 700 },
    expected: "YELLOW"
  },
  {
    name: "Scenario 4: High-Value Supercar (Red Flag)",
    data: { vehicleValue: 450000, usage: 'private', creditScore: 650 },
    expected: "RED"
  },
  {
    name: "Scenario 5: Commercial Van",
    data: { vehicleValue: 180000, usage: 'commercial', creditScore: 600 },
    expected: "YELLOW"
  }
];