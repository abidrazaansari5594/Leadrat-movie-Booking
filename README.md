//     const seats = { "0": [0,0,0,1,2,3,4,0,5,], "1": [...] };
// Object.keys(seats).forEach(row => seatObject = seats[row].includes(seatNumber));



const [seats, setSeats] = useState(layout.map((item,index) => {
        const seatType = index > 1 ? "standard" : "premium"
        item.map((data) => (
            { id: data, isZero: !!data, isSelected: false, isBooked: false, type: seatType }))
    }))