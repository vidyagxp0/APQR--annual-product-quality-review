// import React, { useState } from "react";
// import Header from "../Component/Header";
// import BottomHeader from "../Component/BottomHeader";

// export default function Notification() {
//   const [notifications, setNotifications] = useState([
//     {
//       id: 1,
//       type: "success",
//       message: "APQR report successfully generated.",
//       date: "2024-09-01",
//       time: "10:30 AM",
//     },
//     {
//       id: 2,
//       type: "warning",
//       message: "Deviation detected in product PQR2024-005.",
//       date: "2024-09-02",
//       time: "02:15 PM",
//     },
//     {
//       id: 3,
//       type: "error",
//       message: "Failed to fetch product data for review.",
//       date: "2024-09-03",
//       time: "11:45 AM",
//     },
//     {
//       id: 4,
//       type: "info",
//       message: "A new CAPA has been initiated for PQR2024-003.",
//       date: "2024-09-03",
//       time: "03:10 PM",
//     },
//     {
//       id: 5,
//       type: "success",
//       message: "Change control approved for product PQR2024-007.",
//       date: "2024-09-04",
//       time: "09:00 AM",
//     },
//     {
//       id: 6,
//       type: "warning",
//       message: "OOS initiated for product PQR2024-009.",
//       date: "2024-09-04",
//       time: "01:30 PM",
//     },
//     {
//       id: 7,
//       type: "error",
//       message: "System error while generating the report.",
//       date: "2024-09-05",
//       time: "04:45 PM",
//     },
//     {
//       id: 8,
//       type: "info",
//       message: "New variation filing submitted for product PQR2024-010.",
//       date: "2024-09-06",
//       time: "08:20 AM",
//     },
//     {
//       id: 9,
//       type: "success",
//       message: "Registration notification successfully completed.",
//       date: "2024-09-06",
//       time: "11:15 AM",
//     },
//     {
//       id: 10,
//       type: "warning",
//       message: "Change control pending approval for PQR2024-008.",
//       date: "2024-09-07",
//       time: "01:00 PM",
//     },
//     {
//       id: 11,
//       type: "error",
//       message: "Failed to submit recall data for product PQR2024-006.",
//       date: "2024-09-07",
//       time: "03:30 PM",
//     },
//     {
//       id: 12,
//       type: "info",
//       message: "CAPA successfully closed for product PQR2024-002.",
//       date: "2024-09-08",
//       time: "10:00 AM",
//     },
//     {
//       id: 13,
//       type: "success",
//       message: "Deviation successfully resolved for PQR2024-001.",
//       date: "2024-09-08",
//       time: "12:30 PM",
//     },
//     {
//       id: 14,
//       type: "warning",
//       message: "APQR review overdue for product PQR2024-004.",
//       date: "2024-09-09",
//       time: "09:45 AM",
//     },
//     {
//       id: 15,
//       type: "error",
//       message: "OOS issue identified in batch #B90234.",
//       date: "2024-09-09",
//       time: "02:00 PM",
//     },
//     {
//       id: 16,
//       type: "info",
//       message: "New batch of data added for PQR2024-011.",
//       date: "2024-09-09",
//       time: "04:15 PM",
//     },
//   ]);

//   const getAlertStyle = (type) => {
//     switch (type) {
//       case "success":
//         return "bg-green-100 text-green-700 border-green-400";
//       case "warning":
//         return "bg-yellow-100 text-yellow-700 border-yellow-400";
//       case "error":
//         return "bg-red-100 text-red-700 border-red-400";
//       case "info":
//         return "bg-blue-100 text-blue-700 border-blue-400";
//       default:
//         return "";
//     }
//   };

//   const addNotification = () => {
//     const types = ["success", "warning", "error", "info"];
//     const newNotification = {
//       id: notifications.length + 1,
//       type: types[Math.floor(Math.random() * types.length)],
//       message: "This is a new random notification.",
//       date: new Date().toISOString().split("T")[0],
//       time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
//     };
//     setNotifications([newNotification, ...notifications]);
//   };

//   return (
//     <>
//       <Header />
//       <BottomHeader />
//       <div className="container mx-auto mt-8 p-4">
//         {/* Button to add new notification */}
//         <div className="flex justify-end mb-4">
//           <button
//             onClick={addNotification}
//             className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow-lg"
//           >
//             Send Notification
//           </button>
//         </div>

//         {/* Notification List */}
//         {notifications.length === 0 ? (
//           <div className="text-center text-gray-500 mt-12">
//             <p className="text-2xl">No notifications</p>
//           </div>
//         ) : (
//           <div className="space-y-4">
//             {notifications.map((notification) => (
//               <div
//                 key={notification.id}
//                 className={`border-l-4 p-4 ${getAlertStyle(
//                   notification.type
//                 )} rounded-lg shadow-md`}
//               >
//                 <p className="font-semibold">{notification.message}</p>
//                 <div className="text-sm text-gray-500 mt-1">
//                   {notification.date} at {notification.time}
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </>
//   );
// }

