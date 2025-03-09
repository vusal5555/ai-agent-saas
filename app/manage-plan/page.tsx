import SchematicComponent from "@/components/schematic/SchematicComponent";
import React from "react";

const ManagePlanPage = () => {
  return (
    <div className="container mx-auto p-4 md:p-0">
      <h1 className="text-2xl font-bold mb-4 my-8">Manage Your Plan</h1>
      <p className="text-gray-600 mb-8">
        Manage your subscription and billing details here.
      </p>

      <SchematicComponent componentId="cmpn_AwpSo8ATM5C" />
    </div>
  );
};

export default ManagePlanPage;
