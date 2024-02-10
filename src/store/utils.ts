// Action Tracker Type
export type ActionTracker = {
  isLoading: boolean;
  isError: boolean;
  isSuccess: boolean;
  errorMessage: string;
  successMessage: string;
};

// Initial Value For Action Tracker
export const initialActionTracker: ActionTracker = {
  isLoading: false,
  isError: false,
  isSuccess: false,
  errorMessage: "",
  successMessage: "",
};

export const defaultLoadingActionTracker: ActionTracker = {
  isLoading: true,
  isError: false,
  isSuccess: false,
  errorMessage: "",
  successMessage: "",
};

// Functions to set pending state
export const handlePending = () => {
  return { ...initialActionTracker, isLoading: true };
};
// Function to set success state
export const handleSuccess = (message: any) => {
  return {
    ...initialActionTracker,
    isLoading: false,
    isSuccess: true,
    successMessage: message || "Request completed successfully",
  };
};
// Function to set failure state
export const handleFailure = (message: any) => {
  return {
    ...initialActionTracker,
    isError: true,
    isLoading: false,
    errorMessage: message || "Failed to complete your request",
  };
};
