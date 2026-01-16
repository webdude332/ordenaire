// // import React, { ReactNode } from 'react';

// // interface StatCardProps {
// //   title: string;
// //   value: ReactNode;
// //   trend?: string;
// //   trendType?: 'positive' | 'negative';
// //   trendIcon?: string; 
// // }

// // const StatCard = ({ 
// //   title, 
// //   value, 
// //   trend, 
// //   trendType = 'positive', 
// //   trendIcon = '' 
// // }: StatCardProps) => {
  
// //   const isPositive = trendType === 'positive';
  
// //   return (
// //     <div className="bg-white px-6 py-1 transition-shadow">
// //       {/* Title */}
// //       <p className="text-sm text-gray-600 font-medium mb-1">
// //         {title}
// //       </p>
      
// //       {/* Value */}
// //       <div className="text-xl font-medium text-gray-900 mb-1">
// //         {value}
// //       </div>
      
// //       {/* Trend */}
// //       {trend && (
// //         <div className="flex items-center gap-1.5">
// //           <span className="text-xs text-gray-500 font-medium">Trend</span>
          
// //           {/* 2. REPLACED SVGs WITH IMG TAG */}
// //           {trendIcon ? (
// //             <img 
// //               src={trendIcon} 
// //               alt="trend icon" 
// //               className="w-3.5 h-3.5 flex-shrink-0 object-contain" 
// //             />
// //           ) : (
// //             /* Optional: Keep SVG as fallback if no icon provided */
// //             <svg 
// //               width="14" 
// //               height="14" 
// //               viewBox="0 0 24 24" 
// //               fill="none" 
// //               stroke={isPositive ? "#10B981" : "#EF4444"} 
// //               strokeWidth="3" 
// //               strokeLinecap="round" 
// //               strokeLinejoin="round"
// //               className="flex-shrink-0"
// //             >
// //               {isPositive 
// //                 ? <path d="M7 17L17 7M17 17V7H7"/> 
// //                 : <path d="M7 7L17 17M7 7h10v10"/>
// //               }
// //             </svg>
// //           )}
          
// //           {/* Trend Value */}
// //           <span className={`text-sm font-semibold ${isPositive ? 'text-green-600' : 'text-red-500'}`}>
// //             {trend}
// //           </span>
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default StatCard;



// import React, { ReactNode } from 'react';

// interface StatCardProps {
//   title: ReactNode; // ✅ changed
//   value: ReactNode;
//   trend?: string;
//   trendType?: 'positive' | 'negative';
//   trendIcon?: string;
// }

// const StatCard = ({
//   title,
//   value,
//   trend,
//   trendType = 'positive',
//   trendIcon = '',
// }: StatCardProps) => {
//   const isPositive = trendType === 'positive';

//   return (
//     <div className="bg-white px-6 py-1 transition-shadow">
//       {/* Title */}
//       <p className="text-sm text-gray-600 font-medium mb-1">
//         {title}
//       </p>

//       {/* Value */}
//       <div className="text-xl font-medium text-gray-900 mb-1">
//         {value}
//       </div>

//       {/* Trend */}
//       {trend && (
//         <div className="flex items-center gap-1.5">
//           <span className="text-xs text-gray-500 font-medium">Trend</span>

//           {trendIcon ? (
//             <img
//               src={trendIcon}
//               alt="trend icon"
//               className="w-3.5 h-3.5 flex-shrink-0 object-contain"
//             />
//           ) : (
//             <svg
//               width="14"
//               height="14"
//               viewBox="0 0 24 24"
//               fill="none"
//               stroke={isPositive ? '#10B981' : '#EF4444'}
//               strokeWidth="3"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               className="flex-shrink-0"
//             >
//               {isPositive ? (
//                 <path d="M7 17L17 7M17 17V7H7" />
//               ) : (
//                 <path d="M7 7L17 17M7 7h10v10" />
//               )}
//             </svg>
//           )}

//           <span
//             className={`text-sm font-semibold ${
//               isPositive ? 'text-green-600' : 'text-red-500'
//             }`}
//           >
//             {trend}
//           </span>
//         </div>
//       )}
//     </div>
//   );
// };

// export default StatCard;







import React, { ReactNode } from 'react';

interface StatCardProps {
  title: ReactNode;
  value: ReactNode;
  trendType?: 'positive' | 'negative';
}

const BusinessPlan = ({
  title,
  value,
  trendType,
}: StatCardProps) => {
  return (
    <div className="bg-white px-6 py-1 transition-shadow">
      {/* Title */}
      <p className="text-sm text-gray-600 font-medium mb-1">
        {title}
      </p>

      {/* Value */}
      <div className="text-xl font-medium text-gray-900 mb-1">
        {value}
      </div>

      {/* Status badge (Auto Renew) */}
      {trendType && (
        <div className="mt-1">
          <span
            className={`inline-flex items-center rounded-md px-2 py-0.5 text-xs font-medium ${
              trendType === 'positive'
                ? 'bg-green-50 text-green-700 border border-green-200'
                : 'bg-red-50 text-red-600 border border-red-200'
            }`}
          >
            {trendType === 'positive' ? 'Enabled' : 'Disabled'}
          </span>
        </div>
      )}
    </div>
  );
};

export default BusinessPlan;
