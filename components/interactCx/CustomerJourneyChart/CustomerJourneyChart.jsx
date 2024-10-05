import React from 'react';
import './styles.scss';

const CustomerJourneyChart = () => {
    const metrics = [
        { name: 'Customer satisfaction', value: 56, color: '#8a2be2' },
        { name: 'Customer loyalty', value: 55, color: '#dc7b62' },
        { name: 'Customer retention', value: 54, color: '#8a2be2' },
        { name: 'Revenue increase', value: 54, color: '#dc7b62' },
        { name: 'Profitability', value: 51, color: '#8a2be2' },
        { name: 'New customer acquisition', value: 51, color: '#dc7b62' },
        { name: 'Revenue per customer', value: 47, color: '#8a2be2' },
        { name: 'Brand recognition', value: 45, color: '#dc7b62' },
        { name: 'Customer acquisition costs', value: 44, color: '#8a2be2' },
        { name: 'Website visits', value: 43, color: '#dc7b62' },
        { name: 'Lifetime value of customer', value: 38, color: '#8a2be2' },
        { name: 'Social media mentions/brand ambassadors', value: 38, color: '#dc7b62' },
        { name: 'Conversion rates', value: 36, color: '#8a2be2' },
        { name: 'Customer churn', value: 31, color: '#dc7b62' },
    ];

    return (
        <div className="customer-journey-chart">
            <div className="chart-content">
                {metrics.map((metric, index) => (
                    <div key={index} className="metric-item"
                        style={{
                            '--value': metric.value,
                            '--color': metric.color,
                            '--index': index,
                        }}
                    >
                        <div className="metric-bar">
                            <span className="metric-value">{metric.value}%</span>
                        </div>
                        <span className="metric-name">{metric.name}</span>
                    </div>
                ))}
            </div>
            <div className="chart-description">
                <p>
                    According to Forbes research, customer journey traverses multiple touchpoints,
                    from a consumer's smartphone to a company's corporate websites, as it is said that
                    its customers connect with the company across multiple platforms, they focus on
                    creating "sessions" around each touchpoint that use consistent and relevant
                    messaging which reflects a customer's buying journey.
                </p>
            </div>
        </div>
    );
};

export default CustomerJourneyChart;