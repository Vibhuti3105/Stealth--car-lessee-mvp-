Built an prototype for a car leasing platform aimed at managing lease agreements



AI Prompt Documentation 

This document outlines the AI prompts used during the development of the Car Leasing Platform MVP, including the AI tools leveraged, the tasks assisted, and the impact on development efficiency and quality.
1. Prompt:
“Build a React component to display a lessee registration form with fields: Name, Email, Phone, Vehicle ID. Validate input.”
AI Tool Used: ChatGPT
Task: Frontend form component (LesseeForm.js)
Impact:
Speed: Saved ~2 hours of coding and validation logic
Quality: Improved UX with built-in validation and clean UI layout
Creativity: Suggested input patterns and responsive form structure
2. Prompt:
“How can I simulate lease payments per lessee and track payment history in React state?”
AI Tool Used: ChatGPT
Task: Simulated payment tracking logic in App.js
Impact:
Speed: Rapid implementation of payment tracking using timestamp arrays
Quality: Simplified monthly tracking using Date().getMonth()
Creativity: Introduced elegant filtering for overdue payments
3. Prompt:
“Create a dashboard summary in React showing total vehicles, leased vehicles, total payments collected, expected payments, and overdue lessees.”
AI Tool Used: ChatGPT
Task: Dashboard UI and data computation
Impact:
Speed: Cut design time by 50%
Quality: Clean grid layout for KPIs
Creativity: AI suggested pie charts for better visual appeal

4. Prompt:
“How to assign lease rates per vehicle type and calculate remaining balance per lessee?”
AI Tool Used: ChatGPT
Task: Lease rate structure and balance logic
Impact:
Speed: Reduced complexity using a leaseRates map
Quality: Correct monthly balance logic based on missed payments
Creativity: Auto-calculated missed months with helpful color-coded feedback


5. Prompt:
“Style a PieChart component with segments and colors showing Leasing Status, Payment Status, and Overdue Status.”
AI Tool Used: ChatGPT
Task: PieChart data preparation and styling
Impact:
Speed: Enabled visual analytics with minimal config
Quality: Clear color-coding and titles improved dashboard clarity
Creativity: Suggested splitting financials into 3 segments for clearer insights


6. Prompt:
“Fix React error: Objects are not valid as a React child (e.g., displaying a leaseRates object directly).”
AI Tool Used: ChatGPT
Task: Debugging
Impact:
Speed: Immediate fix suggestion (render object keys as a list)
Quality: Cleaner code and better user feedback
Creativity: Showed how to display rate info next to each car dynamically

7. Prompt:
“Show full payment history per lessee in a clean expandable layout.”
AI Tool Used: ChatGPT
Task: UX improvement for payment records
Impact:
Speed: Quick implementation of collapsible history
Quality: Users can see all transactions without cluttering UI
Creativity: Suggested expandable ul/li pattern for readability


8. Prompt:
“Make PieCharts appear side-by-side and responsive for different screen sizes.”
AI Tool Used: ChatGPT
Task: Frontend layout fix
Impact:
Speed: Saved design iteration cycles
Quality: Polished UI on both desktop and mobile
Creativity: Used flex-wrap: nowrap and scrollable container for overflow control








Success Metrics

North Star Metric:
Active Leases per Month
This metric captures the total number of active vehicle leases in a given month. It reflects the core value your product provides—helping lease managers efficiently lease and manage vehicles.

 Supporting Metrics:

Lease Payment Collection Rate
 Definition: Ratio of collected payments to total expected lease payments.
 Why it matters: Indicates platform reliability in managing payments and financial  
             performance.


Overdue Lessee Count
 Definition: Number of lessees with unpaid dues past the current billing cycle.
 Why it matters: Helps measure system effectiveness in reminding and managing  delinquent payments.


Vehicle Utilization Rate
 Definition: Percentage of leased vehicles out of the total vehicle inventory.
 Why it matters: Tracks how well the platform is used to allocate fleet resources.


Average Payment Time
 Definition: Average time between lease date and first/last payment.
 Why it matters: Helps understand lessee behavior and optimize payment reminders.


Monthly New Lessee Registrations
 Definition: Number of new lessees added per month.
 Why it matters: Indicates platform adoption and market growth.
