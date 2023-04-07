import {render,screen} from '@testing-library/react';
import user from '@testing-library/user-event'
import FormData from './FormData';

test('it shows two inputs and a button',() =>{
    //render the component

    render(<FormData />)

    //Manipulate the component or find an element in it

    const inputs= screen.getAllByRole('textbox')
    const button = screen.getByRole('button')

    //Assertion- make sure the component is doing what we expect it to do

    expect(inputs).toHaveLength(2)
    expect(button).toBeInTheDocument;
})


test('It call userAdd when the form is submitted', () =>{

    const mock =jest.fn();
    //NOT THE BEST IMPLEMENTATION

    // const argList =[];
    // const callback = (...args) =>{
    //     argList.push(args)
    // }
    //Try to render my component

    // render(<FormData userAdd={callback} />)
    render(<FormData userAdd={mock} />)

    //Find the two inputs

    // const [nameInput,emailInput]=screen.getAllByRole('textbox');

    const nameInput =screen.getByRole('textbox',{
        name: /name/i
    })

    const emailInput=screen.getByRole('textbox',{
        name: /email/i
    })

    //Simulate typing in a name
    user.click(nameInput)
    user.keyboard('jane')
    //Simulate typing in an email
    user.click(emailInput)
    user.keyboard('jane@gmail.com')
    //Find the button
    const button=screen.getByRole('button');
    //Simulate clicking the button
    user.click(button)

    //Assertion to make sure 'userAdd' gets called with email/name

    // expect(argList).toHaveLength(1);
    // expect(argList[0][0]).toEqual({ name:'jane', email:'jane@gmail.com'})

    expect(mock).toHaveBeenCalled();
    expect(mock).toHaveBeenCalledWith({name:'jane',email:'jane@gmail.com'})
})