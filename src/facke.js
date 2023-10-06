if(numberofbook<ticketNumber){
    let updatedSeat = seats.map(item => item.map(data => {
        if (data.id == seatId) {
            if (data.isBooked) {
                alert("THis seat Already Booked ... !")
                return { ...data, isSelected: false }
            } else {
                if(data.isSelected===false){
                    setNumberofbook(numberofbook+1)
                    return { ...data, isSelected: true}
                    
                }else{
                    setNumberofbook(numberofbook-1)
                    return { ...data, isSelected: false}
                }
            }

        } else {
            return data
        }
    }))
    setSeats(updatedSeat)
}else{
    toast.error("You have select all tickets Click to proceed..!")
}