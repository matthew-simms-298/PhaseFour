

function Keypad() {

    const [firstnum, setFirstnum] = useState("");
    const [secondnum, setSecondnum] = useState("");
    const [operator, setOperator] = useState("");
    const [result, setResult] = useState("");

    const handleNumPress = (buttonValue) => {
        if (firstnum.length < 10) {
            setFirstnum(firstnum + buttonValue);
        }
    };

    const handleOperatorPress = (buttonValue) => {
        setOperator(buttonValue);
        setSecondnum(firstnum);
        setFirstnum("");
    };

    const clear = () => {
        setFirstnum("");
        setSecondnum("");
        setOperator("");
        setResult(null);
    }

    const getAnswer = () => {
    switch (operator) {
        case "+":
            setResult(parseInt(firstnum) + parseInt(secondnum));
            break;
        case "-":
            setResult(parseInt(secondnum) - parseInt(firstnum));
            break;
        case "*":
            setResult(parseInt(firstnum) * parseInt(secondnum));
            break;
        case "/":
            setResult(parseInt(secondnum) / parseInt(firstnum));
            break;
        default:
            break;
    }
    }
    

    return (
        0
    );
}