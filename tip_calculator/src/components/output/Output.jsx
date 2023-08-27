

const Output = ({bill,tip}) => {
    return (
        <div>
            <h1>
                You pay: ${bill+tip} (${bill} + ${tip} )Tip
            </h1>
        </div>
    );
};

export default Output;