import React, { useState } from "react";
import Header from "../Component/Header";
import BottomHeader from "../Component/BottomHeader";

export default function Notification() {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: "success",
      message: "APQR report successfully generated.",
      date: "2024-09-01",
      time: "10:30 AM",
    },
    {
      id: 2,
      type: "warning",
      message: "Deviation detected in product PQR2024-005.",
      date: "2024-09-02",
      time: "02:15 PM",
    },
    {
      id: 3,
      type: "error",
      message: "Failed to fetch product data for review.",
      date: "2024-09-03",
      time: "11:45 AM",
    },
    {
      id: 4,
      type: "info",
      message: "A new CAPA has been initiated for PQR2024-003.",
      date: "2024-09-03",
      time: "03:10 PM",
    },
    {
      id: 5,
      type: "success",
      message: "Change control approved for product PQR2024-007.",
      date: "2024-09-04",
      time: "09:00 AM",
    },
    {
      id: 6,
      type: "warning",
      message: "OOS initiated for product PQR2024-009.",
      date: "2024-09-04",
      time: "01:30 PM",
    },
    {
      id: 7,
      type: "error",
      message: "System error while generating the report.",
      date: "2024-09-05",
      time: "04:45 PM",
    },
    {
      id: 8,
      type: "info",
      message: "New variation filing submitted for product PQR2024-010.",
      date: "2024-09-06",
      time: "08:20 AM",
    },
    {
      id: 9,
      type: "success",
      message: "Registration notification successfully completed.",
      date: "2024-09-06",
      time: "11:15 AM",
    },
    {
      id: 10,
      type: "warning",
      message: "Change control pending approval for PQR2024-008.",
      date: "2024-09-07",
      time: "01:00 PM",
    },
    {
      id: 11,
      type: "error",
      message: "Failed to submit recall data for product PQR2024-006.",
      date: "2024-09-07",
      time: "03:30 PM",
    },
    {
      id: 12,
      type: "info",
      message: "CAPA successfully closed for product PQR2024-002.",
      date: "2024-09-08",
      time: "10:00 AM",
    },
    {
      id: 13,
      type: "success",
      message: "Deviation successfully resolved for PQR2024-001.",
      date: "2024-09-08",
      time: "12:30 PM",
    },
    {
      id: 14,
      type: "warning",
      message: "APQR review overdue for product PQR2024-004.",
      date: "2024-09-09",
      time: "09:45 AM",
    },
    {
      id: 15,
      type: "error",
      message: "OOS issue identified in batch #B90234.",
      date: "2024-09-09",
      time: "02:00 PM",
    },
    {
      id: 16,
      type: "info",
      message: "New batch of data added for PQR2024-011.",
      date: "2024-09-09",
      time: "04:15 PM",
    },
  ]);

  const getAlertStyle = (type, isRead) => {
    let baseClass = "border-l-4 p-4 rounded-lg shadow-md ";
    let readClass = isRead ? "opacity-50 " : ""; // If read, reduce opacity
    switch (type) {
      case "success":
        return baseClass + readClass + "bg-green-100 text-green-700 border-green-400";
      case "warning":
        return baseClass + readClass + "bg-yellow-100 text-yellow-700 border-yellow-400";
      case "error":
        return baseClass + readClass + "bg-red-100 text-red-700 border-red-400";
      case "info":
        return baseClass + readClass + "bg-blue-100 text-blue-700 border-blue-400";
      default:
        return "";
    }
  };

  const addNotification = () => {
    const types = ["success", "warning", "error", "info"];
    const newNotification = {
      id: notifications.length + 1,
      type: types[Math.floor(Math.random() * types.length)],
      message: "This is a new random notification.",
      date: new Date().toISOString().split("T")[0],
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      isRead: false,
    };
    setNotifications([newNotification, ...notifications]);
  };

  const markAsRead = (id) => {
    const updatedNotifications = notifications.map((notification) =>
      notification.id === id ? { ...notification, isRead: true } : notification
    );
    setNotifications(updatedNotifications);
  };

  return (
    <>
      <Header />
      <BottomHeader />
      <div className="container mx-auto mt-8 p-4">
        {/* Button to add new notification */}
        <div className="flex justify-end mb-4">
          <button
            onClick={addNotification}
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow-lg"
          >
            Send Notification
          </button>
        </div>

        {/* Notification List */}
        {notifications.length === 0 ? (
          <div className="text-center text-gray-500 mt-12">
            <p className="text-2xl">No notifications</p>
          </div>
        ) : (
          <div className="space-y-4">
            {notifications.map((notification) => (
              <div
                key={notification.id}
                className={getAlertStyle(notification.type, notification.isRead)}
              >
                <p className="font-semibold">{notification.message}</p>
                <div className="text-sm text-gray-500 mt-1">
                  {notification.date} at {notification.time}
                </div>

                {/* Mark as Read Button */}
                {!notification.isRead && (
                  <button
                    onClick={() => markAsRead(notification.id)}
                    className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-1 px-3 mt-2 rounded-lg shadow-sm"
                  >
                    Mark as Read
                  </button>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
