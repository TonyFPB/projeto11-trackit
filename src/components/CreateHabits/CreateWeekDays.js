import styled from "styled-components"

export default function CreateWeekDays({ setDaysList, daysList, loading }) {
    console.log(daysList)
    function selectDays(day) {
        if (!loading) {
            if (daysList.includes(day)) {
                const newList = [...daysList]
                newList.splice(newList.indexOf(day), 1)
                setDaysList(newList)
            } else {
                const newList = [...daysList]
                newList.push(day)
                newList.sort()
                setDaysList(newList)
            }
        }

    }
    return (
        <StyledWeekDays>
            <StyledDay onClick={() => selectDays(0)} daysListBool={daysList.includes(0)}>D</StyledDay>
            <StyledDay onClick={() => selectDays(1)} daysListBool={daysList.includes(1)}>S</StyledDay>
            <StyledDay onClick={() => selectDays(2)} daysListBool={daysList.includes(2)}>T</StyledDay>
            <StyledDay onClick={() => selectDays(3)} daysListBool={daysList.includes(3)}>Q</StyledDay>
            <StyledDay onClick={() => selectDays(4)} daysListBool={daysList.includes(4)}>Q</StyledDay>
            <StyledDay onClick={() => selectDays(5)} daysListBool={daysList.includes(5)}>S</StyledDay>
            <StyledDay onClick={() => selectDays(6)} daysListBool={daysList.includes(6)}>S</StyledDay>
        </StyledWeekDays>
    )
}
const StyledWeekDays = styled.ul`
    display: flex;
    margin-top: 6px;
   
`
const StyledDay = styled.li`
    display: flex;
    align-items: center;
    justify-content: center;
    margin:0 4px 0 0;
    padding: 0;
    width: 30px;
    height:30px;
    background-color:${({ daysListBool }) => daysListBool ? "#CFCFCF" : "#FFFFFF"}; /*muda para #CFCFCF quando selecionado! #FFFFFF*/
    border: 1px solid ${({ daysListBool }) => daysListBool ? "#CFCFCF" : "#D5D5D5"}; /*muda para #CFCFCF quando selecionado! #D5D5D5*/
    border-radius: 5px;

    color: ${({ daysListBool }) => daysListBool ? "#FFFFFF" : "#DBDBDB"};/*muda para #FFFFFF quando selecionado! #DBDBDB*/
    
    
`
export { StyledWeekDays, StyledDay }