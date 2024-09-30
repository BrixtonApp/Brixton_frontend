import React, { Component } from "react";
import { useLocation, Navigate } from "react-router-dom";
import APIService from "./APIService";

export const protectedRoute = ({ children: Component }) => {
  const location = useLocation();
  APIService.isAuthenticated() ? (
    Component
  ) : (
    <Navigate to="/login" replace state={{ from: location }} />
  );
};
export const adminRoute = ({ children: Component }) => {
  const location = useLocation();
  APIService.isAdmin() ? (
    Component
  ) : (
    <Navigate to="/login" replace state={{ from: location }} />
  );
};
