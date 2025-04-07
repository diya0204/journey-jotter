import React from 'react';

function BudgetSummary({ trip }) {
  const { budgetDetails, userSelection, tripData } = trip || {};
  
  if (!budgetDetails) return null;

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount);
  };

  const getBudgetStatus = () => {
    const difference = budgetDetails.budgetDifference;
    if (difference > 0) {
      return {
        text: 'Over Budget',
        color: 'text-red-600',
        bgColor: 'bg-red-100'
      };
    } else if (difference < 0) {
      return {
        text: 'Under Budget',
        color: 'text-green-600',
        bgColor: 'bg-green-100'
      };
    }
    return {
      text: 'On Budget',
      color: 'text-blue-600',
      bgColor: 'bg-blue-100'
    };
  };

  const budgetStatus = getBudgetStatus();

  return (
    <div className="mt-8 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6">💰 Budget Summary</h2>
      
      <div className="grid md:grid-cols-2 gap-6">
        {/* Budget Overview */}
        <div className="space-y-4">
          <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
            <span className="font-medium">Total Budget:</span>
            <span className="text-lg">{formatCurrency(budgetDetails.userBudget)}</span>
          </div>
          
          <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
            <span className="font-medium">Estimated Cost:</span>
            <span className="text-lg">{formatCurrency(budgetDetails.estimatedTotalCost)}</span>
          </div>
          
          <div className={`flex justify-between items-center p-4 ${budgetStatus.bgColor} rounded-lg`}>
            <span className="font-medium">Status:</span>
            <span className={`text-lg font-semibold ${budgetStatus.color}`}>
              {budgetStatus.text}
            </span>
          </div>
        </div>

        {/* Daily Breakdown */}
        <div className="space-y-4">
          <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
            <span className="font-medium">Daily Budget:</span>
            <span className="text-lg">{formatCurrency(budgetDetails.perDayBudget)}</span>
          </div>
          
          <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
            <span className="font-medium">Daily Estimated:</span>
            <span className="text-lg">{formatCurrency(budgetDetails.perDayEstimated)}</span>
          </div>

          <div className="p-4 bg-gray-50 rounded-lg">
            <div className="font-medium mb-2">Per Person:</div>
            <div className="text-sm space-y-1">
              <div className="flex justify-between">
                <span>💰 Total Budget</span>
                <span>{formatCurrency(budgetDetails.perPersonBudget)}</span>
              </div>
              <div className="flex justify-between">
                <span>📅 Per Day</span>
                <span>{formatCurrency(budgetDetails.perDayBudget / userSelection.peopleCount)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BudgetSummary;







