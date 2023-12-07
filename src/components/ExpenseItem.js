import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
    const { dispatch } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });
    }

    const decreaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: -10,
        };
        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });
    }

    const greenButtonStyle = {
        display: 'flex', // Usa flexbox para centrar el contenido
        justifyContent: 'center', // Centra horizontalmente
        alignItems: 'center', // Centra verticalmente
        borderRadius: '50%', // Hace que el botón sea redondo
        backgroundColor: 'green', // Color verde para el botón '+'
        color: 'white', // Texto en color blanco para contraste
        border: 'none', // Quita el borde
        width: '30px', // Ancho del botón
        height: '30px', // Alto del botón
        fontSize: '1.5em', // Tamaño de la fuente más grande
        cursor: 'pointer',
    };
    
    const redButtonStyle = {
        display: 'flex', // Usa flexbox para centrar el contenido
        justifyContent: 'center', // Centra horizontalmente
        alignItems: 'center',
        borderRadius: '50%', // Hace que el botón sea redondo
        backgroundColor: 'red', // Color rojo para el botón '-'
        color: 'white', // Texto en color blanco para contraste
        border: 'none', // Quita el borde
        width: '30px', // Ancho del botón
        height: '30px', // Alto del botón
        fontSize: '1.5em', // Tamaño de la fuente más grande
        lineHeight: '0', // Para reducir el espacio vertical del botón
        cursor: 'pointer', // Cambia el cursor al pasar sobre el botón
    };
    

    return (
        <tr>
            <td>{props.name}</td>
            <td>£{props.cost}</td>
            <td><button style={greenButtonStyle} onClick={event => increaseAllocation(props.name)}>+</button></td>
            <td><button style={redButtonStyle} onClick={event => decreaseAllocation(props.name)}>-</button></td>
            <td><TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete></td>
        </tr>
    );
};

export default ExpenseItem;
