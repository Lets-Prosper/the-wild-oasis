import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteBooking as deleBookingApi } from "../../services/apiBookings";
import { toast } from "react-hot-toast";

function useDeleteBooking() {
  const queryClient = useQueryClient();
  const { mutate: deleteBooking, isLoading: isDeleting } = useMutation({
    mutationFn: (bookingId) => deleBookingApi(bookingId),

    onSuccess: () => {
      toast.success(`Booking was successfully deleted`);
      queryClient.invalidateQueries({ queryKey: ["bookings"] });
    },

    onError: () => toast.error("There was an eror deleting booking"),
  });
  return { deleteBooking, isDeleting };
}

export default useDeleteBooking;
