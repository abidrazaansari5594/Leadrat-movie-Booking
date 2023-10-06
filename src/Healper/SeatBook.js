
// { id: data, isZero: data, isSelected: false, isBooked: false, type: "standard" }
export default function seatBook(seatId,seats,setSeats,toast){
    let updatedSeat = seats.map(item => item.map(data => {
        if (data.id === seatId) {
            if (data.isBooked) {
                toast.error("THis seat Already Booked ... !")
                return { ...data, isSelected: false }
            } else {
                if(data.isSelected===false){
                    return { ...data, isSelected: true}
                    
                }else{
                    return { ...data, isSelected: false}
                }
            }

        } else {
            return data
        }
    }))
    setSeats(updatedSeat)
}