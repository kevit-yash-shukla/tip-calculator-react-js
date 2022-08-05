import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Style.css'
function App() {


  const handleSubmit=(e)=>{
    e.preventDefault();
    const amount = parseInt(e.target.num.value)
    const tipPercent = parseInt(e.target.num1.value)
    const tipAmount = parseInt(amount * (tipPercent/100))
    const totalBill = amount + tipAmount
    console.log(totalBill)
    document.getElementById('bill').innerText = totalBill
  }

  return (
  <>
{/*  <div className="container text-center mt-5">*/}
{/*  <p className="text-center display-6">Tip Calulator</p>*/}
{/*<Form onSubmit={ handleSubmit}>*/}
{/*  <br/>*/}
{/*  <Form.Label>Enter Amount: </Form.Label> &nbsp;*/}
{/*  <Form.Control className="" type="number" name="num" placeholder="Enter amount"/><br/><br/>*/}
{/*  <Form.Label>Enter Tip Percentage: </Form.Label> &nbsp;*/}
{/*  <input className="" type="number" name="num1" placeholder="Enter tip percentage"/><br/><br/>*/}
{/*  <label>Total Bill is: </label> &nbsp;*/}
{/*  <label id="bill"></label> <br/> <br/>*/}
{/*  <Button>Calculate</Button>*/}
{/*</Form>*/}
{/*  </div>*/}
    <Form className="container mt-sm-5 col-sm-3" onSubmit={handleSubmit}>
      <Form.Label className=" container text-center display-6">Tip Calculator</Form.Label>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Amount</Form.Label>
        <Form.Control type="number" name="num" placeholder="Enter amount" /> <br/>
        <Form.Label>Enter Tip Percentage</Form.Label>
        <Form.Control type="number" name="num1" placeholder="Enter tip percentage" />
        {/*<Form.Text className="text-muted">*/}
        {/*  We'll never share your email with anyone else.*/}
        {/*</Form.Text>*/}
      </Form.Group>


      {/*<Form.Group className="mb-3" controlId="formBasicCheckbox">*/}
      {/*  <Form.Check type="checkbox" label="Check me out" />*/}
      {/*</Form.Group>*/}

      <Form.Label className="display-6" >Total Amount  : </Form.Label>
      <Form.Label className="display-6" id="bill" ></Form.Label>
      <center>
      <Button  className="text-center mt-3" variant="primary" type="submit">
        Submit
      </Button>
      </center>
    </Form>
    <div className="footer">
      <p className="text-center mt-4 ">@copyright 2022 | all right reserved | Developed by: Shukla yash </p>
      <p className="text-center"></p>
    </div>

  </>
  );
}

export default App;
