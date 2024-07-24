import React from "react";
import Header from "../Component/Header";
import BottomHeader from "../Component/BottomHeader";

export default function Notification() {
  return (
    <>
      <Header />
      <BottomHeader />
      <div className="text-center text-gray-500 mt-12">
        <p class="text-2xl">No notification</p>
      </div>
    </>
  );
}
