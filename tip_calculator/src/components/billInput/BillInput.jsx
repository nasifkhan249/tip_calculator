
const BillInput = ({bill,onSetBill}) => {
    return (
        <div>
            <label>How much was bill?</label>
            <input type="text" placeholder="Bill value"
            value={bill} onChange={(e)=>onSetBill(Number(e.target.value))}/>
        </div>
    );
};

export default BillInput;