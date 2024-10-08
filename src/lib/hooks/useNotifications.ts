import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  AddNotificationBody,
  CreateNotification,
  DeleteNotification,
  GetUserNotifications,
  MarkNotificationAsRead,
} from "../api/notifications";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { useAppStore } from "../store/useAppStore";


const useNotifications = () => {
  const queryClient = useQueryClient();
  const { DBDetails } = useAppStore();

  const {
    data: notifications,
    isLoading,
    error,
    refetch,
  } = useQuery(
    ["notifications"],
    async () => {
      console.log("first");
      const response = await GetUserNotifications(DBDetails?.id as number);
      return response;
    },
    {
      enabled: !!DBDetails, // Enable the query only if DBDetails is defined
    }
  );

  const createNotificationMutation = useMutation(
    async (notificationData: AddNotificationBody) => {
      const response = await CreateNotification(notificationData);
      return response;
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["notifications"]);
      },
    }
  );

  const markAsReadMutation = useMutation(
    async (notificationId: number) => {
      const response = await MarkNotificationAsRead(notificationId);
      return response;
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["notifications"]);
      },
    }
  );

  const deleteNotificationMutation = useMutation(
    async (notificationId : number) => {
      const response = await DeleteNotification(notificationId);
      return response;
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["notifications"]);
      },
    }
  );

  return {
    notifications,
    isLoading,
    error,
    createNotification: createNotificationMutation.mutate,
    markAsRead: markAsReadMutation.mutate,
    deleteNotification: deleteNotificationMutation.mutate,
    refetchNotifications: refetch,
  };
};

export default useNotifications;
