import React from 'react';

export const TodoItem = ({todo, onDelete}) => {

    return (
        <div>
            <div>
                <button>Отметить выполнение</button>
                <span>{todo.text}</span>
            </div>
            <button onClick={() => onDelete(todo.id)}>DELETE</button>
        </div>
    );
};
