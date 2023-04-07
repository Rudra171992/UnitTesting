import {render,screen,within} from "@testing-library/react"
import ShowDetails from "./ShowDetails"

function renderComponent(){
    const users=[
        {name:'neha' ,email:'neha@gmail.com'},
        {name:'rudra' ,email:'rudra@gmail.com'}
    ]

    render(<ShowDetails users={users}/>)

    return{
        users
    }
}

test('render one row per user', ()=>{
    //Render the components


    const{container}=renderComponent()

    // const users =[
    //     {name:'jane' , email:'jane@gmail.com'},
    //     {name:'bob' , email:'bob@gmail.com'}
    // ];
    // const{container}=render(<ShowDetails users={users} />)
    
    //Find all the rows in the table

    // 1.screen.logTestingPlaygroundURL();-- only use once create playground

    // 2. const rows= screen.getAllByRole('row');

    const rows= within(screen.getByTestId('users')).getAllByRole('row')

    // eslint-disable-next-line
    // const rows =container.querySelectorAll('tbody tr')

    //Assertion:correct number of rows in the table

    expect(rows).toHaveLength(2)
})

test('render the emailand name of each user', ()=>{
    
    const {users}= renderComponent()

    for(let user of users) {
        const name= screen.getByRole('cell',{name:user.name});
        const email= screen.getByRole('cell',{name:user.email});

        expect(name).toBeInTheDocument();
        expect(email).toBeInTheDocument();
    }
})